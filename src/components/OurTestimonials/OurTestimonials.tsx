// Used in: Home page - Testimonials section
// Shows: Title + Slider with TestimonialCard items
// arrowsPosition="sides" => arrows on left/right desktop, bottom-center mobile

import "./ourTestimonials.css";
import Title from "../OurBenefits/Title";
import Slider from "../Slider/Slider";
import TestimonialCard from "./TestimonialCard";

import personalImage1 from "/assets/personalImage1.png";
import personalImage2 from "/assets/personalImage2.png";
import personalImage3 from "/assets/personalImage3.png";

const testimonialsData = [
  {
    id: 1,
    name: "Jennifer B",
    rating: 5,
    testimonial:
      "Little Learners Academy has been a second home for my child.",
    image: personalImage1,
  },
  {
    id: 2,
    name: "David K",
    rating: 5,
    testimonial:
      "Choosing Little Learners Academy was the best decision.",
    image: personalImage2,
  },
  {
    id: 3,
    name: "Emily L",
    rating: 5,
    testimonial:
      "My son's growth has been remarkable since joining.",
    image: personalImage3,
  },
];

const OurTestimonials = () => {
  return (
    <div className="our-testimonials-container">
      <Title
        squareText="Their Happy Words 🤗"
        title="Our Testimonials"
        paragraph="Our testimonials are heartfelt reflections."
      />

      <Slider
        data={testimonialsData}
        renderItem={(item) => <TestimonialCard {...item} />}
        slidesDesktop={3}
        slidesTablet={2}
        slidesMobile={1}
        arrowsPosition="sides"
      />
    </div>
  );
};

export default OurTestimonials;