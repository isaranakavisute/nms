import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="h-screen w-1/4 bg-yellow-100">
            <div className="mb-0 bg-gradient-to-tr from-blue-500 to-pink-600 p-5">
                <div>NMS Template</div>
                <div><i className="fa-solid fa-user"></i> [Login Name]</div>
            </div>
            <div className="flex flex-col gap-2 p-5">
                <Link href="/dashboard">
                    <i className="fa-solid fa-chart-line mr-2"></i>
                    Dashboard
                </Link>
                <Link href="/book">
                    <i className="fa-solid fa-book mr-2"></i>
                    Book
                </Link>
                <Link href="/sale">
                    <i className="fa-solid fa-cart-shopping mr-2"></i>
                    Sale
                </Link>
            </div>
        </div>
    )
}
