// Used in: Academics page
// Features:
//   - Filter buttons
//   - Each category: slider of 4 images floating above the card border
//   - Images: desktop=4, tablet=3, mobile=1
//   - Arrows: bottom-right with category title as bottomRightText

import { useState } from "react"
import Title from "../OurBenefits/Title"
import Slider from "../Slider/Slider"
import "./Gallery.css"

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryCategory {
  label: string;       // used for filter button
  title: string;       // shown next to arrows
  description: string;
  images: GalleryImage[];
}

interface GalleryProps {
  categories: GalleryCategory[];
}

const Gallery = ({ categories }: GalleryProps) => {
  // active filter - "All" shows every category
  const [active, setActive] = useState<string>("All")

  const filters = ["All", ...categories.map((c) => c.label)]
  const visible = active === "All" ? categories : categories.filter((c) => c.label === active)

  return (
    <div className="gallery-section">

      {/* Section title */}
      <Title
        squareText="Our Facilities"
        title="Our Gallery"
        paragraph="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />

      {/* Filter buttons */}
      <div className="gallery-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`gallery-filter-btn ${active === f ? "active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Category cards - images float above card via position:absolute */}
      <div className="gallery-categories">
        {visible.map((cat) => (
          <div key={cat.label} className="gallery-category">
            <Slider
              data={cat.images}
              renderItem={(img) => (
                <div className="gallery-img-wrapper">
                  <img src={img.src} alt={img.alt} />
                </div>
              )}
              slidesDesktop={4}
              slidesTablet={3}
              slidesMobile={1}
              arrowsPosition="bottom-right"
              bottomRightText={<h3 className="gallery-category-title">{cat.title}</h3>}
            />
            {/* Description below the slider arrows */}
            <div className="gallery-category-info">
              <p className="gallery-category-desc">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Gallery
