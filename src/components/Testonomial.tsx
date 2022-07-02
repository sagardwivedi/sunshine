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
    <div className="py-16 px-14 text-center mobileL:py-32">
      <h4 className="mb-16 font-[Fraunces] text-lg tracking-widest text-grayish-blue-100 mobileL:tracking-[0.6rem]">
        CLIENT TESTONOMIAL
      </h4>
      <main className="mx-auto flex w-[95%] flex-col items-center justify-center tablet:flex-row">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex flex-auto flex-col items-center text-center"
          >
            <img
              className="w-1/4 rounded-full object-contain"
              src={client.image}
              alt={`${client.name} pic`}
            />
            <p className="image-info-p my-10 min-w-min max-w-xs text-grayish-blue-200">
              {client.text}
            </p>
            <h4 className="mb-1 font-[Fraunces] text-lg font-black">
              {client.name}
            </h4>
            <h6 className="text-grayish-blue-100">{client.position}</h6>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Testonomial;
