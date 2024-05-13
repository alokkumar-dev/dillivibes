import Image from 'next/image';
import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom hook -------- //
import useLightBox from 'hooks/useLightBox';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsContent from 'components/common/ProjectDetailsContent';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';
// -------- data -------- //
const images = ['/img/photos/pp2.jpg', '/img/photos/pp3.jpg', '/img/photos/pp4.jpg', '/img/photos/pp5.jpg', '/img/photos/pp2.jpg', '/img/photos/pp3.jpg',];

const ProjectDetails: NextPage = () => {
  // used for image lightbox
  useLightBox();

  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
      <section className="section-frame overflow-hidden">
        <div className="wrapper bg-gray">
          <div className="container py-13 py-md-17 text-center">
            <div className="row">
              <div className="col-lg-10 col-xxl-8 mx-auto">
                <h1 className="display-1 mb-1">Explore Dilli Vibes Gallery.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
        <section className="wrapper bg-light wrapper-border">
          <div className="container pb-14 pb-md-16">
            <div className="row">
              <div className="col-12">
                <article className="mt-n21">
                  {/* <FigureImage width={2400} height={1640} src="/img/photos/pp1.jpg" className="rounded mb-8 mb-md-12" /> */}

                  {/* <ProjectDetailsContent title="About the Project" /> */}

                  <div className="row mt-22 gx-md-6 gy-6">
                    {images.map((item) => (
                      <div className="item col-md-6" key={item}>
                        <figure className="hover-scale rounded cursor-dark">
                          <a href={item} data-glightbox data-gallery="project-1">
                            <Image
                              width={960}
                              height={640}
                              src={item}
                              alt="demo"
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </a>
                        </figure>
                      </div>
                    ))}
                  </div>
                </article>
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

export default ProjectDetails;
