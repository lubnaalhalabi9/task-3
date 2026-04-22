// Sections: Mission & Vision | Awards Slider | History Timeline | Team Members

import '../components/AboutSlider/AboutSlider.css'
import AboutCard from "../components/AboutCard/AboutCard"
import Card from "../components/OurBenefits/Card"
import Title from "../components/OurBenefits/Title"
import PageHero from "../components/PageHero/PageHero"
import Slider from "../components/Slider/Slider"
import Timeline from "../components/Timeline/Timeline"
import TeamCard from "../components/TeamCard/TeamCard"

import image1 from "/assets/AboutIcon1.png"
import image2 from "/assets/AboutIcon2.png"
import sliderImg1 from "/assets/AboutSliderImg1.png"
import sliderImg2 from "/assets/AboutSliderImg2.png"
import sliderImg3 from "/assets/AboutSliderImg3.png"
import sarah   from "/assets/Sarah.png"
import david   from "/assets/David.png"
import emily   from "/assets/Emily.png"
import michael from "/assets/Michael.png"
import jessica from "/assets/Jessica.png"
import william from "/assets/William.png"

// Mission & Vision cards data
const CardItems = [
  { title: "Mission", image: image1, paragraph: "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey." },
  { title: "Vision",  image: image2, paragraph: "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity." },
]

// Awards slider data
const SliderData = [
  { id: 1, image: sliderImg1, heading: "Outstanding Early Childhood Education Awar",  paragraph: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment." },
  { id: 2, image: sliderImg2, heading: "Innovative STEAM Education Award",             paragraph: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners." },
  { id: 3, image: sliderImg3, heading: "Environmental Stewardship Award",              paragraph: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students." },
]

// History timeline data
const TimelineData = [
  { year: "2023", title: "Resilience and Future Horizons", description: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow." },
  { year: "2017", title: "Innovation and Technology",      description: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students." },
  { year: "2012", title: "Expansion and Recognition",      description: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies." },
  { year: "2005", title: "Inception and Growth",           description: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth." },
]

// Team members data
const TeamData = [
  { image: sarah,   name: "Ms. Sarah Anderson",   heading: "Qualification:Bachelor's Degree in Early Childhood Education", paragraph: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn." },
  { image: david,   name: "Mr. David Roberts",    heading: "Qualification: Master's Degree in Elementary Education",       paragraph: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically." },
  { image: emily,   name: "Ms. Emily Hernandez",  heading: "Qualification: Diploma in Child Psychology",                   paragraph: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students." },
  { image: michael, name: "Mr. Michael Turner",   heading: "Qualification: Bachelor's Degree in Physical Education",       paragraph: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle." },
  { image: jessica, name: "Ms. Jessica Lee",      heading: "Qualification: Master's Degree in Special Education",          paragraph: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential." },
  { image: william, name: "Mr. William Parker",   heading: "Qualification: Bachelor's Degree in Fine Arts",                paragraph: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students." },
]

const About = () => {
  return (
    <>
      {/* Hero section */}
      <PageHero
        squareText="Overview"
        title="Welcome to Little Learners Academy"
        description="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />

      {/* Mission & Vision section */}
      <div>
        <Title
          squareText="Mission & Visions"
          title="Our Mission & Visions"
          paragraph="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
        />
        <div className="about-cards-wrapper">
          <div className="card-main-container">
            {CardItems.map((item, index) => (
              <AboutCard key={index} title={item.title} image={item.image} paragraph={item.paragraph} />
            ))}
          </div>
        </div>
      </div>

      {/* Awards & Recognitions slider */}
      <div className="about-slide">
        <Title
          squareText="Our Achievements"
          title="Our Awards and Recognitions"
          paragraph="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        />
        <Slider
          data={SliderData}
          renderItem={(item) => <Card image={item.image} heading={item.heading} paragraph={item.paragraph} />}
          slidesDesktop={3}
          slidesTablet={2}
          slidesMobile={1}
          arrowsPosition="bottom-right"
          bottomRightText={<span className="awards">8 More Awards</span>}
        />
      </div>

      {/* History timeline */}
      <div>
        <Title
          squareText="Our Progressive Journey"
          title="Our History"
          paragraph="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        />
        <Timeline data={TimelineData} />
      </div>

      {/* Team members */}
      <div className="sub-title">
        <Title
          squareText="Our Teachers With Experties"
          title="Our Team Members"
          paragraph="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        />
        <div className="team-cards-container">
          {TeamData.map((data, index) => (
            <TeamCard key={index} img={data.image} name={data.name} heading={data.heading} paragraph={data.paragraph} />
          ))}
        </div>
      </div>
    </>
  )
}

export default About
