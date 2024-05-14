import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
const images = [
  // 'https://png.pngtree.com/png-clipart/20220502/original/pngtree-tourist-giving-rating-stars-to-hotel-banner-png-image_7643047.png',
  // 'https://png.pngtree.com/png-clipart/20220502/original/pngtree-tourist-giving-rating-stars-to-hotel-banner-png-image_7643047.png',
  // 'https://png.pngtree.com/png-clipart/20220502/original/pngtree-tourist-giving-rating-stars-to-hotel-banner-png-image_7643047.png',
  // 'https://png.pngtree.com/png-clipart/20220502/original/pngtree-tourist-giving-rating-stars-to-hotel-banner-png-image_7643047.png',
  // 'https://png.pngtree.com/png-clipart/20220502/original/pngtree-tourist-giving-rating-stars-to-hotel-banner-png-image_7643047.png'


  'https://i.ibb.co/12rN5QR/New-Diet-Program-1.png',
  'https://i.ibb.co/3hCrF0P/New-Diet-Program-6.png',
  'https://i.ibb.co/nLY8qy3/New-Diet-Program-7.png'
 
];


const Hero24: FC = () => {
  return (
    <section id="home">
      <div className="wrapper bg-gray overflow-hidden">
        <div className="container-fluid px-xl-0 pt-0 pb-10">
          <div className="swiper-container swiper-auto">
            <Carousel className="overflow-visible" grabCursor slidesPerView="auto" centeredSlides loop>
              {images.map((item) => (
                <figure className="rounded slide-banner-box" key={item}>
                  <img src={item} alt="" className='sliding-img' />
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
