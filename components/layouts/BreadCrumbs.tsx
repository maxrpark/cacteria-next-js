import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  name?: String;
}

const BreadCrumbs: NextPage<Props> = ({ name }) => {
  const router = useRouter();
  const routeName = router.pathname.split("/")[1];

  return (
    <div className='d-flex justify-content-start align-items-center gap-2'>
      <Link href='/'>
        <p className='text-capitalize'> home</p>
      </Link>
      <Link href={`/${routeName}`}>
        <p className='text-capitalize'> / {routeName}</p>
      </Link>
      {name && <p className='d-inline'> / {name}</p>}
    </div>
  );
};

export default BreadCrumbs;
