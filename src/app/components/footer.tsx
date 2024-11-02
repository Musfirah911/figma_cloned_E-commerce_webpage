import Link from "next/link";
export default function Footer() {
  return (
    <div className="Footer w-[1440px] h-[504px] bg-black text-white px-40 py-[104px] gap-y-6 ">
      <div className="w-[1120px] h-[256px] gap-y-64 gap-x-12 flex flex-wrap">
        <div className="space-y-[24px] w-[384px] h-[94.87px] flex flex-wrap ">
          <img src="/images/Logoo.png" alt="Logo" />
          <p className="text-[15px] opacity-70 pr-10  ">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="space-y-[8px] w-[295.5px] h-[256px]">
          <h1 className="font-bold text-[19px] ">Services</h1>
          <ul className="text-[15px] opacity-70 ">
            <Link href={"/Bonus"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Bonus Program
              </li>{" "}
            </Link>
            <Link href={"/Gift"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Gift cards
              </li>{" "}
            </Link>{" "}
            <Link href={"/Credit"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Credit and payment
              </li>{" "}
            </Link>{" "}
            <Link href={"/Service"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Service contracts
              </li>{" "}
            </Link>{" "}
            <Link href={"/Non-cash"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Non-cash account
              </li>{" "}
            </Link>{" "}
            <Link href={"/Payment"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Payment Program
              </li>{" "}
            </Link>
          </ul>
        </div>
        <div className="space-y-[8px] w-[295.5px] h-[256px]">
          <h1 className="font-bold text-[19px] ">Assistance to the buyer</h1>
          <ul className="text-[15px] opacity-70 ">
            <Link href={"/order"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Find an order
              </li>{" "}
            </Link>
            <Link href={"/Terms"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
              Terms of deivery
              </li>{" "}
            </Link>{" "}
            <Link href={"/Exchange"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Exchange and return of goods
              </li>{" "}
            </Link>{" "}
            <Link href={"/Gurantee"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Gurantee 
              </li>{" "}
            </Link>{" "}
            <Link href={"/FAQs"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Frequently asked questions
              </li>{" "}
            </Link>{" "}
            <Link href={"/Termsofuseofsite"}>
              {" "}
              <li className="mt-4 hover:text-yellow-200 hover:opacity-100">
                Terms of use of site
              </li>{" "}
            </Link>
          </ul>
        </div>
      </div>
      <img src="/images/Icons.png" alt="Social Icons" className="w-[173px] h-[16px] mt-10 " />
    </div>
  );
}
