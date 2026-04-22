// Used in: About page - Mission & Vision section
// Shows: title (Mission/Vision) + icon image + description paragraph

import './AboutCard.css'

interface CardProps {
  title: string;
  image: string;
  paragraph: string;
}

const AboutCard = ({ title, image, paragraph }: CardProps) => {
  return (
    <div className="about-card-container">
      <div>
        <p>{title}</p>
        <div>
          <img src={image} />
        </div>
      </div>
      <p>{paragraph}</p>
    </div>
  )
}

export default AboutCard
