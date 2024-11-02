import Link from "next/link"

export default function Header(){
    return(
        <div className="header w-[1440px] px-[160px] py-[16px] flex h-[88px] items-center gap-auto justify-between">
            <div className="logo"><img src="/images/logo.png" alt="logo" /></div>
            <button className="Search-Field bg-gray-100 flex w-[372px] h-[56px] items-center px-[16px] py-[16px] rounded-md gap-[8px]"><img src="/images/Search.png" alt="" /><span className="opacity-50">Search</span></button>
          <ul className="header-buttons justify-between flex flex-wrap gap-x-[52px] w-[369px] h-[19px] text-center">
            <Link href={""} className=" font-medium "><li>Home</li></Link>
            <Link href={""} className=" font-medium "><li>About Us</li></Link>
            <Link href={""} className=" font-medium "><li>Contact</li></Link> 
            <Link href={""} className=" font-medium "><li>Blog</li></Link>
            </ul>
            <ul className="logos h-[30px] w-[32px] flex gap-x-[24px]">
            <img src="/images/Vector.png" alt="Vector Logo"/>
            <img src="/images/Cart1.png" alt="Cart" />
            <img src="/images/User.png" alt="User"  />
            </ul>  
        </div>
    )
}