import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CardProdus = ({ product }) => {
  return (
    <Card className="bg-body-accent/20 border-2 group overflow-hidden relative border-black/15 h-[520px] flex flex-col">
      <CardHeader className="p-0 bg-body-transparent">
      <Badge className="bg-accent text-white uppercase text-sm font-medium mb-2 absolute top-5 left-5">
          {product.badge}
        </Badge>
        <div className="relative bg-no-repeat w-full h-[300px] flex items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-accent/30 via-accent/10 to-body-accent/20"></div>
          <Image
            className="absolute bottom-0 h-[250px] w-[250px] rounded-t-[15px]"
            src={product.image}
            width={276}
            height={255}
            alt={product.alt}
            priority
          />
        </div>
      </CardHeader>
      <div className="flex flex-col items-center justify-between flex-grow">
        <h3 className="xl:text-[25px] text-center px-8 pt-8 leading-9">{product.name}</h3>
        <div className="mt-auto pb-8">
          <Button size="card">Mai multe detalii</Button>
        </div>
      </div>
    </Card>
  );
};

export default CardProdus;
