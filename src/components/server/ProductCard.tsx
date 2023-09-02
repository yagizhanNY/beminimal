import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="p-10 m-10 rounded-md bg-gray-200">
      <Image
        src="https://leffamsterdam.com/app/uploads/2022/02/Tube-alarm-clock-steel-1-500x500.jpg"
        width={500}
        height={500}
        alt="product_image"
      ></Image>
      <div>
        <p>sasasasa . asasasa</p>
      </div>
      <div>
        <p>sasasa</p>
        <p>€99</p>
      </div>
    </div>
  );
}
