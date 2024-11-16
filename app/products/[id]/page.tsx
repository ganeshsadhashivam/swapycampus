"use client";

import { useParams } from "next/navigation"; // Updated import
import products from "@/data/Products"; // Ensure the correct path
import Image from "next/image";

const ProductDetails = () => {
  const { id } = useParams(); // Use the useRouter from next/navigation

  // Ensure id is a number and is defined
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-10">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Main product details container */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8 space-y-6 sm:space-y-0">
        {/* Left side - Image */}
        <div className="w-full sm:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover rounded-lg max-w-full h-auto"
          />
        </div>

        {/* Right side - Product details */}
        <div className="flex flex-col space-y-4 w-full sm:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
          <p className="text-lg md:text-xl text-gray-600">${product.price}</p>
          <p className="text-gray-800">{product.description}</p>

          {/* Buttons below the description */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// "use client";

// import { useParams } from "next/navigation"; // Updated import
// import products from "@/data/Products"; // Ensure the correct path
// import Image from "next/image";

// const ProductDetails = () => {
//   const { id } = useParams(); // Use the useRouter from next/navigation

//   // Ensure id is a number and is defined
//   const product = products.find((p) => p.id === Number(id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     // <div className="max-w-2xl mx-auto p-4">
//     //   <div className="flex flex-col items-center">
//     //     <Image
//     //       src={product.image}
//     //       alt={product.name}
//     //       width={500} // You can define specific width and height
//     //       height={500}
//     //       className="object-cover rounded-lg"
//     //     />

//     //     <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
//     //     <p className="text-xl text-gray-600">${product.price}</p>
//     //     <p className="text-gray-800 mt-4">{product.description}</p>
//     //   </div>
//     // </div>
//     // <div className="max-w-7xl mx-auto p-8">
//     //   {/* Main product details container */}
//     //   <div className="flex items-center space-x-8">
//     //     {/* Left side - Image */}
//     //     <div className="flex-shrink-0">
//     //       <Image
//     //         src={product.image}
//     //         alt={product.name}
//     //         width={500} // Width of the image
//     //         height={500} // Height of the image
//     //         className="object-cover rounded-lg"
//     //       />
//     //     </div>

//     //     {/* Right side - Product details */}
//     //     <div className="flex flex-col space-y-4">
//     //       <h1 className="text-3xl font-bold">{product.name}</h1>
//     //       <p className="text-xl text-gray-600">${product.price}</p>
//     //       <p className="text-gray-800">{product.description}</p>
//     //     </div>
//     //   </div>
//     //   {/* Buttons below the description */}
//     //   <div className="flex space-x-4 mt-6">
//     //     <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
//     //       Add to Cart
//     //     </button>
//     //     <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
//     //       Buy Now
//     //     </button>
//     //   </div>
//     // </div>
//     <div className="max-w-7xl mx-auto p-8">
//       {/* Main product details container */}
//       <div className="flex items-center space-x-8">
//         {/* Left side - Image */}
//         <div className="flex-shrink-0">
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={500} // Width of the image
//             height={500} // Height of the image
//             className="object-cover rounded-lg"
//           />
//         </div>

//         {/* Right side - Product details */}
//         <div className="flex flex-col space-y-4">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-xl text-gray-600">${product.price}</p>
//           <p className="text-gray-800">{product.description}</p>

//           {/* Buttons below the description */}
//           <div className="flex space-x-4 mt-6">
//             <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
//               Add to Cart
//             </button>
//             <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
