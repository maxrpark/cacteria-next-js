import Link from "next/link";
import { navLinks } from "../../public/static/links";
import { useRouter } from "next/router";

import CartIcon from "../ui/CartIcon";
const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <nav className='navbar  navbar-expand-lg bg-light'>
        <div className='container-fluid container'>
          <Link className='navbar-brand' href='/'>
            <p className='m-0 cursor'>Cacteria</p>
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
          <div
            className='collapse navbar-collapse flex-grow-0'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-lg-flex gap-lg-4'>
              {navLinks.map((link) => {
                return (
                  <li key={link.id} className={`nav-item cursor`}>
                    <Link href={link.href} aria-current='page'>
                      <p
                        data-bs-toggle='collapse'
                        // data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        className={`${
                          router.pathname == link.href
                            ? "text-dark "
                            : "text-secondary"
                        } my-2 text-capitalize`}
                      >
                        {link.name}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <CartIcon />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
