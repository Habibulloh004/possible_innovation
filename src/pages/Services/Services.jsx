import ServiceCard from '../../components/ServiceCard/ServiceCard';

const Services = () => {
  return (
    <main id='services' className="dark:bg-slate-600 pt-10">
      <div className="container w-10/12 mx-auto text-black dark:text-white ">
        <p className="text-5xl font-medium max-lg:text-4xl" data-aos="fade-right">
          <span className="font-extrabold">Services</span> available to us
        </p>
        <p className="text-lg my-2" data-aos="fade-right">
          Praesent semper, lacus sed cursus porta, odio augue feugiat tincidunt ligula massa in
          primis faucibus posuere cubilia
        </p>
        <ServiceCard />
      </div>
    </main>
  );
};

export default Services;
