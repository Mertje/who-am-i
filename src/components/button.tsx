import { Link } from "react-router-dom"

export default function LinkButton({ children, link }: { children: React.ReactNode, link: string }) {

    return (
        <Link to={link} className="mr-2">
            <button className="py-2 mr-2 w-full border-2 rounded-md border-gray-400 hover:border-gray-700 hover:bg-gray-100">
                <span>{children}</span>
            </button>
        </Link>
    )
}