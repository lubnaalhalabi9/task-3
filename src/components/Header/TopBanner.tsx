import topBanner from "../../assets/images/TopBanner.png"
import { IoIosArrowRoundForward } from "react-icons/io";
const TopBanner = () => {
  return (
    <>
      <div className="top-banner">
        <img src={topBanner} alt="Top Banner" />
        <div className="text-icon">
          <p className="top-banner-text">
            Admission is Open, Grab your seat now
          </p>
          <span className="icon">
            <IoIosArrowRoundForward />
          </span>
        </div>
      </div>
    </>
  )
}

export default TopBanner
