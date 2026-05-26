// Shows: hero image with decorative elements + title/paragraph + statistics (students, awards, educators)

import "./hero.css"
import HeroImage from "../../assets/images/HeroImage.png"
import AbstractDesign from "../../assets/images/AbstractDesign.png"

interface StatisticsItems {    
    number: number,
    description: string;
}

const StatisticsData: StatisticsItems[] = [
    {
        number: 7000,
        description: "Students Passed Out"
    },
    {
        number: 37,
        description: "Awards & Recognitions"
    },
    {
        number: 15,
        description: "Experience Educators"
    }
]

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-inner">
                <div className="hero-image-container">
                    <div className="hero-image-container-inner">
                        <img src={HeroImage} alt="Hero" />
                    </div>
                    <div className="abstract-design-circle">
                        <img src={AbstractDesign} alt="Abstract Design" />
                    </div>
                    <div className="abstract-design right">
                        <div className="line-container">
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="abstract-design left">
                        <div className="line-container">
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="abstract-design top">
                        <div className="line-container">
                            <div className="shape"></div>
                            <div className="line"></div>
                            <div className="shape"></div>
                        </div>
                    </div>
                    <div className="abstract-design bottom">
                        <div className="line-container">
                            <div className="shape"></div>
                            <div className="line"></div>
                            <div className="shape"></div>
                        </div>
                    </div>
                </div>
                <div className="hero-text-container">
                    <div className="hero-title">
                        <div className="main-title">
                            <div className="text">
                                <p>Welcome to Little Learners Academy</p>
                            </div>
                            <div className="heading">
                                <p>
                                    Where Young Minds Blossom and <span>Dreams Take Flight.</span>
                                </p>
                            </div>
                        </div>
                        <div className="paragraph">
                            <p>
                                Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!
                            </p>
                        </div>
                    </div>
                    <div className="hero-description">
                        {StatisticsData.map((item, index) => {
                            const isLast = index === StatisticsData.length - 1;
                            return (
                                <div key={index} className={`stat-item ${isLast ? "no-stat-border" : ""}`}>
                                    <div className="stat-number">+{item.number.toLocaleString()}</div>
                                    <div className="stat-description">{item.description}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero