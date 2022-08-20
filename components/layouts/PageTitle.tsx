import type { NextPage } from "next";
import BreadCrumbs from "./BreadCrumbs";

interface Props {
  name?: string;
  title: string;
}

const PageTitle: NextPage<Props> = ({ name, title }) => {
  return (
    <div>
      <h2 className='display-2 fw-bold lh-1 mb-1 mt-4 text-capitalize'>
        {title}
      </h2>
      <BreadCrumbs name={name} />
    </div>
  );
};

export default PageTitle;
