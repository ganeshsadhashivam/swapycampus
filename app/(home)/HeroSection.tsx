export default function HeroSection() {
  return (
    <section className="bg-slate-500 text-white p-6 md:p-10 text-center m-4 md:m-8 rounded-3xl">
      <div className="w-full flex flex-col items-center">
        <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
          100% free stock exchange Finance
        </p>
        <p className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
          Your needs with your surplus
        </p>
        <p className="text-green-600 text-center text-xl sm:text-2xl md:text-3xl font-bold">
          Value it, it’s worth gold!
        </p>
      </div>
      <div className="overflow-hidden relative mt-6">
        <div className="whitespace-nowrap  animate-scrollRightToLeft flex flex-col md:flex-col gap-0">
          <p className="block text-white text-sm sm:text-base md:text-lg">
            Your surplus is a treasure
          </p>
          <p className="inline-block text-white text-sm sm:text-base md:text-lg">
            Exchange or sell with confidence
          </p>
          <p className="inline-block text-white text-sm sm:text-base md:text-lg">
            Save money while preserving the planet!
          </p>
        </div>
      </div>
    </section>
  );
}

// export default function HeroSection() {
//   return (
//     <section className="bg-slate-500 text-white p-10 text-center m-8 rounded-3xl">
//       <div className="w-15 flex flex-col align-middle">
//         <p className="flex flex-col  text-center text-2xl font-bold">
//           100% free stock exchange Finance
//         </p>
//         <p className="flex flex-col  text-center text-2xl font-bold">
//           your needs with your surplus
//         </p>
//         <p className="text-green-600 flex flex-col  text-center text-2xl font-bold">
//           Value it, it’s worth gold!
//         </p>
//       </div>
//       <div className="overflow-hidden relative">
//         <div className="whitespace-nowrap animate-scrollRightToLeft flex flex-col  m-4">
//           <p className="block  text-white">Your surplus is a treasure</p>
//           <p className="inline-block   text-white">
//             Exchange or sell with confidence
//           </p>
//           <p className="inline-block text-white">
//             Save money while preserving the planet!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
