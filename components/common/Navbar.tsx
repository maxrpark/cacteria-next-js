import Link from "next/link";
import { useCartContext } from "../../context/useCartContext";

const Navbar: React.FC = () => {
  const { total_items } = useCartContext();
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' href='#'>
            {total_items}
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link href='/' className='nav-link active' aria-current='page'>
                  <button
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  href='/'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                >
                  Link
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Dropdown
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' href='#'>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='#'>
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <Link className='dropdown-item' href='/'>
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link href={"/"} className='nav-link disabled'>
                  Disabled
                </Link>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-success' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
