import type { NextPage } from "next";
import { PageTitle, SectionTitle, Testimonials } from "../components";

const About: NextPage = () => {
  return (
    <main className='container page-height'>
      <PageTitle title='about' />
      <section>
        <SectionTitle text={"Our History"} />
        <div className='my-4'>
          <p
            style={{ maxWidth: "900px", lineHeight: "2rem" }}
            className='m-auto my-4 lg-base'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            quasi praesentium, debitis eos, omnis nemo explicabo eum sequi
            quidem magni voluptatibus, excepturi dolorum illo. Earum, modi quia
            magni adipisci saepe porro dolore in, rerum minus tempora laborum
            laboriosam! Unde tempora similique doloribus aspernatur, qui omnis
            non odio culpa neque, maiores deleniti quis temporibus incidunt nemo
            voluptatem. Quidem non repellat cum provident. Ex reiciendis ratione
            ullam doloribus pariatur non. Voluptatibus accusamus illum vitae
            corrupti, ipsa quas, non facere enim unde fugit sapiente rem
            possimus tenetur accusantium excepturi ullam! Incidunt sint tempora
            reiciendis quam voluptate aspernatur ipsam, sunt molestiae
            voluptatum quaerat et.
          </p>
          <p
            style={{ maxWidth: "900px", lineHeight: "2rem" }}
            className='m-auto my-4 lg-base'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            quasi praesentium, debitis eos, omnis nemo explicabo eum sequi
            quidem magni voluptatibus, excepturi dolorum illo. Earum, modi quia
            magni adipisci saepe porro dolore in, rerum minus tempora laborum
            laboriosam! Unde tempora similique doloribus aspernatur, qui omnis.
          </p>
        </div>
      </section>
      <section>
        <SectionTitle text={"What our clients say"} />
        <div className='my-4'>
          <p
            style={{ maxWidth: "900px", lineHeight: "2rem" }}
            className='m-auto my-4 lg-base'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            quasi praesentium, debitis eos, omnis nemo explicabo eum sequi
            quidem magni voluptatibus, excepturi dolorum illo. Earum, modi quia.
          </p>
        </div>
        <Testimonials />
      </section>
      <section>
        <SectionTitle text={"Our Mission"} />
        <div className='my-4'>
          <p
            style={{ maxWidth: "900px", lineHeight: "2rem" }}
            className='m-auto my-4 lg-base'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            quasi praesentium, debitis eos, omnis nemo explicabo eum sequi
            quidem magni voluptatibus, excepturi dolorum illo. Earum, modi quia
            magni adipisci saepe porro dolore in, rerum minus tempora laborum
            laboriosam! Unde tempora similique doloribus aspernatur, qui omnis.
            reiciendis quam voluptate aspernatur ipsam, sunt molestiae
            voluptatum quaerat et.
          </p>
          <p
            style={{ maxWidth: "900px", lineHeight: "2rem" }}
            className='m-auto my-4 lg-base'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            quasi praesentium, debitis eos, omnis nemo explicabo eum sequi
            quidem magni voluptatibus, excepturi dolorum illo. Earum, modi quia
            magni adipisci saepe porro dolore in, rerum minus tempora laborum
            laboriosam! Unde tempora similique doloribus aspernatur, qui omnis.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
