// Shows: Title + 6 benefit cards in a 3-column grid

import './ourBenefits.css'
import Card from './Card'
import Title from './Title'
import img1 from "../../assets/images/HomeBenefitsImg1.png"
import img2 from "../../assets/images/HomeBenefitsImg2.png"
import img3 from "../../assets/images/HomeBenefitsImg3.png"
import img4 from "../../assets/images/HomeBenefitsImg4.png"
import img5 from "../../assets/images/HomeBenefitsImg5.png"
import img6 from "../../assets/images/HomeBenefitsImg6.png"

const cardsData = [
  {
    id: 1,
    image: img1,
    heading: "Holistic Learning Approach",
    paragraph: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
  },
  {
    id: 2,
    image: img2,
    heading: "Experienced Educators",
    paragraph: "Our passionate and qualified teachers create a supportive and stimulating learning environment."
  },
  {
    id: 3,
    image: img3,
    heading: "Nurturing Environment",
    paragraph: "We prioritize safety and provide a warm and caring atmosphere for every child."
  },
  {
    id: 4,
    image: img4,
    heading: "Play-Based Learning",
    paragraph: "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
  },
  {
    id: 5,
    image: img5,
    heading: "Individualized Attention",
    paragraph: "Our small class sizes enable personalized attention, catering to each child's unique needs."
  },
  {
    id: 6,
    image: img6,
    heading: "Parent Involvement",
    paragraph: "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
  }
]

const OurBenefits = () => {

  return (
    <div className='our-benefits-container'>
      <Title 
       squareText="Children Deserve Bright Future"
       title="Our Benefits"
       paragraph="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
       />
       <div className='cards-container'>
            {cardsData.map((card) => (
          <Card 
            key={card.id}
            image={card.image}
            heading={card.heading}
            paragraph={card.paragraph}
          />
        ))}
       </div>
    </div>
  )
}

export default OurBenefits
