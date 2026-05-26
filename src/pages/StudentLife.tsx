// Sections: Hero | Extracurricular Activities | Events & Celebrations | Student Support

import Card from "../components/OurBenefits/Card"
import "../components/OurBenefits/ourBenefits.css"
import Title from "../components/OurBenefits/Title"
import PageHero from "../components/PageHero/PageHero"
import StudyCard from "../components/StudyCard/StudyCard"
import img1 from "../assets/images/Features1.png"
import img2 from "../assets/images/Features2.png"
import img3 from "../assets/images/Features3.png"
import img4 from "../assets/images/Features4.png"
import img5 from "../assets/images/Features5.png"
import img6 from "../assets/images/Features6.png"
import image1 from "../assets/images/Achievements1.png"
import image2 from "../assets/images/Achievements2.png"
import image3 from "../assets/images/Achievements3.png"
import event1 from "../assets/images/Event1.png"
import event2 from "../assets/images/Event2.png"
import event3 from "../assets/images/Event3.png"
import event4 from "../assets/images/Event4.png"
import event5 from "../assets/images/Event5.png"
import event6 from "../assets/images/Event6.png"

// Extracurricular activities cards data
const FeaturesCards = [
  { 
    id: 1, 
    image: img1, 
    heading: "Sports and Athletics", 
    paragraph: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga." 
  },
  { 
    id: 2, 
    image: img2, 
    heading: "Art and Creativity", 
    paragraph: "Our art classes and creative workshops provide a platform for students to express their creativity." 
  },
  { 
    id: 3, 
    image: img3, 
    heading: "Music and Performing Arts", 
    paragraph: "Students can discover their musical talents through singing, playing instruments, and drama." 
  },
  { 
    id: 4, 
    image: img4, 
    heading: "Language Clubs", 
    paragraph: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures." 
  },
  { 
    id: 5, 
    image: img5, 
    heading: "Science Club", 
    paragraph: "The science club allows young scientists to explore the wonders of science through fun experiments." 
  },
  { 
    id: 6, 
    image: img6, 
    heading: "Cooking and Culinary Arts", 
    paragraph: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals." 
  },
]

// Events & Celebrations 
const EventsCards = [
  {
    id: 1,
    image: event1,
    title: "Annual Sports Day",
    description: "A day filled with friendly competition, team spirit, and sportsmanship.",
  },
  {
    id: 2,
    image: event2,
    title: "Cultural Festivals",
    description: "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
  },
  {
    id: 3,
    image: event3,
    title: "Art Exhibitions",
    description: "Showcasing our students' artistic talents through exhibitions and displays.",
  },
  {
    id: 4,
    image: event4,
    title: "Science Fair",
    description: "A platform for budding scientists to present their innovative projects and experiments.",
  },
  {
    id: 5,
    image: event5,
    title: "International Day",
    description: "A vibrant celebration of our diverse community, embracing cultures from around the world.",
  },
  {
    id: 6,
    image: event6,
    title: "Graduation Ceremony",
    description: "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
  },
]

// Student support cards data
const AchievementsCards = [
    {
        id: 1, 
        image: image1, 
        heading: "Counseling", 
        paragraph: "Professional counselors offer guidance and support to students, addressing their emotional and social well-being."
    },
    {
        id: 2, 
        image: image2, 
        heading: "Learning Support", 
        paragraph: "Our educators provide additional assistance to students who may require extra support in their academic journey."
    },
    {
        id: 3, 
        image: image3, 
        heading: "Parent-Teacher Collaboration", 
        paragraph: "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development."
    },
]

const StudentLife = () => {
  return (
    <>
      <PageHero
        squareText="Enriching Student Life"
        title="Embracing Learning with Discovery and Joy"
        description="Welcome to our Student Life page, where the magic of childhood comes alive through enriching experiences."
      />
      <div>
        <Title
          squareText="Our Features"
          title="Extracurricular Activities"
          paragraph="At Little Learners Academy, we believe in nurturing well-rounded individuals through extracurricular activities."
        />
        <div className="cards-container our-benefits-container">
          {FeaturesCards.map((card) => (
            <Card 
            key={card.id} 
            image={card.image} 
            heading={card.heading} 
            paragraph={card.paragraph} />
          ))}
        </div>
          <div>
            <Title
            squareText="Our Features"
            title="Events & Celebrations"
            paragraph="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
            />
            <div className="study-container">
              {EventsCards.map((card) => (
                <StudyCard 
                key={card.id} 
                image={card.image} 
                title={card.title} 
                description={card.description} 
                variant="horizontal"/>
              ))}
            </div>
          </div>
          <div>
            <Title
            squareText="Our Achievements"
            title="Student Support"
            paragraph="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
            />
            <div className="cards-container our-benefits-container">
            {AchievementsCards.map((card) => (
            <Card 
            key={card.id} 
            image={card.image} 
            heading={card.heading} 
            paragraph={card.paragraph} />
           ))}
            </div>
          </div>
      </div>
    </>
  )
}

export default StudentLife