export default function Banners(){
    return (
        <div className="ParentBanners w-[1440px] h-[640px] flex ">
            <div className="BigBanner w-[360px] h-[640px] gap-y-6 pl-8 pr-8 pt-[37px] pb-[56px] ">
                <img src="/images/Group.png" alt="Group" className="w-[366.06px] h-[327px] "/>
                <div className="text flex flex-wrap items-start justify-start w-[296px] h-[208px] gap-y-2 ">
                <h1 className="text-[28px] font-thin text-lg ">Popular Products</h1>
                <p className="opacity-50 text-[15px] ">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className="w-[191px] h-[56px] gap-x-2 px-14 py-4 rounded-lg outline outline-1">Shop Now</button>
                </div>
            </div>
            <div className="BigBanner bg-[#F9F9F9] w-[360px] h-[640px] gap-y-6 pl-8 pr-8 pt-[37px] pb-[56px] ">
               <img src="/images/64.png" alt="Ipad Pro" className="w-[366.06px] h-[327px] "/>
                <div className="text flex flex-wrap items-start justify-start w-[296px] h-[208px] gap-y-2 ">
                <h1 className="text-[28px] font-thin text-lg ">Ipad Pro</h1>
                <p className="opacity-50 text-[15px] ">Pad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className="w-[191px] h-[56px] gap-x-2 px-14 py-4 rounded-lg outline outline-1">Shop Now</button>
                </div>
            </div>
            <div className="BigBanner bg-[#EAEAEA] w-[360px] h-[640px] gap-y-6 pl-8 pr-8 pt-[37px] pb-[56px] ">
            <img src="/images/41.png" alt="Samsung Galaxy" className="w-[366.06px] h-[327px] "/>
            <div className="text flex flex-wrap items-start justify-start w-[296px] h-[208px] gap-y-2 ">
                <h1 className="text-[28px] font-thin text-lg ">Samsung Galaxy</h1>
                <p className="opacity-50 text-[15px] ">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className="w-[191px] h-[56px] gap-x-2 px-14 py-4 rounded-lg outline outline-1">Shop Now</button>
                </div>
            </div>
            <div className="BigBanner bg-[#2C2C2C] text-white w-[360px] h-[640px] gap-y-6 pl-8 pr-8 pt-[37px] pb-[56px] ">
            <img src="/images/Macbook.png" alt="Macbook" className="w-[366.06px] h-[327px] "/>
            <div className="text flex flex-wrap items-start justify-start w-[296px] h-[208px] gap-y-2 ">
                <h1 className="text-[28px] font-thin text-lg ">Macbook Pro</h1>
                <p className="opacity-50 text-[15px] ">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <button className="w-[191px] h-[56px] gap-x-2 px-14 py-4 rounded-lg outline outline-1">Shop Now</button>
                </div>
            </div>
        </div>
    )
}