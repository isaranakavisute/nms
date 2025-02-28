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
             <div className="h-full w-1/4 bg-white flex flex-col justify-start items-center border-solid border-0">
              <div className="pt-7">
               <Image
                src={logo}
                alt="nms logo"
               />
              </div>
             </div>
             <div className="h-full w-3/4 bg-white flex flex-col justify-center items-center border-solid border-0">
               <div className="h-3/4 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                <div className="pt-5 text-[0.95rem]">
                 nms (Thailand) Co.,Ltd.
                 4/222 Harbor Office,6th Floor,Room 6B01,Moo 10.
                 Sukhumvit Rd. T. Tungsukia,A. Sriracha Chonburi 20230
                </div>
               </div>
               <div className="h-1/4 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                Name-Lastname
               </div> 
             </div>
            </div>
            <div className="h-full w-1/4 bg-white flex flex-col justify-center items-center border-solid border-0">
             <div className="h-1/4 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
              PAY SLIP
             </div>
             <div className="h-2/4 w-full bg-white flex flex-row justify-center items-center border-solid border border-black">
                  <div className="h-full w-1/2 bg-white flex flex-col justify-center items-center border-solid border-0">
                   <div className="h-1/3 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                     <div className="text-xs pl-5">
                      Period
                     </div>
                   </div>
                   <div className="h-1/3 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                    <div className="text-xs pl-5">
                     Branch
                    </div>
                   </div>
                   <div className="h-1/3 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                    <div className="text-xs pl-5">
                     Emp No
                    </div>
                   </div>
                  </div>
                  <div className="h-full w-1/2 bg-white flex flex-col justify-center items-center border-solid border-0">
                   <div className="h-1/3 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                    <div className="text-[0.65rem] pr-5">
                     Sep-24
                    </div>
                   </div>
                   <div className="h-1/3 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                    <div className="text-[0.65rem] pr-5">
                     A Company
                    </div>
                   </div>
                   <div className="h-1/3 w-full bg-white flex flex-row justify-center items-center border-solid border-0">
                    <div className="text-[0.65rem] pr-5">
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
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border-b border-black">
             Income
             </div>
             <div className="h-[80vh] w-full bg-white flex flex-col justify-start items-center border-solid border-0 border-black">
 









               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5 pt-5">
                  Wage
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pt-5">
                  26.0
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5 pt-5">
                  9,620.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Rental
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  1,300.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Meal
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  1300.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Meal OT
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  3,000.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Transport
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  900.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Night Shift
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  2,400.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  1,720.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Diligent
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  1,500.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  OT 1.5x
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  27.60
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  1,852.45
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  OT. 2.0
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                   48.00
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                   4,440.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  OT 3.x
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  -
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Traditional
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  AL LSD
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Other
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}            
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/3 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="h-full w-1/3 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  
                  </div>
                 </div>
               </div>











 
             </div>
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border-0 border-t border-black">
              <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0 border-black">
               <div className="text-[0.75rem] pl-5">
               Total Income
               </div>
              </div>
              <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0 border-black">
               <div className="text-[0.75rem] pr-5">
               28,032.45
               </div>
              </div>
             </div>
            </div>
            <div className="h-full w-1/3 bg-white flex flex-col justify-center items-center border-solid border-0 border-black">
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border-b border-l border-black">
             Deduction
             </div>
             <div className="h-[80vh] w-full bg-white flex flex-col justify-start items-center border-solid border-l border-black">










               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5 pt-5">
                  Tax
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5 pt-5">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  SSF
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  469.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  xx
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Late
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Absence
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Advance
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  
                  </div>
                 </div>
               </div>      
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Uniform
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  Other
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}          
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 w-full bg-white flex flex-row justify-start items-center border-solid border-0">
                 <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0">
                  <div className="text-[0.75rem] pl-5">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0">
                  <div className="text-[0.75rem] pr-5">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>









             </div>
             <div className="h-[10vh] w-full bg-white flex flex-row justify-center items-center border-solid border-0 border-black">
             

             






              <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0 border-l border-t border-black">
               <div className="text-[0.75rem] pl-5">
               Total Deduction
               </div>
              </div>
              <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0 border-black border-t">
               <div className="text-[0.75rem] pr-5">
               469.00
               </div>
              </div>













             </div>
            </div>
            <div className="h-full w-1/3 bg-white flex flex-col justify-center items-center border-solid border-0 border-black border-l">
             <div className="h-[7vh] w-full bg-white flex flex-row justify-center items-center border-solid border-b border-l border-black">
             </div>
             <div className="h-[80vh] w-full bg-white flex flex-col justify-start items-center border-solid border-b border-black">
              <div className="h-[4vh] w-full bg-white  flex flex-row justify-center items-center border-solid border-l border-b border-black">
               <div className="h-full w-1/2 bg-white  flex flex-row justify-start items-center border-solid border-black border-r pl-5">
                <div className="text-[0.75rem]">
                  xxx
                </div>
               </div>
               <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-black">
                <div className="text-[0.75rem] pr-5">
                  208,000.00
                </div>
               </div>
              </div>       
              <div className="h-[4vh] w-full bg-white  flex flex-row justify-center items-center border-solid border-l border-b border-black">



               <div className="h-full w-1/2 bg-white  flex flex-row justify-start items-center border-solid border-black border-r pl-5">
                <div className="text-[0.75rem]">
                  xxx
                </div>
               </div>
               <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-black">
                <div className="text-[0.75rem] pr-5">
                  3,600.00
                </div>
               </div>


              </div>
              <div className="h-[4vh] w-full bg-white  flex flex-row justify-center items-center border-solid border-l border-b border-black">


               <div className="h-full w-1/2 bg-white  flex flex-row justify-start items-center border-solid border-black border-r pl-5">
                <div className="text-[0.75rem]">
                  xxx
                </div>
               </div>
               <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-black">
                <div className="text-[0.75rem] pr-5">
                </div>
               </div>


              </div>
              <div className="h-[4vh] w-full bg-white  flex flex-row justify-center items-center border-solid border-l border-b border-black">

               <div className="h-full w-1/2 bg-white  flex flex-row justify-start items-center border-solid border-black border-r pl-5">
                <div className="text-[0.75rem]">
                  xxx
                </div>
               </div>
               <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-black">
                <div className="text-[0.75rem] pr-5">
                </div>
               </div>


              </div>
             </div>
             <div className="h-[13vh] w-full bg-white flex flex-row justify-center items-center border-solid border-0 border-l border-black">
              <div className="h-full w-1/2 bg-white flex flex-row justify-start items-center border-solid border-0 border-black">
               <div className="text-[0.75rem] pl-5">
                Net Income
               </div>
              </div>
              <div className="h-full w-1/2 bg-white flex flex-row justify-end items-center border-solid border-0 border-black">
               <div className="text-[0.75rem] pr-5">
                27,563.45                                                                                           
               </div>
              </div>
             </div>
            </div>
           </div>
         </div>
         <div className="h-full w-1/4 bg-white flex flex-row justify-end items-center pb-5">
           <div className="h-full w-1/2 bg-white flex flex-row justify-start items-start pb-5 pl-5 pt-5">
            Publication date
            2014.12.25
           </div>
           <div className="h-full w-1/2 bg-white flex flex-row justify-end items-end pb-5">
            <button className="text-1xl opacity-100 bg-blue-300 pl-10 pr-10 pt-2 pb-2 rounded-lg">Downlod PDF</button>
           </div>
         </div>         
        </div>
       </div>
    )
}
