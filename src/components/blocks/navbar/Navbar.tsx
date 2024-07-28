import Link from 'next/link';
import { FC, Fragment, ReactElement, useRef } from 'react';
// -------- custom hook -------- //
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
import { useRouter } from 'next/router';

// ===================================================================
type NavbarProps = {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
};
// ===================================================================

const Navbar: FC<NavbarProps> = (props) => {
  const { navClassName, fancy, navOtherClass, stickyBox, logoAlt } = props;
  const { asPath } = useRouter();

  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  // dynamically added navbar classname
  const fixedClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink href="/" title={<img alt="logo" src={`/img/logo.png`} />} />
      </div>

      <div id="offcanvas-nav" data-bs-scroll="true" className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
        <div className="offcanvas-header d-lg-none">
          <div className="navbar-brand w-100">
            <NextLink href="/" title={<img alt="logo" src={`/img/logo.png`} />} />
          </div>
          <button type="button" aria-label="Close" data-bs-dismiss="offcanvas" className="btn-close btn-close-white" />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href={'/dinnings'} className={`nav-link ${asPath == '/dinnings' ? 'active' : ''}`}>
                Dinings
              </Link>
            </li>
            <li className="nav-item">
              <Link href={'/birthday'} className={`nav-link ${asPath == '/birthday' ? 'active' : ''}`}>
                Birth Day
              </Link>
            </li>

            <li className="nav-item">
              <Link href={'/gallery'} className={`nav-link ${asPath == '/gallery' ? 'active' : ''}`}>
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link href={'/contactus'} className={`nav-link ${asPath == '/contactus' ? 'active' : ''}`}>
                Contact US
              </Link>
            </li>

            <li className="nav-item">
              <Link href={'/aboutus'} className={`nav-link ${asPath == '/aboutus' ? 'active' : ''}`}>
                About Us
              </Link>
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink title="dillivibes23@gmail.com" className="link-inverse" href="mailto:dillivibes23@gmail.com" />
              <br />
              <NextLink href="tel:7055101235" title="+917055101235" />
              {/* <br /> */}
              <NextLink href="tel:7817851235" title="+917817851235" />
              <br />
              <NextLink title="5922246555" href="tel:5922246555" />
              {/* <br /> */}
              <NextLink title="9411835668" href="tel:9411835668" />
              <br />
              <SocialLinks />
              <p className="mb-4">
                © {new Date().getFullYear()} Dilli Vibes <br className="d-none d-lg-block" />
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <div className={navOtherClass}>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* ============= humburger button for small device ============= */}
          <li className="nav-item d-lg-none">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav" className="hamburger offcanvas-nav-btn">
              <span />
            </button>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-center">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
};

// set deafult Props
Navbar.defaultProps = {
  cart: false,
  info: false,
  social: false,
  search: false,
  language: false,
  stickyBox: true,
  navOtherClass: 'navbar-other w-100 d-flex ms-auto',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
