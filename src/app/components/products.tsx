export default function Products() {
  return (
    <div className="ParentContainer items-center justify-center flex flex-wrap bg-[#FFFFFF] w-[1440px] h-[1056px] px-[160px] py-[56px] gap-y-8 ">
      <div className="Top w-[1120px] flex items-center h-[32px] gap-8">
        <p className="underline font-semibold text-[18px] ">New Arrival</p>
        <p className="opacity-55"> Bestseller</p>
        <p className="opacity-55"> Featured Products</p>
      </div>
      <div className="w-[1120px] h-[880px] space-y-[16px] flex flex-wrap">
        <div className="Row1 flex gap-4">
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2  ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w-[160px] mt-[14px]  items-center flex ">
              <img src="/images/Iphone.png" alt="Iphone" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
                Apple iPhone 14 Pro Max 128GB Deep Purple{" "}
              </p>
              <p className="Prize text-[24px] font-bold">$900</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap ">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2  ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w-[160px] mt-[14px] s-center flex ">
              <img src="/images/cam.png" alt="Camera" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
                Blackmagic Pocket Cinema Camera 6k{" "}
              </p>
              <p className="Prize text-[24px] font-bold">$2535</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap ">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2  ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w-[160px] mt-[14px] s-center flex ">
              <img src="/images/watch.png" alt="Apple Watch" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
                Apple Watch Series 9 GPS 41mm Starlight Aluminium{" "}
              </p>
              <p className="Prize text-[24px] font-bold">$399</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap ">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2  ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w-[160px] mt-[14px] s-center flex ">
              <img src="/images/airpodes.png" alt="Apple AirPodes" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
                AirPods Max Silver Starlight Aluminium{" "}
              </p>
              <p className="Prize text-[24px] font-bold">$549</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="Row2 flex gap-4">
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap ">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2 ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w--[160px] mt-140px]ms-center flex ">
              <img src="/images/watch6.png" alt="Galaxy Watch" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
                Samsung Galaxy Watch6 Classic 47mm Black{" "}
              </p>
              <p className="Prize text-[24px] font-bold">$369</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap ">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2 ">
              <img src="/images/Top.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w--[160px] mt-140px]ms-center flex ">
              <img src="/images/z.png" alt="Galaxy Z Fold" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
                Galaxy Z Fold5 Unlocked | 256GB | Phantom Black{" "}
              </p>
              <p className="Prize text-[24px] font-bold">$1799</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap ">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2 ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w--[160px] mt-140px]ms-center flex ">
              <img src="/images/budds.png" alt="Galaxy Budds" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
                Galaxy Buds FE Graphite{" "}
              </p>
              <p className="Prize text-[24px] font-bold">$99.99</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap ">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2 ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w--[160px] mt-140px]ms-center flex ">
              <img src="/images/ipad.png" alt="Ipad" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
                Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021
              </p>
              <p className="Prize text-[24px] font-bold">$398</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
