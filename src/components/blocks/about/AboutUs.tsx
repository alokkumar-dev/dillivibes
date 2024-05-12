import { FC } from 'react';
import Image from 'next/image';
import NextLink from 'components/reuseable/links/NextLink';

const AboutUs: FC = () => {
  return (
    <section id="about">
      <div className="wrapper bg-gray">
        <div className="container py-14 py-md-16">
          <div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
            <div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
              <div className="img-mask mask-2">
                <Image
                  width={1000}
                  height={850}
                  src="/img/photos/about30.jpeg"
                  alt=""
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="display-5 mb-3">About Me</h2>
              <p className="lead fs-lg">
                I'm Caitlyn Sandbox, a photographer specializing in food, drink and product photography.
              </p>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce
                dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                risus. Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula.
              </p>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum
                nulla sed consectetur. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur.
              </p>

              <NextLink title="Learn More" href="#" className="btn btn-primary rounded-pill mt-2" />
            </div>
          </div>

    
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
