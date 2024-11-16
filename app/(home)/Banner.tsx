import { HiOutlineLightBulb } from "react-icons/hi2";
import { MdBookmarks } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export default function Banner() {
  return (
    <div className="flex flex-row justify-around  text-white ">
      <div className="bg-green-500 p-5 w-96 rounded-lg flex flex-row justify-evenly">
        <div className="bg-white flex flex-row h-12 p-1 rounded">
          <TiTick color="black" size={40} />
        </div>
        <div>
          <h3 className="">Make The Most of Your Surplus</h3>
          <p>An economic gain</p>
        </div>
      </div>
      <div className="bg-green-500 p-5 w-96 rounded-lg flex flex-row justify-evenly">
        <div className="bg-white flex flex-row h-12 p-1 rounded">
          <MdBookmarks color="black" size={40} />
        </div>
        <div>
          <h3 className="">Exchange - Sell</h3>
          <p>With Confidence</p>
        </div>
      </div>
      <div className="bg-green-500 p-5 w-96 rounded-lg flex flex-row justify-evenly">
        <div className="bg-white flex flex-row h-12 p-1 rounded">
          <HiOutlineLightBulb color="green" size={40} />
        </div>
        <div>
          <h3>Save Smart</h3>
          <p>Protect the planet</p>
        </div>
      </div>
    </div>
  );
}
