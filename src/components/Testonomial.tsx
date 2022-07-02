import { Images } from "../images";

const clients = [
  {
    id: 1,
    image: Images.EmilyImage,
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    position: "Marketing Director",
  },
  {
    id: 2,
    image: Images.ThomasImage,
    text: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    position: "Chief Operating Officer",
  },
  {
    id: 3,
    image: Images.JennieImage,
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    position: "Business Owner",
  },
];

const Testonomial = () => {
  return (
    <div className="py-36 px-14">
      <h4 className="font-[Fraunces] mb-16 text-center text-xl tracking-widest text-grayish-blue-100">
        CLIENT TESTONOMIAL
      </h4>
      <main className="grid grid-cols-1 mobileL:grid-cols-3">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex flex-col items-center max-w-xs justify-center"
          >
            <img
              className="rounded-full w-1/6"
              src={client.image}
              alt={`${client.name} pic`}
            />
            <p className="my-14">{client.text}</p>
            <h4>{client.name}</h4>
            <h6>{client.position}</h6>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Testonomial;
