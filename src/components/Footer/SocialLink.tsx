interface SocialItems{
    icon: React.ReactNode;
    variant?: "small" | "large";
}
const SocialLink = ({ icon, variant = "small" }: SocialItems) => {
  return (
    <div>
        <div className={`social-item social-item--${variant}`}>
            <span className='social-icon'>
                {icon}
            </span>
        </div>
    </div>
  )
}

export default SocialLink
