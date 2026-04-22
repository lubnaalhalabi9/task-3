interface LinksItems{
    title:string;
    texts:string[];
}

const FooterLink = ({ title, texts } : LinksItems) => {
  return (
    <div className="footer-link-group">
        <div className='link-title'>
            <p>{title}</p>
        </div>
        <div className='link-info-container'>
            {texts.map((text, index) => (
                    <div className='link-info' key={index}>
                        <a href="#">{text}</a>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default FooterLink
