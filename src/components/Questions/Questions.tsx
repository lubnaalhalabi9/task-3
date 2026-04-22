// Used in: Home page - FAQ section
// Shows: Title + accordion list (multiple items can be open at once)

import { useState } from 'react';
import Title from '../OurBenefits/Title';
import QuestionCard from './QuestionCard'; 
import './questions.css';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What are the school hours at Little Learners Academy?",
    answer: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
  },
  {
    id: 2,
    question: "How do you handle food allergies and dietary restrictions?",
    answer: "We take food allergies seriously. Parents must submit a medical plan and we provide allergy-friendly tables, staff training on epinephrine auto-injectors, and work with parents to create a safe lunch environment. Outside food is monitored carefully."
  },
  {
    id: 3,
    question: "Is there a uniform policy for students?",
    answer: "Yes, we have a uniform policy to promote a sense of belonging and equality among students. The uniform consists of a navy blue polo shirt, khaki pants or shorts, and comfortable shoes."
  },
  {
    id: 4,
    question: "What is the teacher-to-student ratio at Little Learners Academy?",
    answer: "Our teacher-to-student ratio is 1:8, ensuring each child receives personalized attention and support throughout their learning journey. For kindergarten, the ratio is even lower at 1:6."
  },
  {
    id: 5,
    question: "What extracurricular activities are available for students?",
    answer: "We offer a variety of extracurricular activities including art, music, sports, dance, drama, robotics, and language clubs. Activities vary by age group and season."
  },
  {
    id: 6,
    question: "How do you handle discipline and behavior management?",
    answer: "We follow a positive discipline approach focusing on teaching rather than punishing. We use clear classroom rules, redirection, behavior charts, and parent-teacher collaboration. Severe cases are handled with a tailored behavior support plan."
  },
  {
    id: 7,
    question: "What extracurricular activities are available for students?",
    answer: "We offer a variety of extracurricular activities including art, music, sports, dance, drama, robotics, and language clubs. Activities vary by age group and season."
  },
  {
    id: 8,
    question: "How do I apply for admission to Little Learners Academy?",
    answer: "You can apply online through our website. The process includes submitting an application form, providing previous school records (if applicable), scheduling a parent interview and student assessment, and paying a registration fee. For more details, please contact our admissions office at (555) 123-4567."
  }
];

const Questions = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = (id: number): void => {
    setOpenItems((prevOpenItems: number[]) =>
      prevOpenItems.includes(id)
        ? prevOpenItems.filter((itemId: number) => itemId !== id)
        : [...prevOpenItems, id]
    );
  };

  return (
    <div className='main-questions-container'>
      <Title
        squareText="Solutions For The Doubts"
        title="Frequently Asked Questions"
        paragraph="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      
      <div className='questions-container'>
        {faqData.map((item: FaqItem) => (
          <QuestionCard
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.includes(item.id)}
            onClick={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;