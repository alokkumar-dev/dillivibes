import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
const images = [
  'https://www.tajhotels.com/content/dam/tajhotels/banners/living-legacy-banner-desktop.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
  'https://www.tajhotels.com/content/dam/tajhotels/banners/living-legacy-banner-desktop.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
  'https://www.tajhotels.com/content/dam/tajhotels/banners/living-legacy-banner-desktop.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
  'https://www.tajhotels.com/content/dam/tajhotels/banners/living-legacy-banner-desktop.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
  'https://www.tajhotels.com/content/dam/tajhotels/banners/living-legacy-banner-desktop.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg'

  // '/img/photos/cf1.jpg',
  // '/img/photos/cf2.jpg',
  // '/img/photos/cf3.jpg',
  // '/img/photos/cf4.jpg',
  // '/img/photos/cf5.jpg',
  // '/img/photos/cf6.jpg'
];

// https://www.tajhotels.com/content/dam/tajhotels/banners/living-legacy-banner-desktop.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg

const Hero24: FC = () => {
  return (
    <section id="home">
      <div className="wrapper bg-gray overflow-hidden">
        <div className="container-fluid px-xl-0 pt-6 pb-10">
          <div className="swiper-container swiper-auto">
            <Carousel className="overflow-visible" grabCursor slidesPerView="auto" centeredSlides loop>
              {images.map((item) => (
                <figure className="rounded" key={item}>
                  <img src={item} alt="" />
                  <a className="item-link" href={item} data-glightbox data-gallery="gallery-group">
                    <i className="uil uil-focus-add" />
                  </a>
                </figure>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero24;
