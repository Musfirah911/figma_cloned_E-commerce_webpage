export default function Category() {
  return (
    <div className="ParentContainer w-[1440px] h-[352px] bg-gray-50 flex flex-wrap gap-[32px] px-[160px] py-[80px] ">
      <div className="Top flex gap-[820px] w-[1120px] h-[32px] items-center">
        <p className="text-[22px] font-bold justify-start ">Browse By Category</p>
        <img src="/images/Arrows.png" alt="Arrows" className="justify-end" />
      </div>
      <div className="Categories w-[1120px] flex flex-wrap h-[128px] gap-[32px] ">
      <div className="CategoryCard items-center justify-center text-[18px] flex flex-wrap  bg-[#EDEDED] rounded-lg w-[160px] h-[128px] px-[54px] py-[24px] ">
        <img src="/images/Phones.png" alt="Phones" className="w-[48px] h-[48px]" />
        <p className="text-center h-[24px] w-[58px] ">Phones</p>
      </div>
      <div className="CategoryCard items-center justify-center text-[18px] flex flex-wrap bg-[#EDEDED] rounded-lg w-[160px] h-[128px] px-[54px] py-[24px] ">
        <img src="/images/SmartWatches.png" alt="Smart Watches" className="w-[48px] h-[48px]" />
        <p className="text-nowrap h-[24px] w-[117px] ">Smart Watches</p>
      </div>
      <div className="CategoryCard items-center justify-center text-[18px] flex flex-wrap  bg-[#EDEDED] rounded-lg w-[160px] h-[128px] px-[54px] py-[24px] ">
        <img src="/images/Cameras.png" alt="Cameras" className="w-[48px] h-[48px]" />
        <p className="text-center h-[24px] w-[69px] ">Cameras</p>
      </div>
      <div className="CategoryCard items-center justify-center text-[18px] flex flex-wrap  bg-[#EDEDED] rounded-lg w-[160px] h-[128px] px-[54px] py-[24px] ">
        <img src="/images/Headphones.png" alt="Headphones" className="w-[48px] h-[48px]" />
        <p className="text-center h-[24px] w-[98px] ">Headphones</p>
      </div>
      <div className="CategoryCard items-center justify-center text-[18px] flex flex-wrap  bg-[#EDEDED] rounded-lg w-[160px] h-[128px] px-[54px] py-[24px] ">
        <img src="/images/Computers.png" alt="Computers" className="w-[48px] h-[48px]" />
        <p className="text-center h-[24px] w-[85px] ">Computers</p>
      </div>
      <div className="CategoryCard items-center justify-center text-[18px] flex flex-wrap  bg-[#EDEDED] rounded-lg w-[160px] h-[128px] px-[54px] py-[24px] ">
        <img src="/images/Gaming.png" alt="Gaming" className="w-[48px] h-[48px]" />
        <p className="text-center h-[24px] w-[59px] ">Gaming</p>
      </div>
      </div>
    </div>
  );
}
