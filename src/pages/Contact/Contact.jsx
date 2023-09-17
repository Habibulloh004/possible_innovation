import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map/Map';

const Contact = () => {
  return (
    <main id="contact" className="dark:bg-slate-600 pt-20 overflow-hidden">
      <div className="container w-10/12 mx-auto text-black dark:text-white">
        <p className="text-5xl font-medium max-lg:text-4xl" data-aos="fade-right">
          Our <span className="font-extrabold">address</span>
        </p>
        <Map />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
