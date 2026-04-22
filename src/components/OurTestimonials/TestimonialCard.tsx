// Used in: OurTestimonials slider
// Shows: profile image + name + star rating + testimonial text

import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  rating: number;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({ name, rating, testimonial, image }: TestimonialCardProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star star-filled" />);
    }

    if (hasHalfStar) {
      stars.push(<CiStar key="half" className="star star-half" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<CiStar key={`empty-${i}`} className="star star-empty" />);
    }

    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="personal-container">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <h3 className="person-name">{name}</h3>
      </div>

      <div className="stars-container">{renderStars()}</div>

      <p className="testimonial-text">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;