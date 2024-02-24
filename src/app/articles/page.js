import {Suspense} from "react";
import ArticleList from "@/app/_components/ArticleList/ArticleList";
import Link from "next/link";

export default function ArticlesPage(){
    return (
        <main>
            <h1 className="main-title">Liste des Articles</h1>
            <Link href="/articles/create">
                <button className="button-primary mb-5">
                    Créer un article
                </button>
            </Link>
            <section>
                <ArticleList/>
            </section>
        </main>
    )
}