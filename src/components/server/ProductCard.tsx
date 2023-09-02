import Image from "next/image";

interface PageProps {
  item: any;
}

export default function ProductCard({ item }: PageProps) {
  return (
    <div className="group p-10 m-10 rounded-xl border border-gray-300 shadow-md transition-colors duration-300 bg-gray-100 hover:border-gray-800 hover:bg-white">
      <Image
        src={item.fields.productImage.fields.file.url.replace("//", "https://")}
        width={500}
        height={500}
        alt="product_image"
        className="transition duration-300 ease-in-out group-hover:-translate-y-1.5"
      ></Image>
      <div>
        <p className="font-light text-gray-400">
          {item.fields.brand} &middot; {item.fields.category}
        </p>
      </div>
      <div className="flex justify-between mt-1 font-light text-gray-500">
        <p>{item.fields.title}</p>
        <p>{item.fields.price}</p>
      </div>
    </div>
  );
}
