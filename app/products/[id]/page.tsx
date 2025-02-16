import { DataType } from "@/app/types";
import ProductItem from "@/app/components/ProductItem";
//import { useFilter } from "@/app/context/Context";
import { notFound } from "next/navigation";

export type paramsType = {
  params: {
    id: string;
  };
};

async function getProducts({ params }: paramsType) {
  console.log(params);
  const res = await fetch(`http://fakestoreapi.com/products/${params.id}`);

  if (!res.ok) {
    throw new Error("Failed to get products !");
  }
  return res.json();
}

async function getProductsDetails({ params }: paramsType) {
  // States;
  // Fetch product data from the API
  const data: DataType = await getProducts({ params });

  // Comportement;
  // // Check if product id is valid (between 1 and 20)
  if (parseInt(params.id) > 20) {
    notFound();
  }

  // Affichage(render);
  return (
    <div className="relative flex items-start bg-white p-5 lg:p-10 overflow-hidden ">
      {data && <ProductItem key={data.id} data={data} />}
    </div>
  );
}
export default getProductsDetails;
