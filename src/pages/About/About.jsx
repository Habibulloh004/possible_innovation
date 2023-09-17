import Accordions from '../../components/Accordions/Accordions';
import './About.scss';
import image1 from '../../assets/startUp.png';
import Features from '../../components/Features/Features';

const About = () => {
  return (
    <>
      <section id="about" className="dark:bg-slate-600">
        <div className="container w-10/12 mx-auto text-black dark:text-white">
          <p className="text-5xl font-medium pt-16 max-lg:text-4xl" data-aos="fade-right">
            Some <span className="font-extrabold">words about</span> us
          </p>
          <p className="text-lg my-2" data-aos="fade-right">
            Praesent semper, lacus sed cursus porta, odio augue feugiat tincidunt ligula massa in
            primis faucibus posuere cubilia
          </p>
          <main className="flex flex-col lg:flex-row  ">
            <article className="w-full lg:w-1/2 mt-7 ">
              <p className="font-bold text-lg" data-aos="fade-right">
                What we do?
              </p>
              <p className="mt-2" data-aos="fade-right">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis fugiat sint
                dignissimos quidem, ipsam ipsa cupiditate molestiae dolores harum dicta adipisci.
                Perspiciatis inventore debitis placeat suscipit recusandae tempora beatae animi
                eius, maxime laborum nemo perferendis. Temporibus saepe architecto ut aperiam!
              </p>
              <p className="font-bold text-lg mt-10" data-aos="fade-right">
                Why choose us?
              </p>
              <Accordions />
            </article>
            <article className="w-full lg:w-1/2" data-aos="fade-left">
              <img className="w-full" src={image1} alt="" />
            </article>
          </main>
        </div>
        <div className="container mt-20 mx-auto w-10/12 dark:text-white">
          <p className="text-4xl lg:text-5xl font-medium " data-aos="fade-right">
            Our awesome <span className="font-extrabold">features</span>
          </p>
          <p className="mt-2 text-lg" data-aos="fade-right">
            Praesent semper, lacus sed cursus porta, odio augue feugiat tincidunt ligula massa in
            primis faucibus posuere cubilia
          </p>
          <Features />
        </div>
      </section>
    </>
  );
};

export default About;
