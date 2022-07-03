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
    <div className="my-24 text-center mobileL:my-36">
      <h4 className="mb-20 font-[Fraunces] text-lg tracking-[0.3rem] text-grayish-blue-100 mobileL:tracking-[0.6rem]">
        CLIENT TESTONOMIALS
      </h4>
      <main className="mx-auto flex max-w-[24rem] flex-col items-center space-y-20 tablet:w-[75%] tablet:max-w-none tablet:flex-row tablet:space-y-0">
        {clients.map((client) => (
          <div
            key={client.id}
            className="mx-auto flex max-w-[20rem] flex-col items-center text-center tablet:max-w-[22rem]"
          >
            <img
              className="w-1/3 rounded-full object-contain"
              src={client.image}
              alt={`${client.name} pic`}
            />
            <p className="image-info-p my-10 text-lg text-grayish-blue-300">
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
