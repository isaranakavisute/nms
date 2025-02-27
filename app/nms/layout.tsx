
import Sidebar from "./sidebar.tsx";
import UserScreen from "./userscreen.tsx";
//import logo from "./images/new_logo.png";
import Image from "next/image";

export default function BackOfficeLayout({ children }: {
    children: React.ReactNode
}) {
 return (
    <div className="flex flex-col">

        <Sidebar />

    </div>
 );
}

