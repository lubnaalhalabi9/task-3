// Sections: Hero | Admission Process (6 steps) | Fee Structure (programs + additional services)

import Title from "../components/OurBenefits/Title"
import PageHero from "../components/PageHero/PageHero"
import AdmissionProcess from "../components/AdmissionProcess/AdmissionProcess"
import FeeStructure from "../components/FeeStructure/FeeStructure"

// Admission steps data (01-06)
const processSteps = [
  {
    number: "01",
    title: "Inquiry",
    description: "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
  },
  {
    number: "02",
    title: "School Tour",
    description: "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
  },
  {
    number: "03",
    title: "Application Form",
    description: "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    number: "04",
    title: "Parent Interview",
    description: "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    number: "05",
    title: "Student Assessment",
    description: "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
  },
  {
    number: "06",
    title: "Acceptance",
    description: "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
  },
]

// Fee programs data
const feePrograms = [
  { 
    program: "Nursery",
    ageGroup: "2 - 3 Years", 
    annualTuition: "$1,686", 
    registrationFee: "$162", 
    activityFee: "$12" 
  },
  {
    program: "Pre - Kindergartens", 
    ageGroup: "3 - 4 Years", 
    annualTuition: "$2,686", 
    registrationFee: "$220", 
    activityFee: "$16" 
  },
  { 
    program: "Kindergarten",
    ageGroup: "4 - 5 Years", 
    annualTuition: "$3,686", 
    registrationFee: "$340", 
    activityFee: "$20" 
  },
]

// Additional services data
const additionalServices = [
  { 
    name: "Before and After-School Care", 
    price: "$120 / per month"   
  },
  { 
    name: "Language Immersion Program", 
    price: "$60 / per semester" 
  },
  { 
    name: "Transportation (optional)",    
    price: "$80 / per month"
  },
]

const Admission = () => {
  return (
    <>
      <PageHero
        squareText="Admission"
        title="Join Our Family of Young Learners"
        description="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />

      <div>
        <Title
          squareText="Process"
          title="Admission Process"
          paragraph="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
        />
        <AdmissionProcess steps={processSteps} />
      </div>

      <div>
        <Title
          squareText="Our Features"
          title="Fee Structure"
          paragraph="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
        />
        <FeeStructure
          programs={feePrograms}
          additionalServices={additionalServices}
        />
      </div>
    </>
  )
}

export default Admission
