import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CardProdus = ({ product }) => {
  return (
    <Card className="bg-body border-2 group overflow-hidden relative border-black/15 h-[480px]">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative bg-work bg-[110%] bg-no-repeat w-full h-[270px] flex items-center justify-center">
          <Image
            className="absolute bottom-0 shadow-2xl h-[200px] w-[280px] rounded-t-[15px]"
            src={product.image}
            width={276}
            height={255}
            alt={product.alt}
            priority
          />
          {/* btns */}
          {/* <div className="flex flex-col gap-y-4 absolute top-4 right-4">
            <Link
              href={product.link}
              className="hover:bg-accent/70 w-[45px] h-[45px] rounded-full flex justify-center items-center xl:scale-0 xl:opacity-0 max-lg:opacity-100 max-lg:scale-100 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-black/90"
            >
              <Link2Icon className="text-white" />
            </Link>
            <Link
              href={product.github}
              className="hover:bg-accent/70 w-[45px] h-[45px] rounded-full flex justify-center items-center xl:scale-0 xl:opacity-0 max-lg:opacity-100 max-lg:scale-100 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 bg-black/90"
            >
              <Github className="text-white" />
            </Link>
          </div> */}
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="bg-accent text-white uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {product.brand}
        </Badge>
        <h4 className="mb-1">{product.name}</h4>
      </div>
    </Card>
  );
};

export default CardProdus;
