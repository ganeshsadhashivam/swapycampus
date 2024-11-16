import Image from "next/image";
import Link from "next/link";

type CardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  };
};

export default function Card({ product }: CardProps) {
  return (
    <div className="border rounded-lg shadow-sm p-4">
      <div className="relative h-40 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <Link href={`/products/${product.id}`}>
        <div>
          <button className="bg-green-700 text-white p-2 rounded-lg">
            see
          </button>
        </div>
      </Link>
    </div>
  );
}
