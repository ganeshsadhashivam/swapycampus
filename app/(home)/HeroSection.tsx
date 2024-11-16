export default function HeroSection() {
  return (
    <section className="bg-slate-500 text-white p-10 text-center m-8 rounded-3xl">
      <div className="w-15 flex flex-col align-middle">
        <p className="flex flex-col  text-center text-2xl font-bold">
          100% free stock exchange Finance
        </p>
        <p className="flex flex-col  text-center text-2xl font-bold">
          your needs with your surplus
        </p>
        <p className="text-green-600 flex flex-col  text-center text-2xl font-bold">
          Value it, it’s worth gold!
        </p>
      </div>
      <div className="overflow-hidden relative">
        <div className="whitespace-nowrap animate-scrollRightToLeft flex flex-col  m-4">
          <p className="block  text-white">Your surplus is a treasure</p>
          <p className="inline-block   text-white">
            Exchange or sell with confidence
          </p>
          <p className="inline-block text-white">
            Save money while preserving the planet!
          </p>
        </div>
      </div>
      {/* <div className="whitespace-nowrap animate-scrollRightToLeft flex space-x-10">
        <p className="">Your surplus is a treasure</p>
        <p className="">Exchange or sell with confidence</p>
        <p className="">Save money while preserving the planet!</p>
      </div> */}
    </section>
  );
}
