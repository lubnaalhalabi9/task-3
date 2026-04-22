// Sections: Hero | Our Benefits | Testimonials | FAQ | Explore

import Explore from "../components/Explore/Explore"
import Hero from "../components/Hero/Hero"
import OurBenefits from "../components/OurBenefits/OurBenefits"
import OurTestimonials from "../components/OurTestimonials/OurTestimonials"
import Questions from "../components/Questions/Questions"

const Home = () => {
    return (
        <>
            <Hero />
            <OurBenefits />
            <OurTestimonials />
            <Questions />
            <Explore />
        </>
    )
}

export default Home
