import { NextPage } from 'next';
import Head from 'next/head';
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
// import WhatsAppButton from 'components/common/WhatsAppButton';

const Home: NextPage = () => {
  // lighbox hook called
  useLightBox();

  return (
    <Fragment>
      <Head>
        <title>Dilli Vibes - Best Hotel and Restaurant</title>
        <meta
          name="description"
          content="Experience the best of Delhi at Dilli Vibes, a premier hotel and restaurant offering luxurious stays and exquisite dining. Book your stay now!"
        />
        <meta
          name="keywords"
          content="Dilli Vibes, dilli vibes hotel, dilli vibes hotel restaurant, dillivibes hotel, hotel in Atrasi Uttar Pradesh, hotel in Atrasi, hotel in uttar pradesh, restaurant in Atrasi, best hotel in Atrasi, luxurious hotel Atrasi,  luxurious hotel Atrasi  Uttar Pradesh"
        />
        <meta property="og:title" content="Dilli Vibes - Best Hotel and Restaurant in Atrasi" />
        <meta
          property="og:description"
          content="Experience the best of Atrasi at Dilli Vibes, a premier hotel and restaurant offering luxurious stays and exquisite dining. Book your stay now!"
        />
        <meta property="og:image" content="/img/hero-banner/hero-1.png" />
        <meta property="og:url" content="https://www.dillivibes.com" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <link rel="canonical" href="https://www.dillivibes.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Hotel',
              name: 'Dilli Vibes',
              description:
                'Experience the best of Atrasi at Dilli Vibes, a premier hotel and restaurant offering luxurious stays and exquisite dining. Book your stay now!',
              url: 'https://www.dillivibes.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'NH-9, Road, Delhi, Atrasi, Uttar Pradesh 244221',
                addressLocality: 'Atrasi',
                addressRegion: 'UP',
                postalCode: '244221',
                addressCountry: 'IN'
              },
              image: 'https://www.dillivibes.com/img/hero-banner/hero-1.png',
              telephone: ["+91-7055101235", "+91-7817851235"],
              amenityFeature: [
                {
                  '@type': 'Best Vehicle Parking',
                  name: 'Parking  Area',
                  value: true
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Free WiFi',
                  value: true
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Swimming Pool',
                  value: true
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Fitness Center',
                  value: true
                }
              ],
              sameAs: [
                'https://www.instagram.com/dillivibes1',
                'https://www.youtube.com/@dillivibes1'
              ]
            })
          }}
        />
      </Head>
      <PageProgress />
      <WhatsAppButton />

      {/* ========== header ========== */}

      <header className="w-100">
        <Navbar navClassName="navbar navbar-expand-lg center-nav transparent navbar-light" />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero24 />

        {/* ========== about me section ========== */}
        <AboutUs />
        <section className="wrapper overflow-hidden">
          <Portfolio15 />
        </section>
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
    </Fragment>
  );
};

export default Home;
