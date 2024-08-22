import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CardProdus = ({ product, basePath }) => {
  const router = useRouter();
  const linkHandler = () => {
    router.push(`${basePath}/${product.slug}`);
  };
  return (
    <Card
      onClick={() => linkHandler()}
      className="group relative flex h-[520px] flex-col overflow-hidden border-2 border-black/15 bg-body-accent/20 hover:cursor-pointer md:max-xl:w-[350px]"
    >
      <CardHeader className="group bg-body-transparent p-0">
        <Badge className="absolute left-5 top-5 mb-2 bg-accent text-sm font-medium uppercase text-white">
          {product.badge}
        </Badge>
        <div className="group relative z-20 flex h-[300px] w-full items-center justify-center bg-no-repeat">
          <div className="absolute inset-0 z-30" />
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-accent/30 via-accent/10 to-body-accent/20" />
          <Image
            className="absolute bottom-0 h-[250px] w-[250px] rounded-t-[15px] xl:transition-all xl:duration-500 xl:ease-in-out xl:group-hover:scale-[1.1]"
            src={product.image}
            width={276}
            height={255}
            alt={product.alt}
            priority
            unoptimized
          />
          {/* Color */}
          <div className="group absolute right-5 top-3 flex flex-col justify-center space-y-3 ">
            {/* Map through colors and create a circle for each */}
            {product.color
              .filter((color) => color.name !== "Alb")
              .map((color, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-y-1 transition-all duration-500 ease-in-out max-xl:justify-end"
                >
                  <div
                    className="rounded-full border border-black-text/40 shadow-button h-7 w-7"
                    style={{ backgroundColor: color.color }}
                  />
                </div>
              ))}
          </div>
        </div>
      </CardHeader>
      <div className="flex flex-grow flex-col items-center justify-between">
        <h3 className="max-w-[95%] text-balance px-8 pt-8 text-center leading-9 xl:text-[24px] xl:transition-all xl:duration-500 xl:ease-in-out xl:group-hover:scale-[1.1]">
          {product.name}
        </h3>
        <div className="mt-auto pb-7 xl:transition-all xl:duration-500 xl:ease-in-out xl:group-hover:scale-[1.1]">
          {/* added ENCODE delete if dosent work */}
          <Link href={`${basePath}/${product.slug}`}>
            <Button size="card">Mai multe detalii</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CardProdus;
