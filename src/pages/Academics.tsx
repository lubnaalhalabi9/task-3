// Sections: Special Features | Curriculum (StudyCards) | Gallery

import "../components/OurBenefits/ourBenefits.css"
import Card from "../components/OurBenefits/Card"
import Title from "../components/OurBenefits/Title"
import PageHero from "../components/PageHero/PageHero"
import StudyCard from "../components/StudyCard/StudyCard"
import Gallery from "../components/Gallery/Gallery"

import img1 from '../assets/images/AcademicsFeatures1.png'
import img2 from '../assets/images/AcademicsFeatures2.png'
import img3 from '../assets/images/AcademicsFeatures3.png'
import img4 from '../assets/images/AcademicsFeatures4.png'
import img5 from '../assets/images/AcademicsFeatures5.png'
import img6 from '../assets/images/AcademicsFeatures6.png'

import study1 from "../assets/images/Study1.png"
import study2 from "../assets/images/Study2.png"
import study3 from "../assets/images/Study3.png"
import study4 from "../assets/images/Study4.png"
import study5 from "../assets/images/Study5.png"
import study6 from "../assets/images/Study6.png"

import ClassRoom1 from "../assets/images/Gallery/ClassRoom1.png"
import ClassRoom2 from "../assets/images/Gallery/ClassRoom2.png"
import ClassRoom3 from "../assets/images/Gallery/ClassRoom3.png"
import ClassRoom4 from "../assets/images/Gallery/ClassRoom4.png"
import Library1   from "../assets/images/Gallery/Library1.png"
import Library2   from "../assets/images/Gallery/Library2.png"
import Library3   from "../assets/images/Gallery/Library3.png"
import Library4   from "../assets/images/Gallery/Library4.png"
import Science1   from "../assets/images/Gallery/Science1.png"
import Science2   from "../assets/images/Gallery/Science2.png"
import Science3   from "../assets/images/Gallery/Science3.png"
import Science4   from "../assets/images/Gallery/Science4.png"
import Computer1  from "../assets/images/Gallery/Computer1.png"
import Computer2  from "../assets/images/Gallery/Computer2.png"
import Computer3  from "../assets/images/Gallery/Computer3.png"
import Computer4  from "../assets/images/Gallery/Computer4.png"
import Garden1    from "../assets/images/Gallery/Garden1.png"
import Garden2    from "../assets/images/Gallery/Garden2.png"
import Garden3    from "../assets/images/Gallery/Garden3.png"
import Garden4    from "../assets/images/Gallery/Garden4.png"

// Special features cards data
const CardsData = [
  { image: img1, heading: "Thematic Learning",    paragraph: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant." },
  { image: img2, heading: "STEAM Education",      paragraph: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills." },
  { image: img3, heading: "Language Immersion",   paragraph: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness." },
  { image: img4, heading: "Art and Creativity",   paragraph: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms." },
  { image: img5, heading: "Outdoor Education",    paragraph: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment." },
  { image: img6, heading: "Play-Based Learning",  paragraph: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking." },
]

// Curriculum study cards data
const StudyData = [
  { image: study1, title: "Language Arts",      description: "Reading, writing, storytelling, and communication skills." },
  { image: study2, title: "Mathematics",        description: "Number sense, basic operations, problem-solving, and logic." },
  { image: study3, title: "Science",            description: "Exploring the natural world through hands-on experiments and investigations." },
  { image: study4, title: "Social Studies",     description: "Cultivating an understanding of diverse cultures and communities." },
  { image: study5, title: "Arts and Crafts",    description: "Encouraging creativity through various art forms and crafts." },
  { image: study6, title: "Physical Education", description: "Promoting physical fitness, coordination, and teamwork." },
]

// Gallery categories data (each has label, title, desc, 4 images)
const GalleryData = [
  {
    label: "Classrooms", title: "Classrooms",
    description: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [{ src: ClassRoom1, alt: "Classroom 1" }, { src: ClassRoom2, alt: "Classroom 2" }, { src: ClassRoom3, alt: "Classroom 3" }, { src: ClassRoom4, alt: "Classroom 4" }],
  },
  {
    label: "Library", title: "Library",
    description: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literary development.",
    images: [{ src: Library1, alt: "Library 1" }, { src: Library2, alt: "Library 2" }, { src: Library3, alt: "Library 3" }, { src: Library4, alt: "Library 4" }],
  },
  {
    label: "Science Lab", title: "Science Lab",
    description: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: [{ src: Science1, alt: "Science Lab 1" }, { src: Science2, alt: "Science Lab 2" }, { src: Science3, alt: "Science Lab 3" }, { src: Science4, alt: "Science Lab 4" }],
  },
  {
    label: "Computer Lab", title: "Computer Lab",
    description: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
    images: [{ src: Computer1, alt: "Computer Lab 1" }, { src: Computer2, alt: "Computer Lab 2" }, { src: Computer3, alt: "Computer Lab 3" }, { src: Computer4, alt: "Computer Lab 4" }],
  },
  {
    label: "Garden and Nature Area", title: "Garden and Nature Area",
    description: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images: [{ src: Garden1, alt: "Garden 1" }, { src: Garden2, alt: "Garden 2" }, { src: Garden3, alt: "Garden 3" }, { src: Garden4, alt: "Garden 4" }],
  },
]

const Academics = () => {
  return (
    <>
      {/* Hero section */}
      <PageHero
        squareText="Academics"
        title="Nurturing Young Minds for Success"
        description="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge."
      />

      {/* Special features - 6 cards grid */}
      <div className="our-benefits-container">
        <Title
          squareText="Our Features"
          title="Our Special Features"
          paragraph="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        />
        <div className="cards-container">
          {CardsData.map((data, index) => (
            <Card key={index} image={data.image} heading={data.heading} paragraph={data.paragraph} />
          ))}
        </div>
      </div>

      {/* Curriculum - StudyCards grid (vertical variant) */}
      <div>
        <Title
          squareText="Our Curriculum"
          title="What Students Learn"
          paragraph="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success."
        />
        <div className="study-container">
          {StudyData.map((data, index) => (
            <StudyCard key={index} image={data.image} title={data.title} description={data.description} />
          ))}
        </div>
      </div>

      {/* Gallery - filterable by category, each with a slider */}
      <Gallery categories={GalleryData} />
    </>
  )
}

export default Academics
