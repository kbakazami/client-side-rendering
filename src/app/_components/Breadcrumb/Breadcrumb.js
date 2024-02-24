'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    return (
        <ul className="container mx-auto flex my-4">
            <li><Link href={'/'}>accueil</Link></li>
            {pathNames.length > 0 && "/"}
            {pathNames.map((item, key) => {
                    let href = `/${pathNames.slice(0, key + 1).join('/')}`;
                    let itemClass = paths === href ? `text-sky-900 underline` : "";
                    return (
                        <li className={itemClass} key={key}>
                            <Link href={href}>
                                {item}
                            </Link>
                            {pathNames.length !== key + 1 && "/"}
                        </li>
                    )
                }
            )}
        </ul>
    )
}