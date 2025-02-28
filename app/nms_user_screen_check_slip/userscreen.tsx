import logo from "./images/new_logo.png";
import Image from "next/image";

export default function UserScreen() {
    return (
        <div className="flex flex-col">                 
        <div className="flex h-[5vh] w-full items-center justify-center bg-blue-300 text-2xl">Pay Slip Sharing Tool</div>
        <div className="flex h-[15vh] w-full flex-row border-solid border-2 items-center justify-between">
           <div className="flex h-[15vh] flex-row items-center">
            <div className="pr-10 pl-10">
             <Image
              src={logo}
              alt="nms logo"
             />
            </div>
            <div className="text-2xl">Welcome User</div><div className="text-2xl text-blue-300 pl-1">View Slip</div>
           </div>
          <div className="flex h-[15vh] flex-row items-center justify-center pr-10">
           <button className="text-2xl opacity-100 bg-blue-300 pl-20 pr-20 pt-5 pb-5 rounded-lg">Log Out</button>
          </div>
        </div>
        <div className="h-[80vh] w-full flex flex-row bg-yellow-100">
         <div className="h-full w-1/4 bg-white flex flex-col justify-end items-center pb-5">
           <button className="text-1xl opacity-100 border-solid border-2 pl-10 pr-10 pt-2 pb-2 rounded-lg">Back</button>
         </div>
         <div className="h-full w-2/4 bg-white flex flex-col justify-center items-center border-solid border-0">
           <div className="h-1/4 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
            <div className="h-full w-3/4 bg-white flex flex-row justify-center items-center border-solid border-0">
             <div className="h-full w-1/4 bg-white flex flex-col justify-center items-center border-solid border-0">
               <Image
                src={logo}
                alt="nms logo"
               />
             </div>
             <div className="h-full w-3/4 bg-white flex flex-col justify-center items-center border-solid border-0">
               <div className="h-1/2 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                nms (Thailand) Co.,Ltd.
                4/222 Harbor Office,6th Floor,Room 6B01,Moo 10.
                Sukhumvit Rd. T. Tungsukia,A. Sriracha Chonburi 20230
               </div>
               <div className="h-1/2 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                Name-Lastname
               </div> 
             </div>
            </div>
            <div className="h-full w-1/4 bg-white flex flex-col justify-center items-center border-solid border-0">
             <div className="h-1/4 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
              PAY SLIP
             </div>
             <div className="h-2/4 w-full bg-white flex flex-row justify-center items-center border-solid border-2">
                  <div className="h-full w-1/2 bg-white flex flex-col justify-center items-center border-solid border-0">
                   <div className="h-1/3 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                     <div className="text-xs">
                      Period
                     </div>
                   </div>
                   <div className="h-1/3 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                    <div className="text-xs">
                     Branch
                    </div>
                   </div>
                   <div className="h-1/3 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                    <div className="text-xs">
                     Emp No
                    </div>
                   </div>
                  </div>
                  <div className="h-full w-1/2 bg-white flex flex-col justify-center items-center border-solid border-0">
                   <div className="h-1/3 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                    <div className="text-[0.65rem]">
                     Sep-24
                    </div>
                   </div>
                   <div className="h-1/3 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                    <div className="text-[0.65rem]">
                     A Company
                    </div>
                   </div>
                   <div className="h-1/3 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                    <div className="text-[0.65rem]">
                     151450000741
                    </div>
                   </div>
                  </div>
             </div>
             <div className="h-1/4 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
              <div className="h-full w-1/2 bg-white flex flex-col justify-center items-center border-solid border-0">
               <div className="h-1/2 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-xs">
                     ID Card
                  </div>
               </div>
               <div className="h-1/2 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-xs">
                     Division
                  </div>
               </div>
              </div>
              <div className="h-full w-1/2 bg-white flex flex-col justify-center items-center border-solid border-0">
               <div className="h-1/2 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                  <div className="text-[0.65rem]">
                     1-5145-4000-74-1
                  </div>
               </div>
               <div className="h-1/2 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                  <div className="text-[0.65rem]">
                     Production
                  </div>
               </div>
              </div>
             </div> 
            </div>
           </div>
           <div className="h-3/4 w-full bg-white flex flex-col justify-center items-center border-solid border-2">
           </div>
         </div>
         <div className="h-full w-1/4 bg-white flex flex-col justify-end items-center pb-5">
           <button className="text-1xl opacity-100 bg-blue-300 pl-10 pr-10 pt-2 pb-2 rounded-lg">Downlod PDF</button>
         </div>         
        </div>
       </div>
    )
}
