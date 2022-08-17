import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  name?: String;
}

const BreadCrumbs: NextPage<Props> = ({ name }) => {
  const router = useRouter();

  return (
    <>
      <Link href='/'>home</Link>
      //
      <Link href='/products'>{router.pathname.split("/")[1]}</Link>
      //
      {name && <Link href='/products'>{name}</Link>}
    </>
  );
};

export default BreadCrumbs;
