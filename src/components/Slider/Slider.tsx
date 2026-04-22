// Used in: Slider component (generic, reusable)
// arrowsPosition:
//   "sides"        => arrows left/right of track (desktop), bottom-center (mobile)
//   "bottom-right" => arrows bottom-right, optional text on the left
//   "bottom-center"=> arrows always centered below

import { useState, useEffect, type ReactNode } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "./slider.css";

interface SliderProps<T> {
  data: T[];
  renderItem: (item: T) => ReactNode;
  slidesDesktop?: number;
  slidesTablet?: number;
  slidesMobile?: number;
  arrowsPosition?: "sides" | "bottom-center" | "bottom-right";
  bottomRightText?: ReactNode;
}

function Slider<T>({
  data,
  renderItem,
  slidesDesktop = 3,
  slidesTablet = 2,
  slidesMobile = 1,
  arrowsPosition = "sides",
  bottomRightText = "",
}: SliderProps<T>) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(slidesDesktop);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setPerView(w > 1024 ? slidesDesktop : w > 768 ? slidesTablet : slidesMobile);
      setIndex(0);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [slidesDesktop, slidesTablet, slidesMobile]);

  const max = Math.max(0, data.length - perView);
  const next = () => setIndex((i) => Math.min(i + 1, max));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  const visible = data.slice(index, index + perView);

  const showSides = arrowsPosition === "sides" && !isMobile;
  const bottomAlign =
    arrowsPosition === "bottom-right" ? "right" :
    arrowsPosition === "bottom-center" ? "center" :
    isMobile ? "center" : null;

  const ArrowPrev = (
    <button className="arrow" onClick={prev} disabled={index === 0} aria-label="Previous">
      <IoIosArrowRoundBack />
    </button>
  );

  const ArrowNext = (
    <button className="arrow" onClick={next} disabled={index >= max} aria-label="Next">
      <IoIosArrowRoundForward />
    </button>
  );

  const track = (
    <div className="slider-track">
      {visible.map((item, i) => (
        <div key={index + i} className="slider-item">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );

  return (
    <div className="slider-container">
      {showSides ? (
        <div className="slider-sides">
          {ArrowPrev}
          {track}
          {ArrowNext}
        </div>
      ) : (
        <>
          {track}
          {bottomAlign === "right" && bottomRightText ? (
            
            <div className={`slider-arrows slider-arrows--${bottomAlign} with-text`}>
              <span className="slider-text">{bottomRightText}</span>
              <div className="arrows-wrapper">
                {ArrowPrev}
                {ArrowNext}
              </div>
            </div>
          ) : bottomAlign && (
          
            <div className={`slider-arrows slider-arrows--${bottomAlign}`}>
              {ArrowPrev}
              {ArrowNext}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Slider;
