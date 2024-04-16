import Image from "next/image";

const brands = [
  {
    icon: "/marci/puff.png",
    name: "Logo marca Puff",
  },
  {
    icon: "/marci/fiore.png",
    name: "Logo marca Fiore",
  },
  {
    icon: "/marci/neve.png",
    name: "Logo marca Neve",
  },
  {
    icon: "/marci/montebianco.png",
    name: "Logo marca Monte Bianco Profesional",
  },
  {
    icon: "/marci/horeca.png",
    name: "Logo marca Horeca",
  },
];

const Brands = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-x-40 py-24">
      {brands.map((brand, index) => (
        <div  key={index}>
          <Image src={brand.icon} width={150} height={70} alt={brand.name} />
        </div>
      ))}
    </section>
  );
};

export default Brands;
