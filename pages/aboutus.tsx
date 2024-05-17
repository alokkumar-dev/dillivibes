import { FC, Fragment } from 'react';
import Image from 'next/image';
import NextLink from 'components/reuseable/links/NextLink';
import PageProgress from 'components/common/PageProgress';
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import SocialLinks from 'components/reuseable/SocialLinks';

const AboutUs: FC = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      {/* bg-soft-primary */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>
      {/* ========== title section ========== */}
      <section className="section-frame overflow-hidden mb-10">
        <div className="wrapper bg-gray">
          <div className="container py-8 py-md-10 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h1 className="display-1 mb-1">About Dilli Vibes</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="wrapper bg-gray">
          <div className="container py-14 py-md-16">
            <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <h2 className="display-5 mb-3">About Us</h2>
                <p className="lead fs-lg">Luxurious Comfort and Authentic Flavors at Dilli Vibes.</p>
                <p>
                  Experience the vibrant heart of Delhi at Dilli Vibes, where culture meets comfort in the bustling
                  capital of India. Nestled in the heart of the city, our hotel and restaurant offer a perfect blend of
                  modern amenities and traditional hospitality, ensuring a memorable stay for every guest.
                </p>
                <p>
                  Dilli Vibes offers a unique blend of luxury and comfort, featuring elegant rooms and a vibrant
                  restaurant. Experience authentic Delhi flavors in a cozy ambiance, perfect for a memorable stay and
                  delightful dining.
                </p>

                {/* <NextLink title="Learn More" href="#" className="btn btn-primary rounded-pill mt-2" /> */}
                <SocialLinks className="nav social " />
              </div>
              <div className="col-md-8 col-lg-6 mx-auto">
                <div className="img-mask mask-2">
                  <Image
                    width={1000}
                    height={850}
                    src="/img/myimgs/aboutus-img.jpeg"
                    alt=""
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer8 />
    </Fragment>
  );
};

export default AboutUs;
