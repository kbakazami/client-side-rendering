'use client'
import {createArticle} from "@/app/actions/actions";

export default function CreateArticle(){
    const submitArticle = createArticle();
    return (
        <main>
            <h1 className="main-title">Créer un article</h1>
            <form className="bg-sky-800 w-3/5 p-10 rounded flex flex-col gap-y-3 mx-auto" action={submitArticle}>
                <div className="flex flex-col">
                    <label htmlFor="author" className="text-white mb-2"> Auteur </label>

                    <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Votre pseudo"
                        className="rounded p-1"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="title" className="text-white mb-2"> Titre </label>

                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Titre de l'article"
                        className="rounded p-1"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="image" className="text-white mb-2"> Image </label>

                    <input
                        type="file"
                        id="image"
                        name="image"
                        placeholder="Titre de l'article"
                        className="rounded p-1 text-white"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="content" className="text-white mb-2"> Contenu </label>

                    <textarea
                        id="content"
                        name="content"
                        placeholder="Contenu de l'article ..."
                        rows="8"
                        className="rounded p-1"
                    />
                </div>
                <button type="submit" className="button-secondary mt-2">Créer</button>
            </form>
        </main>
    )
}