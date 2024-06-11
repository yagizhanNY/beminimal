import Image from "next/image";
import Link from "next/link";

interface PageProps {
  item: any;
}

export default function ProductCard({ item }: PageProps) {
  return (
    <Link
      href={item.fields.productUrl}
      target="_blank"
      className="group flex flex-col justify-between p-10 m-10 rounded-xl border border-gray-300 shadow-md transition-colors duration-300 bg-gray-100 hover:border-gray-800 hover:bg-white"
    >
      <Image
        src={item.fields.productImage.fields.file.url.replace("//", "https://")}
        width={500}
        height={500}
        alt="product_image"
        className="transition duration-300 ease-in-out group-hover:-translate-y-1.5"
        loading="eager"
      ></Image>
      <div>
        <div className="mt-4">
          <p className="font-light text-gray-400">
            {item.fields.brand} &middot; {item.fields.category}
          </p>
        </div>
        <div className="flex justify-between mt-1 font-light text-gray-500">
          <p>{item.fields.title}</p>
          <p>{item.fields.price}</p>
        </div>
      </div>
    </Link>
  );
}
