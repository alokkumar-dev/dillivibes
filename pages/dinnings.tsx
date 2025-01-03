import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
// -------- custom hook -------- //
// import useIsotope from 'hooks/useIsotope';
import WhatsAppButton from 'components/common/WhatsAppButton';
const projectList = [
 
  {
    id: 2,
    link: '#',
    color: 'leaf',
    type: 'workshop',
    category: 'COFFEE',
    title: 'Mollis Ipsum Mattis',
    image: { width: 1300, height: 1435, url: '/img/dinings/d1.jpg' }
  },
  {
    id: 3,
    link: '#',
    color: 'violet',
    type: 'still-life',
    category: 'STILL LIFE',
    title: 'Ipsum Ultricies Cursus',
    image: { width: 1200, height: 923, url: '/img/dinings/d2.jpg' }
  },
 
  {
    id: 5,
    link: '#',
    color: 'orange',
    type: 'product',
    category: 'PRODUCT',
    title: 'Inceptos Euismod Egestas',
    image: { width: 1300, height: 1365, url: '/img/dinings/d3.jpg' }
  },
  {
    id: 5,
    link: '#',
    color: 'orange',
    type: 'product',
    category: 'PRODUCT',
    title: 'Inceptos Euismod Egestas',
    image: { width: 1300, height: 1365, url: '/img/dinings/d4.jpg' }
  },
  {
    id: 5,
    link: '#',
    color: 'orange',
    type: 'product',
    category: 'PRODUCT',
    title: 'Inceptos Euismod Egestas',
    image: { width: 1300, height: 1365, url: '/img/dinings/d5.jpg' }
  },
  {
    id: 5,
    link: '#',
    color: 'orange',
    type: 'product',
    category: 'PRODUCT',
    title: 'Inceptos Euismod Egestas',
    image: { width: 1300, height: 1365, url: '/img/dinings/d6.jpg' }
  },
];

const filterItems = [
  { id: 1, title: 'All', value: '*' },
  { id: 2, title: 'Concept', value: '.concept' },
  { id: 3, title: 'Product', value: '.product' },
  { id: 4, title: 'Workshop', value: '.workshop' },
  { id: 5, title: 'Still Life', value: '.still-life' }
];

const ProjectsFour: NextPage = () => {
  // const { handleFilterKeyChange, filterKey } = useIsotope();

  return (
    <Fragment>
      <PageProgress />
      <WhatsAppButton />
      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-10 pt-md-14">
            <div className="row">
              <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                <h1 className="display-1 mb-3">Projects</h1>
                <p className="lead fs-lg pe-lg-15 pe-xxl-12">
                Indulge in the diverse cuisine and lively atmosphere of Dilli Vibes for your dining experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="grid grid-view projects-masonry">
              {/* ========== filter section ========== */}
              {/* <div className="isotope-filter filter mb-10">
                <p>Filter:</p>
                <ul>
                  {filterItems.map(({ id, title, value }) => (
                    <li key={id}>
                      <a
                        onClick={handleFilterKeyChange(value)}

                        className={`filter-item ${value === filterKey ? 'active' : ''}`}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* ========== projects section ========== */}
              <div className="row gx-md-8 gy-10 gy-md-13">
                {projectList.map(({ id, image, title, category, color, link, type }) => (
                  <div key={id} className={`project item col-md-6 col-xl-4 ${type}`}>
                    <Link href={link} passHref legacyBehavior>
                      <a>
                        <figure className="lift rounded">
                          <Image
                            alt={title}
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </figure>
                      </a>
                    </Link>

                    {/* <div className="project-details d-flex justify-content-center flex-column">
                      <div className="post-header">
                        <div className={`post-category text-line mb-3 text-${color}`}>{category}</div>
                        <h2 className="post-title h3">{title}</h2>
                      </div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectsFour;
