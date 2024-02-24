import Link from "next/link";

export default function LinkList({ classList }){
    return (
        <ul className={ classList }>
            <li className="nav-primary"><Link href="/articles">Articles</Link></li>
            <li className="nav-primary"><Link href="/contact">Contact</Link></li>
        </ul>
    )
}