export default function CreateArticle(){
    return (
        <main>
            <h1 className="main-title">Créer un article</h1>
            <form className="bg-sky-800 w-3/5 p-10 rounded flex flex-col gap-y-3 mx-auto" action="">
                <div className="flex flex-col">
                    <label htmlFor="author" className="text-white mb-2"> Auteur </label>

                    <input
                        type="text"
                        id="author"
                        placeholder="Votre pseudo"
                        className="rounded p-1"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="title" className="text-white mb-2"> Titre </label>

                    <input
                        type="text" mb-2
                        id="title"
                        placeholder="Titre de l'article"
                        className="rounded p-1"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="Contenu de l'article" className="text-white mb-2"> Contenu </label>

                    <textarea
                        id="author"
                        placeholder="Toto"
                        rows="8"
                        className="rounded p-1"
                    />
                </div>
                <button className="button-secondary mt-2">Créer</button>
            </form>
        </main>
    )
}