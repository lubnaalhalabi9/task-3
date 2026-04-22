interface LegalItems{
    content: string;
    isLast: boolean;
}

const FooterLegal = ({ content, isLast } : LegalItems) => {
  return (
    <div>
        <div className={`legal-item ${isLast ? "no-border" : ""}`}>
            <p>
                {content}
            </p>
        </div>
    </div>
  )
}

export default FooterLegal
