import Link from "next/link";
import Image from "next/image";

const HeroHome: React.FC = () => {
  return (
    <div className='mb-5 mt-3 shadow-lg'>
      <div className='row  p-3 p-lg-5 container m-auto'>
        <div className='col-lg-7 d-flex justify-content-end gap-3 flex-column'>
          <h2 className='display-4 fw-bold lh-1 '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className='lead'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            nesciunt optio magni perferendis quam maiores ipsum similique
            consequatur iure blanditiis.
          </p>
          <div className='btn-container gap-2 d-flex justify-content-md-start flex-column flex-lg-row mt-4 '>
            <Link href={"/products"}>
              <button className='btn btn-secondary text-capitalize px-4 me-md-2 fw-bold'>
                Products
              </button>
            </Link>
            <Link href={"/about"}>
              <button className='btn btn-outline-secondary text-capitalize px-4 me-md-2 fw-bold'>
                About
              </button>
            </Link>
          </div>
        </div>

        <div className=' d-none d-lg-flex justify-content-center align-content-center col-lg-5'>
          <Image
            src='/static/images/greenhouse.jpg'
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
