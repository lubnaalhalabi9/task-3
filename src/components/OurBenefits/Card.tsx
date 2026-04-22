// Used in: Home, About, Academics, StudentLife pages
// Shows: floating icon box (top-left) + heading + paragraph

import './ourBenefits.css'

interface CardItems {
    image : string;
    heading: string;
    paragraph: string;
}
const Card = ({ image, heading, paragraph } :CardItems) => {
  return (
    <div className="card-container">
        <div className="main-card">
          <div className="sub-container">
              <div className="icon-container">
                  <div className="icon"><img src={image} /></div>
              </div>
          </div>
          <div className="card-heading">
              {heading}
              </div>
          <div className="card-paragraph">
              {paragraph}
          </div>
        </div>
    </div>
  )
}

export default Card
