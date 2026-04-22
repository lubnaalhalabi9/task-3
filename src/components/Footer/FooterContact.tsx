interface ContactItems{
    content:string;
    Icon:React.ReactNode;
}

const FooterContact = ({ content, Icon }: ContactItems) => {
  return (
    <div> 
        <div className='contact'>
            <span className="contact-icon">
                {Icon}
            </span>
            <span className="contact-text">
                {content}
            </span>
        </div>
    </div>
  )
}

export default FooterContact
