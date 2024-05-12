import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom hooks -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import { Hero24 } from 'components/blocks/hero';
import { AboutUs } from 'components/blocks/about';
import { Navbar } from 'components/blocks/navbar';
import { Banner2 } from 'components/blocks/banner';
import { Footer8 } from 'components/blocks/footer';
import { Contact12 } from 'components/blocks/contact';
import { Services27 } from 'components/blocks/services';
import { Portfolio15, Portfolio5 } from 'components/blocks/portfolio';
import { Testimonial19 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';
import WhatsAppButton from 'components/common/WhatsAppButton';

const Home: NextPage = () => {
  // lighbox hook called
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}

      <header className="w-100">
        <Navbar
          navClassName="navbar navbar-expand-lg center-nav transparent navbar-light"
          button={
            <a href="https://cutt.ly/P4rW6e4" className="btn btn-primary rounded-xl" target="_blank">
              Purchase Now
            </a>
          }
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero24 />

        {/* ========== about me section ========== */}
        <AboutUs />

        <Portfolio15 />

        {/* ========== banner section ========== */}
        <Banner2 />

        {/* ========== portfolio section ========== */}
        <Portfolio5 />

        {/* ========== happy customer section ========== */}
        <Testimonial19 />

        {/* ========== our service section ========== */}
        <Services27 />

        {/* ========== contact section ========== */}
        <Contact12 />
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
      <WhatsAppButton />
    </Fragment>
  );
};

export default Home;
