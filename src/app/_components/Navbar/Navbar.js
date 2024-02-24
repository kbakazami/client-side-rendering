import Link from "next/link";
import LinkList from "@/app/_components/LinkList/LinkList";

export default function Navbar(){
 return (
     <nav className="py-4 bg-sky-900 text-white mb-5">
         <div className="container flex justify-between mx-auto">
             <div>
                 <h2>
                     <Link href="/" >
                         Blog
                     </Link>
                 </h2>
             </div>
             <LinkList classList={"flex gap-3"} />
         </div>
     </nav>
 )
}