import Image from "next/image";

const certificate = [
  {
    icon: "/certificari/1.png",
    name: "ISO 9001",
  },
  {
    icon: "/certificari/2.png",
    name: "ISO 14001",
  },
  {
    icon: "/certificari/3.png",
    name: "ISO 45001",
  },
  {
    icon: "/certificari/4.png",
    name: "ISO 22716",
  },
  {
    icon: "/certificari/5.png",
    name: "Responsible forestry certificate",
  },
];

const Certificari = () => {
  return (
    <section className="flex flex-row items-center justify-center gap-x-40 py-24">
      {certificate.map((certificat, index) => (
        <div key={index}>
          <Image src={certificat.icon} width={120} height={70} alt={certificat.name} />
        </div>
      ))}
    </section>
  );
};

export default Certificari;
