import { FC } from 'react';
import Link from 'next/link';
// import NextLink from 'components/reuseable/links/NextLink';

const Services27: FC = () => {
  return (
    <section id="services">
      <div className="wrapper bg-gray">
        <div className="container py-15 py-md-17">
          <div className="row gx-lg-0 gy-10 align-items-center">
            <div className="col-lg-6">
              <div className="row g-6 text-center">
                <div className="col-md-6">
                  <Card title="Dinings" image="/img/our-services/dining.jpg" className="mb-6" />
                  <Card title="Recipes" image="/img/our-services/recipe.jpg" />
                </div>

                <div className="col-md-6">
                  <Card title="Restaurants" image="/img/our-services/restaurant.jpg" className="mt-md-6 mb-6" />
                  <Card title="Hotel" image="/img/our-services/hotel.jpg" />
                </div>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <h2 className="display-5 mb-3">Our Services</h2>
              <p className="lead fs-lg">
              Delicious cuisine served with care, ensuring a memorable dining experience for our guests.
              </p>
              <p>
              Savor the flavors of Delhi with our exceptional hotel food services at Dilli Vibes. From mouthwatering traditional dishes to international cuisine, our culinary team ensures a delightful dining experience, served with care and attention to every detail.Experience a culinary journey blending traditional Delhi flavors with international cuisine.
              </p>

              {/* <NextLink title="More Details" href="#" className="btn btn-primary rounded-pill mt-2" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ------------------------------------------------------------------------------------------
type CardProps = { image: string; title: string; className?: string };

const Card: FC<CardProps> = ({ image, title, className = '' }) => (
  <div className={`card shadow-lg ${className}`}>
    <figure className="card-img-top overlay overlay-1">
      <div>
        {/* <a> */}
          <img className="img-fluid" src={image} alt="" />
          <span className="bg" />
        {/* </a> */}
      </div>

      {/* <figcaption>
        <h5 className="from-top mb-0">View Gallery</h5>
      </figcaption> */}
    </figure>

    <div className="card-body p-4">
      <h3 className="h4 mb-0">{title}</h3>
    </div>
  </div>
);

export default Services27;
