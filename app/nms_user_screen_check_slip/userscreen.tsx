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
           <div className="h-3/4 w-full bg-white flex flex-row justify-center items-center border-solid border border-black">
            <div className="h-full w-1/3 bg-white flex flex-col justify-center items-center border-solid border-0 border-black">
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border border-black">
             Income
             </div>
             <div className="h-[80vh] w-full bg-white flex flex-col justify-start items-center border-solid border border-black">
 









               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Wage
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  26.0
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  9,620.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Rental
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  1,300.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Meal
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  1300.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Meal OT
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  3,000.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Transport
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  900.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Night Shift
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  2,400.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  1,720.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Diligent
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  1,500.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  OT 1.5x
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  27.60
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  1,852.45
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  OT. 2.0
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                   48.00
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                   4,440.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  OT 3.x
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Traditional
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  AL LSD
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Other
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}            
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
               </div>











 
             </div>
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border border-black">
              <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border border-black">
               <div className="text-[0.50rem]">
               Total Income
               </div>
              </div>
              <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border border-black">
               <div className="text-[0.50rem]">
               28,032.45
               </div>
              </div>
             </div>
            </div>
            <div className="h-full w-1/3 bg-white flex flex-col justify-center items-center border-solid border border-black">
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border border-black">
             Deduction
             </div>
             <div className="h-[80vh] w-full bg-white flex flex-col justify-start items-center border-solid border border-black">










               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Tax
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  SSF
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  469.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Late
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Absence
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Advance
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  
                  </div>
                 </div>
               </div>      
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Uniform
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  Other
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}          
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.50rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>









             </div>
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border border-black">
             

             






              <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border border-black">
               <div className="text-[0.50rem]">
               Total Deduction
               </div>
              </div>
              <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border border-black">
               <div className="text-[0.50rem]">
               469.00
               </div>
              </div>













             </div>
            </div>
            <div className="h-full w-1/3 bg-white flex flex-col justify-center items-center border-solid border border-black">
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border border-black">
             </div>
             <div className="h-[80vh] w-full bg-white  flex flex-row justify-center items-center border-solid border border-black"> 

                

               
                

                

                

            
               
                

                

              

               
           
          

           

               

                


      
             </div>
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border border-black">
             </div>
            </div>
           </div>
         </div>
         <div className="h-full w-1/4 bg-white flex flex-col justify-end items-center pb-5">
           <button className="text-1xl opacity-100 bg-blue-300 pl-10 pr-10 pt-2 pb-2 rounded-lg">Downlod PDF</button>
         </div>         
        </div>
       </div>
    )
}
