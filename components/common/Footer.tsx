import Link from "next/link";
import { useRouter } from "next/router";
import { footerLinks, companySocialMedia } from "../../public/static/links";

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <div className='bg-dark text-bg-light'>
      <footer className='container  py-5'>
        <div className='row d-flex justify-content-around'>
          {footerLinks.map((section) => {
            return (
              <div key={section.id} className='col-3'>
                <h5 className='text-light text-center'>{section.title}</h5>
                <ul className='nav flex-column'>
                  {section.links.map((link) => {
                    return (
                      <li key={link.id} className='nav-item mb-2 text-center'>
                        <Link href={link.href} className=''>
                          <p
                            className={`${
                              router.pathname == link.href
                                ? "text-success px-2"
                                : "text-light"
                            } nav-link text-capitalize p-0  m-0 cursor`}
                          >
                            {link.name}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className='d-flex justify-content-between py-4 my-4 border-top'>
          <p className='text-light'>
            &copy;{new Date().getFullYear()} Cacteria, Inc. All rights reserved.
          </p>
          <ul className='list-unstyled d-flex'>
            {companySocialMedia.map((social) => {
              return (
                <li key={social.id} className='ms-3 '>
                  <a className='link-light' href={social.href}>
                    {<social.icon />}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
