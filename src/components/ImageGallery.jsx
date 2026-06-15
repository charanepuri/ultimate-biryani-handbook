import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";
import gallery9 from "../assets/gallery/gallery9.jpg";
import gallery10 from "../assets/gallery/gallery10.jpg";
import gallery11 from "../assets/gallery/gallery11.jpg";
import gallery12 from "../assets/gallery/gallery12.jpg";

const images = [
  gallery1,
  gallery7,
  gallery2,
  gallery8,
  gallery3,
  gallery9,
  gallery4,
  gallery10,
  gallery5,
  gallery11,
  gallery6,
  gallery12
];

const ImageGallery = () => {
  return (
    <section className="gallery-section">
      <h2>Image Gallery 🖼️</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Biryani"
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;