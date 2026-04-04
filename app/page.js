import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center flex-col items-center gap-4 text-white h-[44vh]">
     <div className="font-bold flex gap-2 text-5xl">Buy me a Chai <span><img src="/chai1.gif" width={60} height={60} alt="" /></span></div>
     <p>
      A decentralized application (dApp) built on the Ethereum blockchain that allows users to create and manage their own tea shops."
     </p>
     <div>
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
     <div className="text-white">
      <h1>How it works</h1>
      <div className="flex gap-5">
        <div className="item">
          <img src="/girl.gif" bg-white p-4 rounded-lg flex flex-col items-center gap-2 width={100} height={100} alt="" />
          <p>Fund Yourself</p>
        </div>

      </div>
     </div>
    </>
  );
}
