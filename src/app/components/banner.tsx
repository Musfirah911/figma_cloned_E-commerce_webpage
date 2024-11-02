
export default function Banner(){
    return(
        <div className="ParentContainer w-[1440px] h-[623px] bg-black ga0-[24px] flex px-[160px] items-center">
            <div className="ChildContainer w-[714px] h-[256px] gap-x-[10px] grid">
                <p className="firstPara font-semibold opacity-40 text-[25px] text-white">Pro.Beyond.</p>
                <p className="SecondPara font-thin text-[96px] text-white">Iphone 14 <span className="font-bold">Pro</span></p>
                <p className="thirdPara font-medium text-[18px] text-[#909090] h-auto">Created to change everything for the better. For everyone</p>
                <button className="border-white border-[1px] rounded-[6px] w-[191px] h-[56px] px-[56px] py-[15px] text-white text-[16px] mt-7">Shop Now</button>
            </div>
            <div className="ImageContainer w-[406px] h-[632px] items-end flex">
                <img src="/images/Iphone_Image.png" alt="Iphone Image"  />
            </div>
        </div>
    )
}