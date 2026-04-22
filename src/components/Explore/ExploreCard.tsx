// Used in: Explore section
// Shows: title + decorative line + description + button with arrow icon

interface ExploreCardItems{
    title: string;
    description:string;
    text: string;
    icon: React.ReactNode;
}

const ExploreCard = ({title, description, text, icon}: ExploreCardItems) => {
  return (
    <div className='explore-card'>
      <div className='card-description'>
        <div className='title-line'>
            <div className='explore-title'>
                <p>{title}</p>
            </div>
            <div className='explore-line'>
                <div className="shape-right"></div>

                <div className="lines">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="line-container">
                            <div className="line"></div>
                        </div>
                    ))}
                </div>

                <div className="shape-left"></div>
            </div>
        </div>
        <div className="explore-description">
            <p>{description}</p>
        </div>
      </div>
      <div className='explore-button'>
        <span className="explore-button-text">{text}</span>
        <span className="explore-button-icon">{icon}</span>
      </div>
    </div>
  )
}

export default ExploreCard
