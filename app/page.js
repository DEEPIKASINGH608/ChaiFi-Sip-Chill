import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-6 text-white h-[44vh] px-4">
        <div className="font-bold flex items-center justify-center gap-4 text-4xl md:text-5xl lg:text-6xl text-center">Buy me a Chai <span><img src="/chaip.gif" width={60} height={60} alt="Chai animation" unoptimized/></span></div>
        <p className="text-center max-w-2xl text-lg opacity-80">
          A decentralized application (dApp) built on the Ethereum blockchain that allows users to create and manage their own tea shops."
        </p>
        <div className="flex gap-4">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Start Now
          </button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Read More
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto py-32">
        <h1 className="text-2xl font-bold text-center my-2">How it works</h1>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img src="/girly.gif" bg-white p-4 rounded-lg flex flex-col items-center gap-2 width={100} height={100} alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className="w-40 text-center">Raise funds for your tea shop venture.</p>
          </div>

          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img src="/coin.gif" bg-white p-4 rounded-lg flex flex-col items-center gap-2 width={100} height={100} alt="" />
            <p className="font-bold">Create a Tea Shop</p>
            <p className="w-40 text-center">Create your own decentralized tea shop on the Ethereum blockchain.</p>
          </div>

          <div className="item space-y-2 flex flex-col items-center justify-center">
            <img className="bg-white p-1 rounded-lg flex flex-col items-center gap-2 width={20} height={20}" src="/people1.gif"  alt="" />
            <p className="font-bold">Join the Community</p>
            <p className="w-40 text-center">Connect with other tea enthusiasts and share your passion for tea.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-32 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center mb-14">Learn More about Us</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cm_sAq0mMwA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </>
  );
}





