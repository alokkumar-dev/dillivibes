import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';

const AboutUs: FC = () => {
  return (
    <section id="about">
      <div className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 mb-3">About Us</h2>
              <p className="lead fs-lg">Luxurious Comfort and Authentic Flavors at Dilli Vibes.</p>
              <p>
                Experience the vibrant heart of Delhi at Dilli Vibes, where culture meets comfort in the bustling
                capital of India. Nestled in the heart of the city, our hotel and restaurant offer a perfect blend of
                modern amenities and traditional hospitality, ensuring a memorable stay for every guest.
              </p>
              {/* <p>
                Dilli Vibes offers a unique blend of luxury and comfort, featuring elegant rooms and a vibrant
                restaurant. Experience authentic Delhi flavors in a cozy ambiance, perfect for a memorable stay and
                delightful dining.
              </p> */}

              {/* <NextLink title="Learn More" href="#" className="btn btn-primary rounded-pill mt-2" /> */}
              <SocialLinks className="nav social" />
            </div>

            <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
              <div className="img-mask mask-5">
                <Image
                  width={1000}
                  height={850}
                  src="/img/myimgs/aboutus-img.jpeg"
                  alt=""
                  style={{ width: '100%', height: 'auto',  borderRadius:"15%"}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
