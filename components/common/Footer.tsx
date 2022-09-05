const Footer: React.FC = () => {
  return (
    <div className='bg-dark text-bg-light'>
      <footer className='container  py-5'>
        <div className='row d-flex justify-content-center'>
          <div className='col-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Features
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Pricing
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  FAQs
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className='col-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Features
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Pricing
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  FAQs
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className='col-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Features
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  Pricing
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  FAQs
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-muted'>
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='d-flex justify-content-between py-4 my-4 border-top'>
          <p>&copy; 2021 Cacteria, Inc. All rights reserved.</p>
          <ul className='list-unstyled d-flex'>
            <li className='ms-3'>
              <a className='link-dark' href='#'>
                <svg className='bi' width='24' height='24'>
                  <use xlinkHref='#twitter' />
                </svg>
              </a>
            </li>
            <li className='ms-3'>
              <a className='link-dark' href='#'>
                <svg className='bi' width='24' height='24'>
                  <use xlinkHref='#instagram' />
                </svg>
              </a>
            </li>
            <li className='ms-3'>
              <a className='link-dark' href='#'>
                <svg className='bi' width='24' height='24'>
                  <use xlinkHref='#facebook' />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
