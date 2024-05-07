import { FC, Fragment } from 'react';
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';

const Portfolio15: FC = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h2 className="display-2 mb-4">Creative. Smart. Awesome.</h2>
            <p className="lead fs-lg mb-11">
              Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus
              eget urna.
            </p>
          </div>
        </div>
      </div>

      <div className="swiper-container swiper-auto swiper-auto-xs mb-8">
        <Carousel
          loop
          updateOnWindowResize
          speed={7000}
          spaceBetween={40}
          navigation={false}
          pagination={false}
          slidesPerView="auto"
          autoplay={{ delay: 1 }}
          wrapperClass="swiper-wrapper ticker"
          className="overflow-visible pe-none"
        >
          {[1, 6, 7, 6, 1, 6].map((num) => (
            <figure className="rounded-xl shadow-xl" key={num}>
              <img src={`/img/photos/pf${num}.jpg`} srcSet={`/img/photos/pf${num}.jpg`} alt="" />
            </figure>
          ))}
        </Carousel>
      </div>

      <div className="swiper-container swiper-auto swiper-auto-xs">
        <Carousel
          loop
          updateOnWindowResize
          speed={7000}
          spaceBetween={40}
          navigation={false}
          pagination={false}
          slidesPerView="auto"
          autoplay={{ delay: 1 }}
          wrapperClass="swiper-wrapper ticker"
          className="overflow-visible pe-none"
          dir="rtl"
        >
          {[6, 1, 6, 7, 6, 1].map((num) => (
            <figure className="rounded-xl shadow-xl" key={num}>
              <img src={`/img/photos/pf${num}.jpg`} srcSet={`/img/photos/pf${num}.jpg 2x`} alt="" />
            </figure>
          ))}
        </Carousel>
      </div>

      <div className="text-center mt-8 mb-15">
        <NextLink href="#" title="See Our Projects" className="btn btn-lg btn-primary rounded-xl" />
      </div>
    </Fragment>
  );
};

export default Portfolio15;
