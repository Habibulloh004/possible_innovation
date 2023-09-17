import './Accordions.scss';
import { useState } from 'react';

const accordionItems = [
  {
    id: 1,
    head: 'What is term?',
    title:
      'Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
  {
    id: 2,
    head: 'When to use Accordion Components?',
    title:
      'Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
  {
    id: 3,
    head: 'How can it be defined?',
    title:
      'Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
];

const Accordions = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const handleClick = (item) => {
    setClickedCard((prevCard) => (prevCard === item ? null : item));
  };
  return (
    <>
      <div
        className="w-full mt-5 rounded overflow-hidden border dark:bg-slate-400 dark:border-white"
        data-aos="fade-right">
        {accordionItems.map((item) => (
          <div className="hover:bg-indigo-50 dark:hover:bg-slate-800" key={item.id}>
            <div
              className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
              onClick={() => handleClick(item.id)}>
              {clickedCard === item.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="svg w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="svg w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              )}

              <h3>{item.head}</h3>
            </div>
            <div
              className={`accordion-content px-5 pt-0 ${
                clickedCard !== item.id ? 'overflow-hidden max-h-0' : 'pb-4'
              }`}>
              <p className="leading-6 font-light pl-9 text-justify">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordions;
