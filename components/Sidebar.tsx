"use client";
"use client";
import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isExchangeMarketOpen, setIsExchangeMarketOpen] = useState(false);

  // Toggle the state when clicking on "Exchange Market"
  const toggleExchangeMarket = () => {
    setIsExchangeMarketOpen((prev) => !prev);
  };

  return (
    <div className="w-64 bg-white text-black h-full p-5">
      <ul>
        {/* Toggle the nav links when "Exchange Market" is clicked */}
        <li>
          <button
            className="block py-2  text-left"
            onClick={toggleExchangeMarket}
          >
            Exchange Market
          </button>
        </li>

        {/* Conditionally render the nav links if "Exchange Market" is open */}
        {isExchangeMarketOpen && (
          <>
            <li>
              <Link
                href="/admin/exchange-market/submitoffer"
                className="block py-2"
              >
                Submit an Offer
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/exchanges-progress"
                className="block py-2"
              >
                Exchanges in Progress
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/exchanges-made"
                className="block py-2"
              >
                Exchanges Made
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/proposals-received"
                className="block py-2"
              >
                Proposals Received
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/proposals-sent"
                className="block py-2"
              >
                Proposals Sent
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/offer-management"
                className="block py-2"
              >
                Offer Management
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/alert-management"
                className="block py-2"
              >
                Alert Management
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/exchange-mediator"
                className="block py-2"
              >
                Exchange Mediator
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/ad-management"
                className="block py-2"
              >
                Ad Management
              </Link>
            </li>
            {/* <li>
              <Link
                href="/admin/exchange-market/exchangesinprogress"
                className="block py-2"
              >
                Exchanges in Progress
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/exchangesmade"
                className="block py-2"
              >
                Exchanges Made
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/proposalsrecieved"
                className="block py-2"
              >
                Proposals Received
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/proposalsent"
                className="block py-2"
              >
                Proposals Sent
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/offermanagement"
                className="block py-2"
              >
                Offer Management
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/alertmanagement"
                className="block py-2"
              >
                Alert Management
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/exchangemediator"
                className="block py-2"
              >
                Exchange Mediator
              </Link>
            </li>
            <li>
              <Link
                href="/admin/exchange-market/admanagement"
                className="block py-2"
              >
                Ad Management
              </Link>
            </li> */}
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

//  import React, { useState } from "react";
// import Link from "next/link";

// const Sidebar = () => {
//   const [isExchangeMarketOpen, setIsExchangeMarketOpen] = useState(false);

//   // Toggle the state when clicking on "Exchange Market"
//   const toggleExchangeMarket = () => {
//     setIsExchangeMarketOpen((prev) => !prev);
//   };

//   return (
//     <div className="w-64 bg-white text-black h-full p-5">
//       <h2 className="text-xl font-bold mb-6">Exchange Market</h2>
//       <ul className={isExchangeMarketOpen ? "open" : ""}>
//         <li>
//           {/* Toggle the nav links when "Exchange Market" is clicked */}
//           <button className="block py-2" onClick={toggleExchangeMarket}>
//             Exchange Market
//           </button>
//         </li>

//         {/* Conditionally render the nav links if "Exchange Market" is open */}
//         {isExchangeMarketOpen && (
//           <>
//             <li>
//               <Link
//                 href="/admin/exchange-market/submitoffer"
//                 className="block py-2"
//               >
//                 Submit an Offer
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/exchange-market/exchangesinprogress"
//                 className="block py-2"
//               >
//                 Exchanges in Progress
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/exchange-market/exchangesmade"
//                 className="block py-2"
//               >
//                 Exchanges Made
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/exchange-market/proposalsrecieved"
//                 className="block py-2"
//               >
//                 Proposals Recieved
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/exchange-market/proposalsent"
//                 className="block py-2"
//               >
//                 Proposals Sent
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/exchange-market/offermanagement"
//                 className="block py-2"
//               >
//                 Offer Management
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/exchange-market/alertmanagement"
//                 className="block py-2"
//               >
//                 Alert Management
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/exchange-market/exchangemediator"
//                 className="block py-2"
//               >
//                 Exchange Mediator
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/admin/exchange-market/admanagement"
//                 className="block py-2"
//               >
//                 Ad Management
//               </Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// components/Sidebar.tsx
// import Link from "next/link";

// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-white text-black h-full p-5">
//       <h2 className="text-xl font-bold mb-6">Exchange Market</h2>
//       <ul>
//         <li>
//           <Link
//             href="/admin/exchange-market/submitoffer"
//             className="block py-2"
//           >
//             Submit an Offer
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/admin/exchange-market/exchanges-progress"
//             className="block py-2"
//           >
//             Exchanges in Progress
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/admin/exchange-market/exchanges-made"
//             className="block py-2"
//           >
//             Exchanges Made
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/admin/exchange-market/proposals-received"
//             className="block py-2"
//           >
//             Proposals Received
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/admin/exchange-market/proposals-sent"
//             className="block py-2"
//           >
//             Proposals Sent
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/admin/exchange-market/offer-management"
//             className="block py-2"
//           >
//             Offer Management
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/admin/exchange-market/alert-management"
//             className="block py-2"
//           >
//             Alert Management
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/admin/exchange-market/exchange-mediator"
//             className="block py-2"
//           >
//             Exchange Mediator
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/admin/exchange-market/ad-management"
//             className="block py-2"
//           >
//             Ad Management
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
