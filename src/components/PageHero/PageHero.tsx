// Used in: all inner pages (About, Academics, Admission, StudentLife, Contact)
// Shows: decorative design image (top-left) + Title (left) + description or contact links (right)
// links prop: optional 2x2 grid of contact info items (used in Contact page)

import Title from '../OurBenefits/Title'
import './PageHero.css'
import Design from "/assets/PageHeroDesign.png"

interface ContactLink {
  icon: React.ReactNode;
  text: string;
}

interface PageHeroProps {
  squareText: string;
  title: string;
  paragraph?: string;
  description?: string;
  links?: ContactLink[];
}

const PageHero = ({ squareText, title, paragraph, description, links }: PageHeroProps) => {
  return (
    <div className='page-hero'>
      <div className='content'>
        <div className='page-hero-title'>
            <Title 
                squareText={squareText}
                title={title}
                paragraph={paragraph}
                className="page-hero-custom-title"
            />
        </div>
        <div className='page-hero-right'>
          {description && (
            <p className='page-hero-description'>
                {description}
            </p>
          )}
          {links && (
            <div className='page-hero-links'>
              {links.map((link, i) => (
                <div key={i} className='page-hero-link'>
                  <span className='page-hero-link-icon'>{link.icon}</span>
                  <span className='page-hero-link-text'>{link.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='page-hero-img'>
        <img src={Design} alt="Hero Design" />
      </div>
    </div>
  )
}

export default PageHero
