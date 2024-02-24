import LinkList from "@/app/_components/LinkList/LinkList";

export default function Footer(){
    return (
        <footer className="py-4 bg-sky-900 text-white mt-5 sticky top-[100vh]">
            <div className="container flex justify-between mx-auto">
                <div className="self-center">
                    Logo
                </div>
                <div>
                    <LinkList classList={"flex flex-col gap-3"} />
                </div>
                <div className="self-center">
                    social media
                </div>
            </div>
        </footer>
    )
}