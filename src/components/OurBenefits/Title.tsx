// Used in: all pages as section header
// Shows: square badge + heading + optional paragraph
// Accepts optional className to override styles (used in PageHero)

interface TitleItems {
    squareText : string;
    title : string;
    paragraph ?: string;
    className ?: string;
}

const Title = ({ squareText, title, paragraph, className  } : TitleItems) => {
  return (
      <div className={`title-container ${className || ''}`}>
        <div className='square'>
            <div className='square-text'>
                <p>{squareText}</p>
            </div>
        </div>
        <div className='title-heading'>
            <p>{title}</p>
        </div>
        <div className='title-paragraph'>
            <p>{paragraph}</p>
        </div>
      </div>
  )
}

export default Title
