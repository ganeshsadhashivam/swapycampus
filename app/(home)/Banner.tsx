import { HiOutlineLightBulb } from "react-icons/hi2";
import { MdBookmarks } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row justify-around text-white gap-6 md:gap-8 p-4">
      {/* Banner Item 1 */}
      <div className="bg-green-500 p-5 w-full md:w-96 rounded-lg flex flex-col md:flex-row justify-evenly items-center">
        <div className="bg-white flex justify-center items-center h-12 w-12 rounded-full mb-4 md:mb-0">
          <TiTick color="black" size={40} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">
            Make The Most of Your Surplus
          </h3>
          <p className="text-sm">An economic gain</p>
        </div>
      </div>

      {/* Banner Item 2 */}
      <div className="bg-green-500 p-5 w-full md:w-96 rounded-lg flex flex-col md:flex-row justify-evenly items-center">
        <div className="bg-white flex justify-center items-center h-12 w-12 rounded-full mb-4 md:mb-0">
          <MdBookmarks color="black" size={40} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Exchange - Sell</h3>
          <p className="text-sm">With Confidence</p>
        </div>
      </div>

      {/* Banner Item 3 */}
      <div className="bg-green-500 p-5 w-full md:w-96 rounded-lg flex flex-col md:flex-row justify-evenly items-center">
        <div className="bg-white flex justify-center items-center h-12 w-12 rounded-full mb-4 md:mb-0">
          <HiOutlineLightBulb color="green" size={40} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">Save Smart</h3>
          <p className="text-sm">Protect the planet</p>
        </div>
      </div>
    </div>
  );
}

// import { HiOutlineLightBulb } from "react-icons/hi2";
// import { MdBookmarks } from "react-icons/md";
// import { TiTick } from "react-icons/ti";

// export default function Banner() {
//   return (
//     <div className="flex flex-row justify-around  text-white ">
//       <div className="bg-green-500 p-5 w-96 rounded-lg flex flex-row justify-evenly">
//         <div className="bg-white flex flex-row h-12 p-1 rounded">
//           <TiTick color="black" size={40} />
//         </div>
//         <div>
//           <h3 className="">Make The Most of Your Surplus</h3>
//           <p>An economic gain</p>
//         </div>
//       </div>
//       <div className="bg-green-500 p-5 w-96 rounded-lg flex flex-row justify-evenly">
//         <div className="bg-white flex flex-row h-12 p-1 rounded">
//           <MdBookmarks color="black" size={40} />
//         </div>
//         <div>
//           <h3 className="">Exchange - Sell</h3>
//           <p>With Confidence</p>
//         </div>
//       </div>
//       <div className="bg-green-500 p-5 w-96 rounded-lg flex flex-row justify-evenly">
//         <div className="bg-white flex flex-row h-12 p-1 rounded">
//           <HiOutlineLightBulb color="green" size={40} />
//         </div>
//         <div>
//           <h3>Save Smart</h3>
//           <p>Protect the planet</p>
//         </div>
//       </div>
//     </div>
//   );
// }
