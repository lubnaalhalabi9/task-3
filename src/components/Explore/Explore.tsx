// Used in: Home page - last section
// Shows: Title + 4 navigation cards (About, Academics, Student Life, Admissions)

import Title from '../OurBenefits/Title'
import './explore.css'
import ExploreCard from './ExploreCard';
import { IoIosArrowRoundForward } from "react-icons/io";

const Explore = () => {
    const cardsData = [
         {
            title: "About Us",
            description: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
            text: "Learn More",
            icon: <IoIosArrowRoundForward />
        },
        {
            title: "Academics",
            description: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
            text: "Learn More",
            icon: <IoIosArrowRoundForward />
        },
        {
            title: "Student Life",
            description: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
            text: "Learn More",
            icon: <IoIosArrowRoundForward />
        },
        {
            title: "Admissions",
            description: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
            text: "Learn More",
            icon: <IoIosArrowRoundForward />
        }
    ]
  return (
    <div className='main-explore-container'>
      <Title 
       squareText='Explore More'
       title='Navigate through our Pages'
       paragraph='Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school'
       />
      
      <div className='explore-cards-container'>
         {cardsData.map((card, index) => (
                    <ExploreCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        text={card.text}
                        icon={card.icon}
                    />
                ))}
      </div>
    </div>
  )
}

export default Explore
