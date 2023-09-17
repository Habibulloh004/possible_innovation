import { bot, crm, smm, design, mobile, site } from '../../assets/assets';

const serviceCartItems = [
  {
    id: 1,
    img: smm,
    title: 'Social Media Marketing',
    aos: 'fade-right',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat autem alias nulla iste. Ex fugit repellendus quasi, inventore praesentium corporis ea repellat nam enim, aut ipsam in commodi, similique aperiam.',
  },
  {
    id: 2,
    img: design,
    title: 'Design',
    aos: 'fade-down',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat autem alias nulla iste. Ex fugit repellendus quasi, inventore praesentium corporis ea repellat nam enim, aut ipsam in commodi, similique aperiam.',
  },
  {
    id: 3,
    img: site,
    title: 'Web sites & Web applications',
    aos: 'fade-left',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat autem alias nulla iste. Ex fugit repellendus quasi, inventore praesentium corporis ea repellat nam enim, aut ipsam in commodi, similique aperiam.',
  },
  {
    id: 4,
    img: crm,
    title: 'Customer relationship management',
    aos: 'fade-right',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat autem alias nulla iste. Ex fugit repellendus quasi, inventore praesentium corporis ea repellat nam enim, aut ipsam in commodi, similique aperiam.',
  },
  {
    id: 5,
    img: mobile,
    title: 'Mobile app',
    aos: 'fade-up',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat autem alias nulla iste. Ex fugit repellendus quasi, inventore praesentium corporis ea repellat nam enim, aut ipsam in commodi, similique aperiam.',
  },
  {
    id: 6,
    img: bot,
    title: 'Telegram bot',
    aos: 'fade-left',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat autem alias nulla iste. Ex fugit repellendus quasi, inventore praesentium corporis ea repellat nam enim, aut ipsam in commodi, similique aperiam.',
  },
];

const ServiceCard = () => {
  return (
    <main className="w-full mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-10 pb-3">
      {serviceCartItems.map((item) => (
        <article key={item.id} data-aos={item.aos} className='rounded overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all hover:bg-slate-100 dark:bg-slate-400 dark:hover:bg-slate-500'>
          <div className="card_head h-80 sm:h-96 md:h-80 w-full">
            <img className='h-full w-full rounded' src={item.img} alt="" />
          </div>
          <div className="card-body text-center p-5">
            <p className="font-bold text-lg">{item.title}</p>
            <p className="text-sm mt-2">{item.description}</p>
          </div>
        </article>
      ))}
    </main>
  );
};

export default ServiceCard;
