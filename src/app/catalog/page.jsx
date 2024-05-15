import CatalogPage from "@/components/pages/catalog/CatalogPage";
import { constructMetadata } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Catalog Produse Monte Bianco - Descoperiți Varietatea Noastră",
  description:
    "Explorați catalogul nostru complet de produse de hârtie de înaltă calitate. Monte Bianco oferă o gamă largă de hârtie igienică, prosoape de hârtie, șervețele și multe alte produse.",
  keywords:
    "catalog Monte Bianco, produse de hârtie, hârtie igienică Monte Bianco, prosoape de hârtie Monte Bianco",
});

const Catalog = () => {
  return <CatalogPage />;
};

export default Catalog;
