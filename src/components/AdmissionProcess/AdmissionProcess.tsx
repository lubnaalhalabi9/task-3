// Used in: Admission page - Admission Process section
// Shows: 6 steps , each with number box + connector (orange line + circle) + card

import "./AdmissionProcess.css";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface AdmissionProcessProps {
  steps: ProcessStep[];
}

const AdmissionProcess = ({ steps }: AdmissionProcessProps) => {
  return (
    <div className="admission-process-container">
      <div className="admission-process-grid">
        {steps.map((step) => (
          <div key={step.number} className="process-card-wrapper">
            
            <div className="process-number-box">
              <span className="process-number">{step.number}</span>
            </div>

            <div className="process-connector" />
            <div className="process-connector-circle" />

            <div className="process-card">
              <h3 className="process-title">{step.title}</h3>
              <p className="process-desc">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionProcess;
