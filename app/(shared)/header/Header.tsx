import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image
            src="/logo-full.jpg" // Path to your logo image in the public folder
            alt="SwapyCampus Logo"
            width={200} // You can adjust the width and height as per your logo size
            height={100}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    // <header className="bg-slate-900 shadow-md">
    //   <div className="container mx-auto flex items-center justify-between p-4">
    //     <h1 className="text-xl font-bold text-white">SwapyCampus</h1>
    //     <nav>
    //       <ul className="flex space-x-4">
    //         <li>
    //           <Link href="/" className="text-white">
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/products" className="text-white">
    //             Products
    //           </Link>
    //         </li>
    //         <li>
    //           <Link href="/contact" className="text-white">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
}
