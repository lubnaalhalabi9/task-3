// Used in: Admission page - Fee Structure section
// Shows: two cards - programs table (5 columns) + additional services table (2 columns)
// Mobile: horizontal scroll on the programs table

import "./FeeStructure.css";

interface ProgramFee {
  program: string;
  ageGroup: string;
  annualTuition: string;
  registrationFee: string;
  activityFee: string;
}

interface AdditionalService {
  name: string;
  price: string;
}

interface FeeStructureProps {
  programs: ProgramFee[];
  additionalServices: AdditionalService[];
}

const FeeStructure = ({ programs, additionalServices }: FeeStructureProps) => {
  return (
    <div className="fee-structure-container">

      <div className="fee-card">
        <div className="fee-header">
          <div className="fee-header-cell">Program</div>
          <div className="fee-header-cell">Age Group</div>
          <div className="fee-header-cell">Annual Tuition</div>
          <div className="fee-header-cell">Registration Fee</div>
          <div className="fee-header-cell">Activity Fee</div>
        </div>

        <div className="fee-content">
          {programs.map((row, i) => (
            <div key={i} className="fee-row">
              <div className="fee-cell">{row.program}</div>
              <div className="fee-cell">{row.ageGroup}</div>
              <div className="fee-cell">{row.annualTuition}</div>
              <div className="fee-cell">{row.registrationFee}</div>
              <div className="fee-cell">{row.activityFee}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="fee-card">
        <div className="fee-additional-header">
          <span>Additional Services</span>
        </div>

        <div className="fee-content">
          {additionalServices.map((service, i) => (
            <div key={i} className="fee-row fee-row--services">
              <div className="fee-cell">{service.name}</div>
              <div className="fee-cell">{service.price}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeeStructure;
