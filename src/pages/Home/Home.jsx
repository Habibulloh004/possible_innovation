import './Home.scss';


const Home = () => {
  return (
    <>
      <section id="home" className="sec1 mt-20 h-screen max-xl:h-max">
        <div className="container w-10/12 mx-auto h-full flex justify-between items-center flex-col lg:flex-row lg:py-3">
          <article className="half z-10 text-white w-2/3 max-lg:w-full max-2xl:w-1/2">
            <p className="max-lg:text-4xl lg:text-5xl font-medium max-lg:mt-10" data-aos="fade-right">
              <span className="font-extrabold">Possible</span> is the Most{' '}
              <span className="font-extrabold">Simple Way</span> <br /> to launch your{' '}
              <span className="font-extrabold">startup</span>
            </p>
            <figure className="w-4/5 flex gap-1 mt-10 max-lg:w-full" data-aos="fade-right" data-aos-delay="50">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="title">
                <p className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-light text-sm mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, optio! Maxime
                  animi unde, hic nemo sint vel reprehenderit sed, ullam corporis debitis ad
                  delectus exercitationem explicabo ea numquam repudiandae nostrum.
                </p>
              </div>
            </figure>
            <figure className="w-4/5 flex gap-1 mt-5 max-lg:w-full" data-aos="fade-right" data-aos-delay="100">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="title">
                <p className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-light text-sm mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, optio! Maxime
                  animi unde, hic nemo sint vel reprehenderit sed, ullam corporis debitis ad
                  delectus exercitationem explicabo ea numquam repudiandae nostrum.
                </p>
              </div>
            </figure>
            <figure className="w-4/5 flex gap-1 mt-5 max-lg:w-full" data-aos="fade-right" data-aos-delay="150">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="title">
                <p className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur.</p>
                <p className="font-light text-sm mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, optio! Maxime
                  animi unde, hic nemo sint vel reprehenderit sed, ullam corporis debitis ad
                  delectus exercitationem explicabo ea numquam repudiandae nostrum.
                </p>
              </div>
            </figure>
          </article>
          <article className="half z-10 h-max w-1/3 flex justify-end items-center max-lg:w-full max-lg:pb-5 max-lg:mt-3 max-2xl:w-1/2" data-aos="fade-left">
            <form className="w-9/12 h-3/5 py-5 bg-black bg-opacity-60 max-lg:w-full rounded-md">
              <div className="form_container w-10/12 h-full mx-auto text-center">
                <p className="uppercase text-white text-2xl mt-4">your suggestion!</p>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-3 py-2 mt-4 rounded-sm bg-slate-200"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-3 py-2 mt-4 rounded-sm bg-slate-200"
                />
                <input
                  type="number"
                  placeholder="Phone number"
                  className="w-full px-3 py-2 mt-4 rounded-sm bg-slate-200"
                />
                <textarea placeholder='Your suggestion' className="w-full px-3 py-2 mt-4 rounded-sm bg-slate-200" rows={4}></textarea>
                <button className='btn bg-slate-200 mt-3 py-2 px-5 rounded-sm active:bg-slate-400'>Register</button>
              </div>
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
