import type { NextPage } from "next";
import { Contact, PageTitle } from "../components";

const ContactPage: NextPage = () => {
  return (
    <main className='container page-height'>
      <PageTitle title={"Contact"} />
      <h2 className='text-center my-4'>Want to tell us something?</h2>
      <p style={{ maxWidth: "700px" }} className='m-auto text-center lh-base'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores
        ducimus quisquam commodi quod natus, pariatur eos recusandae id sequi.
      </p>
      <Contact />
    </main>
  );
};

export default ContactPage;
