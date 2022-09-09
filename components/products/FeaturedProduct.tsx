import { Product } from "../../ts/interfaces/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

const FeaturedProduct: React.FC<Props> = ({ product }) => {
  const { name, url, id } = product;

  return (
    <Link href={`/products/${id}`} className='col-12 col-md-6 col-lg-4 '>
      <div className='card w-100 h-100 cursor'>
        <Image
          priority
          src={url}
          alt='Picture of the author'
          width={500}
          height={400}
          layout='responsive'
        />
        <h2 className='text-center'>{name}</h2>
      </div>
    </Link>
  );
};

export default FeaturedProduct;
