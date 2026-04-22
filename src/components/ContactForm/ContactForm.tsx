// Used in: Contact page - below the Title
// Shows: social icons (large variant) floating above the form card + form fields grid + submit button
// fields and socials are passed as props from Contact.tsx

import { useState } from "react";
import SocialLink from "../Footer/SocialLink";
import "./ContactForm.css";

interface Field {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  full?: boolean;
  options?: string[];
}

interface Social {
  icon: React.ReactNode;
}

interface ContactFormProps {
  fields: Field[];
  socials: Social[];
}

const ContactForm = ({ fields, socials }: ContactFormProps) => {
  const [form, setForm] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const renderField = (field: Field) => {
    if (field.type === "textarea") {
      return (
        <textarea
          name={field.name}
          value={form[field.name]}
          onChange={handleChange}
          placeholder={field.placeholder}
          rows={5}
        />
      );
    }

    if (field.options) {
      return (
        <select name={field.name} value={form[field.name]} onChange={handleChange}>
          <option value="" disabled>{field.placeholder}</option>
          {field.options.map((opt) => (
            <option key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>{opt}</option>
          ))}
        </select>
      );
    }

    return (
      <input
        name={field.name}
        type={field.type ?? "text"}
        value={form[field.name]}
        onChange={handleChange}
        placeholder={field.placeholder}
      />
    );
  };

  return (
    <div className="contact-form-container">

      <div className="contact-form-socials">
        {socials.map((s, i) => (
          <SocialLink key={i} icon={s.icon} variant="large" />
        ))}
      </div>

      <div className="contact-form-card">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="contact-form-grid">
            {fields.map((field) => (
              <div
                key={field.name}
                className={`contact-form-field${field.full ? " contact-form-field--full" : ""}`}
              >
                <label>{field.label}</label>
                {renderField(field)}
              </div>
            ))}
          </div>
          <button type="submit" className="contact-form-submit">Submit</button>
        </form>
      </div>

    </div>
  );
};

export default ContactForm;
