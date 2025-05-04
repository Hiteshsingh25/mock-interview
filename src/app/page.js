import Button from "@/component/button";
import DefaultView from "@/component/defaultLayout";
import HowitWorks from "@/component/home/HowitWorks";
import Section1 from "@/component/home/Section1";
import Image from "next/image";



export default function Home() {
  return (
    <div className="mt-4 sm:mt-8 md:mt-16">
      <DefaultView>
      <div className="font-semibold md:font-bold p-2 text-2xl md:text-4xl text-center">
        Anonymous mock interviews with engineers from Amazon, Google, Facebook and other top companies
      </div>
        <div className="text-center text-[12px] sm:text-sm mt-5 w-full p-4 md:max-w-[65%] mx-auto font-semibold">
          Get better at coding interviews and system design problem, and get detailed feedback on exactly what you need to work on.
        </div>
      <div className="flex flex-col mt-4 sm:mt-8 md:mt-12 justify-center w-full items-center">
        <div className="flex gap-3 items-center rounded p-2 text-white font-bold max-w-[230px] bg-[#5757e2]">
          <div className="bg-white rounded-md p-2">
          <Image
          src='https://interviewing.io/static/images/icon--google-color.svg'
          height={20}
          width={20}
          className="rounded"
          alt='google'
          />
          </div>
          <span>
            Continue with Google
          </span>
        </div>
        <div>
          <span className="border-b-2 border-[#5757e2]">
            Or signup with email
          </span>
        </div>
      </div>
      </DefaultView>
        <HowitWorks/>
        <Section1/>
    </div>
  );
}
