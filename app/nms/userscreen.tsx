import Link from 'next/link';
import logo from "./images/new_logo.png";
import Image from "next/image";

function UserScreen() {
    return 
    (
         <div className="flex h-[5vh] w-full items-center justify-center bg-blue-300 text-2xl">Pay Slip Sharing Tool</div>
          <div className="flex h-[15vh] w-full flex-row border-solid border-2 items-center justify-between">
           <div className="flex h-[15vh] flex-row items-center">
            <div className="pr-10 pl-10">
             <Image
              src={logo}
              alt="nms logo"
             />
            </div>
            <div className="text-2xl">Welcome User Top Page</div>
           </div>
          <div className="flex h-[15vh] flex-row items-center justify-center pr-10">
           <button className="text-2xl opacity-100 bg-blue-300 pl-20 pr-20 pt-5 pb-5 rounded-lg">Log Out</button>
          </div>
         </div>
        <div className="h-[80vh] w-full bg-white flex flex-row items-center justify-center">
         <div className="pr-20">
          <button className="text-2xl opacity-100 bg-blue-300  p-20 rounded-xl">Check Slip</button>
         </div>
         <button className="text-2xl opacity-100 bg-blue-300  p-20 rounded-xl">History Search</button>
        </div>  
    );
}

export default UserScreen;
