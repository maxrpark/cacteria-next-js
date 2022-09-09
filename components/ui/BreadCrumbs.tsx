import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  name?: String;
}

const BreadCrumbs: React.FC<Props> = ({ name }) => {
  const router = useRouter();
  const routeName = router.pathname.split("/")[1];

  return (
    <div className='d-flex justify-content-start align-items-center gap-2'>
      <Link href='/'>
        <p className='text-capitalize cursor text-secondary'> home</p>
      </Link>
      <Link href={`/${routeName}`}>
        <p className='text-capitalize cursor'>
          /
          <span
            className={`${
              router.pathname == `/${routeName}`
                ? "text-dark"
                : "text-secondary"
            } text-capitalize cursor`}
          >
            {" "}
            {routeName}
          </span>
        </p>
      </Link>
      {name && (
        <p className='d-inline cursor '>
          / <span className='text-dark'> {name}</span>
        </p>
      )}
    </div>
  );
};

export default BreadCrumbs;
