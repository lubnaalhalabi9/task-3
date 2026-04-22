// Used in: Questions accordion
// Shows: question + toggle icon (+ / -) + collapsible answer

import { IoAdd, IoRemove } from "react-icons/io5";

interface QuestionCardItems {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const QuestionCard = ({ question, answer, isOpen, onClick }: QuestionCardItems) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        <h3 className="accordion-question">{question}</h3>
        <div className="accordion-icon">
          {isOpen ? <IoRemove /> : <IoAdd />}
        </div>
      </div>
      <div className="accordion-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QuestionCard;