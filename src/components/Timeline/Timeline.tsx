// Used in: About page - History section
// Shows: vertical timeline with year card + connector line + title & description

import "./Timeline.css"
import img from "../../assets/images/TimelineImg.png"

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface Props {
  data: TimelineItem[];
}

const Timeline = ({ data }: Props) => {
  return (
    <div className="timeline-container">
      <div className="timeline-inner">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">

            <div className="timeline-left">
              {/* Connector: circles + horizontal orange/black line */}
              <div className="design-container">
                <div className="circle" />
                <div className="horizontal-line"><div /></div>
                <div className="circle" />
              </div>

              {/* Year card with decorative image */}
              <div className="year-card">
                <div className="timeline-img">
                  <img src={img} alt="" />
                </div>
                <span className="year">{item.year}</span>
              </div>
            </div>

            {/* Content: title + description */}
            <div className="timeline-content">
              <p className="timeline-title">{item.title}</p>
              <p className="timeline-description">{item.description}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
