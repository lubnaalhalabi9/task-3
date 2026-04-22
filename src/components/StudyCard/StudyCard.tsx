// Used in: Academics page | StudentLife page - Events

import './StudyCard.css'

interface StudyCardProps {
  image: string;
  title: string;
  description: string;
  variant?: 'vertical' | 'horizontal';
}

const StudyCard = ({ image, title, description, variant = 'vertical' }: StudyCardProps) => {
  return (
    <div className={`study-card study-card--${variant}`}>
      <div className='study-img'>
        <img src={image} alt="study img" />
      </div>
      <div className='study-details'>
        <p className='study-title'>{title}</p>
        <p className='study-description'>{description}</p>
      </div>
    </div>
  )
}

export default StudyCard
