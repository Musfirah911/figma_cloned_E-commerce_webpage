export default function Banner2() {
  return (
    <>
      <div className="ParentContainer bg-[url('/images/Banner.png')] justify-center items-center w-[1440px] h-[448px] flex">
        <div className="Content text-center text-white w-[553px] h-[200px] ">
          <h1 className="font-thin text-[66px] ">
            Big Summer <span className="font-bold">Sale</span>
          </h1>
          <p className="opacity-50 -mt-3">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
            <button className="rounded-lg mt-14 outline outline-2 px-14 py-4 w-[191px] h-14 gap-x-2 "> Shop Now</button>
        </div>
      </div>
    </>
  );
}
