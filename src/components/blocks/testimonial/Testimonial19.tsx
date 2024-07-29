import { FC } from 'react';
import Carousel from 'components/reuseable/Carousel';
import carouselBreakpoints from 'utils/carouselBreakpoints';
// -------- data -------- //
import { testimonialList7 } from 'data/testimonial-list';
import Image from 'next/image';

const Testimonial19: FC = () => {
  return (
    <section id="testimonials">
      <div
        className="wrapper image-wrapper bg-image bg-overlay"
        style={{ backgroundImage: 'url(/img/myimgs/t-bg1.jpeg)' }}
      >
        <div className="container pt-15 pb-13">
          <h2 className="display-5 mb-4 text-center text-white">Happy Customers</h2>

          <div className="swiper-container dots-closer dots-light dots-light-75">
            <Carousel grabCursor spaceBetween={0} navigation={false} breakpoints={carouselBreakpoints}>
              {testimonialList7?.map(({ id, name, avatar, review }) => (
                <div className="item-inner" key={id}>
                  <div className="card border-0 bg-white-900 testimonials-card-body">
                    <div className="card-body">
                      <span className="ratings five mb-3" />
                      <blockquote className="border-0 mb-0">
                        <p>“{review}”</p>
                        <div className="blockquote-details testimonials-details">
                          <div className="info p-0">
                            <h5 className="mb-0">{name}</h5>
                          </div>
                          <Image src={avatar} className='testimonial-avatar' alt="avatar" width={43} height={43} />
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial19;
