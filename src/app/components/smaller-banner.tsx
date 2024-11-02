export default function SmallerBanner() {
  return (
    <div className="ParentContainer w-[1440px] flex flex-wrap h-[600px]">
      <div className="LeftBanner flex flex-wrap w-[720px] h-[600px] ">
        <div className="WideSquare w-[720px] h-[328px] bg-white pr-[48px] flex items-center ">
          <img
            src="/images/PlayStation.png"
            alt="Play Station"
            className="w-[355px] justify-end h-[324px] "
          />
          <div className="title w-[338px] h-[128px] space-y-4 ">
            <p className="font-semibold text-[32px] w-[338px] h-[40px] ">
              Playstation 5
            </p>
            <p className="opacity-70">
              Incredibly powerful CPUs, GPUs and an SSD with integrated I/O will
              redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="SquareBanner1 bg-slate-100  pr-[48px] w-[360px] flex items-center justify-between h-[272px] ">
          <img src="/images/hero.png" alt="AirPhones" />
          <div className="w-[160px] h-[194px] gap-[8px] ">
            <p className="text-[24px] font-medium ">Apple</p>{" "}
            <p className="text-[24px] font-medium ">AirPods</p>{" "}
            <p className="text-[24px] font-semibold "> Max</p>
            <p className="opacity-50">
              Computational audio. Listen, it's powerful
            </p>
          </div>
        </div>
        <div className="SquareBanner2 bg-neutral-500 text-white pr-[48px] gap-4 w-[360px] flex items-center justify-between h-[272px]">
          <img src="/images/image_36.png" alt="Image" />
          <div className=" items-center"><p className="text-[24px] ">Apple</p>{" "}
          <p className="text-[24px]">
            Vision <span className="font-semibold">Pro</span>
          </p>
          <p className="opacity-50">An immersive way to experience entertainment</p>
          </div>
        </div>
      </div>
      <div className="BigBanner flex bg-slate-200 items-center w-[720px] h-[600px] gap-1 pl-[56px] pt-[44px] pb-[44px] ">
        <div className="flex flex-wrap">
            <div className="-space-y-5 ">
            <p className="text-[40px] font-thin ">Mackbook</p>
            <p className="font-black text-[40px]">Air</p>
            </div>
            <div className="space-y-4">
            <p className="opacity-50">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
            <button className="w-[191px] h-[56px] gap-[8px] px-[56px] py-[16px]  outline outline-2 rounded-lg ">Shop Now</button>
            </div>
            </div>
        <img src="/images/MacbookPro14.png" alt="Mackbook Pro"  />
      </div>
    </div>
  );
}
