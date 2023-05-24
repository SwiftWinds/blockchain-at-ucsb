"use client";

import { CldImage } from "next-cloudinary";

export default function Hero() {
  return (
    <div className="flex flex-col items-center leading-6 lg:flex-row">
      <div className="w-full text-indigo-900">
        <h2 className="m-0 text-5xl font-normal tracking-normal text-left normal-case break-words sm:text-6xl no-underline leading-[1.15]">
          Blockchain UCSB
        </h2>
        <p className="mx-0 mt-4 mb-0 text-xl leading-7 text-left sm:text-2xl sm:leading-8">
          UCSB&apos;s student-led organization that empowers and develops the
          application of the blockchain ecosystem.
        </p>
        <div className="overflow-x-hidden mt-8">
          <div className="flex flex-wrap justify-start items-center -mx-2">
            <a
              href="https://form.typeform.com/to/sikhlBEN"
              aria-label=""
              className="inline-flex justify-center items-center py-3 px-8 mx-2 mb-3 font-normal tracking-normal text-center text-white normal-case bg-indigo-900 rounded-md border-2 border-indigo-900 border-solid duration-200 ease-in cursor-pointer lg:whitespace-nowrap hover:opacity-80 no-underline shadow-[0_0_0_1px_rgba(0,0,0,0.05)] transition"
            >
              <span className="whitespace-nowrap">Join now</span>
            </a>
            <a
              href="https://linktr.ee/ucsbblockchain"
              aria-label=""
              className="inline-flex justify-center items-center py-3 px-8 mx-2 mb-3 font-normal tracking-normal text-center text-black normal-case rounded-none border-2 border-black border-solid duration-200 ease-in cursor-pointer lg:whitespace-nowrap hover:opacity-80 no-underline shadow-none transition"
            >
              <span className="whitespace-nowrap">Learn more</span>
            </a>
          </div>
        </div>
      </div>
      <div className="my-0 w-full lg:my-0 lg:mr-0 lg:ml-8">
        <CldImage
          width="702"
          height="490"
          src="logos/hero"
          alt="Blockchain @ UCSB logo"
          priority
        />
      </div>
    </div>
  );
}
