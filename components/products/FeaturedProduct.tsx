import { Product } from "../../ts/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

const FeaturedProduct: React.FC<Props> = ({ product }) => {
  const { name, photo, id } = product;

  return (
    <Link
      href={`/products/${id}`}
      style={{ display: "inline-block" }}
      className='col-12 col-md-6 col-lg-4 w-100'
    >
      <div className='card w-100 h-100 cursor'>
        {/* <div> */}
        <Image
          priority
          src={photo}
          alt='Picture of the author'
          width={500}
          height={400}
          layout='responsive'
        />
        {/* </div> */}
        <h2 className='text-center'>{name}</h2>
      </div>
    </Link>
  );
};

export default FeaturedProduct;
