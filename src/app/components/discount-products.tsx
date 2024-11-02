export default function DiscountProducts(){
    return(
        <div className="ParentDiscountProducts bg-[#FFFFFF] w-[1440px] h-[656px] gap-y-8 px-[160px] py-[80px] ">
            <div className="w-[248px] align-top font-sans font-semibold h-[32px] text-[24px] ">Discount up to -50%</div>
            <div className="w-[1120px] mt-8 h-[880px] space-y-[16px] flex flex-wrap">
          <div className="Row  flex gap-4">
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2  ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w-[160px] mt-[14px]  items-center flex ">
              <img src="/images/pro.png" alt="Iphone" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
              Apple iPhone 14 Pro 512GB Gold (MQ233){" "}
              </p>
              <p className="Prize text-[24px] font-bold">$1437</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2  ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w-[160px] mt-[14px]  items-center flex ">
              <img src="/images/airpodes.png" alt="AirPodes" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
              AirPods Max Silver
              Starlight Aluminium {" "}
              </p>
              <p className="Prize text-[24px] font-bold">$549</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2  ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w-[160px] mt-[14px]  items-center flex ">
              <img src="/images/watch.png" alt="Apple Watch" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
              Apple Watch Series 9 GPS 41mm Starlight Aluminium 
              </p>
              <p className="Prize text-[24px] font-bold">$399</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
          <div className="ProductCard w-[268px] justify-center h-[432px] bg-[#F6F6F6] px-[16px] py-[24px] rounded-[9px] flex flex-wrap">
            <div className="TopSection h-[Hug] w-[Fill] gap-x-2  ">
              <img src="/images/TopSection.png" alt="Heart section" />
            </div>
            <div className="ImageContainer h-[160px] w-[160px] mt-[14px]  items-center flex ">
              <img src="/images/IP.png" alt="Iphone" />
            </div>
            <div className="Text flex flex-wrap items-center mt-5 h-[160px] w-[263px] justify-center">
              {" "}
              <p className="Info text-[16px] text-center font-semibold">
              Apple iPhone 14 Pro 1TB Gold (MQ2V3)
              </p>
              <p className="Prize text-[24px] font-bold">$1499</p>
              <button className="w-[188px] h-[48px] rounded-lg bg-black text-white ">
                Buy Now
              </button>
            </div>
          </div>
         </div>
         </div>
        </div>
    )
}