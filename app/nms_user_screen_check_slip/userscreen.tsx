import logo from "./images/new_logo.png";
import Image from "next/image";

export default function UserScreen() {
    return (
        <div className="flex flex-col">                 
        <div className="flex h-[5vh] w-full items-center justify-center bg-blue-300 text-2xl">Pay Slip Sharing Tool</div>
        <div className="flex h-[15vh] w-full flex-row items-center justify-between border-2 border-solid">
           <div className="flex h-[15vh] flex-row items-center">
            <div className="pl-10 pr-10">
             <Image
              src={logo}
              alt="nms logo"
             />
            </div>
            <div className="text-2xl">Welcome User</div><div className="pl-1 text-2xl text-blue-300">View Slip</div>
           </div>
          <div className="flex h-[15vh] flex-row items-center justify-center pr-10">
           <button className="rounded-lg bg-blue-300 pb-5 pl-20 pr-20 pt-5 text-2xl opacity-100">Log Out</button>
          </div>
        </div>
        <div className="flex h-[75vh] w-full flex-row bg-yellow-100">
         <div className="flex h-full w-1/4 flex-col items-center justify-end bg-white pb-10">
           <button className="text-1xl rounded-lg border-2 border-solid pb-2 pl-10 pr-10 pt-2 opacity-100">Back</button>
         </div>
         <div className="flex h-full w-2/4 flex-col items-center justify-center border-0 border-solid bg-white">
           <div className="flex h-1/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
            <div className="flex h-full w-3/4 flex-row items-center justify-center border-0 border-solid bg-white">
             <div className="flex h-full w-1/4 flex-col items-center justify-start border-0 border-solid bg-white">
              <div className="pt-7">
               <Image
                src={logo}
                alt="nms logo"
               />
              </div>
             </div>
             <div className="flex h-full w-3/4 flex-col items-center justify-center border-0 border-solid bg-white">
               <div className="flex h-3/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                <div className="pt-5 text-[0.95rem]">
                 nms (Thailand) Co.,Ltd.  
                 4/222 Harbor Office,6th Floor,Room 6B01,Moo 10.
                 Sukhumvit Rd. T. Tungsukia,A. Sriracha Chonburi 20230
                </div>
               </div>
               <div className="flex h-1/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                Name-Lastname
               </div> 
             </div>
            </div>
            <div className="flex h-full w-1/4 flex-col items-center justify-center border-0 border-solid bg-white">
             <div className="flex h-1/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
              PAY SLIP
             </div>
             <div className="flex h-2/4 w-full flex-row items-center justify-center border border-solid border-black bg-white">
                  <div className="flex h-full w-1/2 flex-col items-center justify-center border-0 border-solid bg-white">
                   <div className="flex h-1/3 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                     <div className="pl-5 text-xs">
                      Period
                     </div>
                   </div>
                   <div className="flex h-1/3 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                    <div className="pl-5 text-xs">
                     Branch
                    </div>
                   </div>
                   <div className="flex h-1/3 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                    <div className="pl-5 text-xs">
                     Emp No
                    </div>
                   </div>
                  </div>
                  <div className="flex h-full w-1/2 flex-col items-center justify-center border-0 border-solid bg-white">
                   <div className="flex h-1/3 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                    <div className="pr-5 text-[0.65rem]">
                     Sep-24
                    </div>
                   </div>
                   <div className="flex h-1/3 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                    <div className="pr-5 text-[0.65rem]">
                     A Company
                    </div>
                   </div>
                   <div className="flex h-1/3 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                    <div className="pr-5 text-[0.65rem]">
                     151450000741
                    </div>
                   </div>
                  </div>
             </div>
             <div className="flex h-1/4 w-full flex-row items-center justify-center border-0 border-solid bg-white">
              <div className="flex h-full w-1/2 flex-col items-center justify-center border-0 border-solid bg-white">
               <div className="flex h-1/2 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="text-xs">
                     ID Card
                  </div>
               </div>
               <div className="flex h-1/2 w-full flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="text-xs">
                     Division
                  </div>
               </div>
              </div>
              <div className="flex h-full w-1/2 flex-col items-center justify-center border-0 border-solid bg-white">
               <div className="flex h-1/2 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                  <div className="text-[0.65rem]">
                     1-5145-4000-74-1
                  </div>
               </div>
               <div className="flex h-1/2 w-full flex-row items-center justify-center border-0 border-solid bg-white">
                  <div className="text-[0.65rem]">
                     Production
                  </div>
               </div>
              </div>
             </div> 
            </div>
           </div>
           <div className="flex h-3/4 w-full flex-row items-center justify-center border border-solid border-black bg-white">
            <div className="flex h-full w-1/3 flex-col items-center justify-center border-0 border-solid border-black bg-white">
             <div className="flex h-[10vh] w-full flex-row items-center justify-center border-b border-solid border-black bg-white">
             Income
             </div>
             <div className="flex h-[80vh] w-full flex-col items-center justify-start border-0 border-solid border-black bg-white">
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 pt-5 text-[0.75rem]">
                  ค่าจ้าง
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pt-5 text-[0.75rem]">
                  26.0
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 pt-5 text-[0.75rem]">
                  9,620.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Rental
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  1,300.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Meal
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  1300.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Meal OT
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  3,000.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Transport
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  900.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Night Shift
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  2,400.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  xx
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  xx
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  xx
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  1,720.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Diligent
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  1,500.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  OT 1.5x
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  27.60
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  1,852.45
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  OT. 2.0
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                   48.00
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                   4,440.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  OT 3.x
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  -
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Traditional
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  xx
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  AL LSD
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Other
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  xx
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}            
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/3 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="text-[0.75rem]">
                  
                  </div>
                 </div>
                 <div className="flex h-full w-1/3 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  
                  </div>
                 </div>
               </div>
             </div>
             <div className="flex h-[10vh] w-full flex-row items-center justify-center border-0 border-t border-solid border-black bg-white">
              <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid border-black bg-white">
               <div className="pl-5 text-[0.75rem]">
               Total Income
               </div>
              </div>
              <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid border-black bg-white">
               <div className="pr-5 text-[0.75rem]">
               28,032.45
               </div>
              </div>
             </div>
            </div>
            <div className="flex h-full w-1/3 flex-col items-center justify-center border-0 border-solid border-black bg-white">
             <div className="flex h-[10vh] w-full flex-row items-center justify-center border-b border-l border-solid border-black bg-white">
             Deduction
             </div>
             <div className="flex h-[80vh] w-full flex-col items-center justify-start border-l border-solid border-black bg-white">
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 pt-5 text-[0.75rem]">
                  Tax
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 pt-5 text-[0.75rem]">
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  SSF
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  469.00
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  xx
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Late
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Absence
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Advance
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  
                  </div>
                 </div>
               </div>      
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Uniform
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  Other
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  -
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}          
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
               <div className="h-1/20 flex w-full flex-row items-center justify-start border-0 border-solid bg-white">
                 <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid bg-white">
                  <div className="pl-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
                 <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid bg-white">
                  <div className="pr-5 text-[0.75rem]">
                  {'\u00A0'}
                  </div>
                 </div>
               </div>
             </div>
             <div className="flex h-[10vh] w-full flex-row items-center justify-center border-0 border-solid border-black bg-white">
              <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-l border-t border-solid border-black bg-white">
               <div className="pl-5 text-[0.75rem]">
               Total Deduction
               </div>
              </div>
              <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-t border-solid border-black bg-white">
               <div className="pr-5 text-[0.75rem]">
               469.00
               </div>
              </div>
             </div>
            </div>
            <div className="flex h-full w-1/3 flex-col items-center justify-center border-0 border-solid border-black bg-white">
             <div className="flex h-[10vh] w-full flex-row items-center justify-center border-b border-l border-solid border-black bg-white">
             </div>
             <div className="flex h-[70vh] w-full flex-col items-center justify-start border-b border-solid border-black bg-white">
              <div className="flex h-[4vh] w-full flex-row items-center justify-center border-b border-l border-solid border-black bg-white">
               <div className="flex h-full w-1/2 flex-row items-center justify-start border-r border-solid border-black bg-white pl-5">
                <div className="text-[0.75rem]">
                  xxx
                </div>
               </div>
               <div className="flex h-full w-1/2 flex-row items-center justify-end border-solid border-black bg-white">
                <div className="pr-5 text-[0.75rem]">
                  208,000.00
                </div>
               </div>
              </div>       
              <div className="flex h-[4vh] w-full flex-row items-center justify-center border-b border-l border-solid border-black bg-white">
               <div className="flex h-full w-1/2 flex-row items-center justify-start border-r border-solid border-black bg-white pl-5">
                <div className="text-[0.75rem]">
                  xxx
                </div>
               </div>
               <div className="flex h-full w-1/2 flex-row items-center justify-end border-solid border-black bg-white">
                <div className="pr-5 text-[0.75rem]">
                  3,600.00
                </div>
               </div>
              </div>
              <div className="flex h-[4vh] w-full flex-row items-center justify-center border-b border-l border-solid border-black bg-white">
               <div className="flex h-full w-1/2 flex-row items-center justify-start border-r border-solid border-black bg-white pl-5">
                <div className="text-[0.75rem]">
                  xxx
                </div>
               </div>
               <div className="flex h-full w-1/2 flex-row items-center justify-end border-solid border-black bg-white">
                <div className="pr-5 text-[0.75rem]">
                </div>
               </div>
              </div>
              <div className="flex h-[4vh] w-full flex-row items-center justify-center border-b border-l border-solid border-black bg-white">
               <div className="flex h-full w-1/2 flex-row items-center justify-start border-r border-solid border-black bg-white pl-5">
                <div className="text-[0.75rem]">
                  xxx
                </div>
               </div>
               <div className="flex h-full w-1/2 flex-row items-center justify-end border-solid border-black bg-white">
                <div className="pr-5 text-[0.75rem]">
                </div>
               </div>
              </div>
              <div className="flex h-full w-full flex-row items-center justify-center border-l border-solid border-black">
              </div>
             </div>
             <div className="flex h-[20vh] w-full flex-row items-center justify-center border-0 border-l border-solid border-black bg-white">
              <div className="flex h-full w-1/2 flex-row items-center justify-start border-0 border-solid border-black bg-white">
               <div className="pl-5 text-[0.75rem]">
                Net Income
               </div>
              </div>
              <div className="flex h-full w-1/2 flex-row items-center justify-end border-0 border-solid border-black bg-white">
               <div className="pr-5 text-[0.75rem]">
                27,563.45                                                                                           
               </div>
              </div>
             </div>
            </div>
           </div>
         </div>
         <div className="flex h-full w-1/4 flex-row items-center justify-end">
           <div className="flex h-full w-[30vh] flex-row items-start justify-start border-0 border-solid border-black bg-white pb-5 pl-5 pt-5">
            Publication date
            2014.12.25
           </div>
           <div className="flex h-full w-full flex-row items-end justify-end bg-white pb-10 pr-10">
            <button className="text-1xl rounded-lg bg-blue-300 pb-2 pl-10 pr-10 pt-2 opacity-100">Downlod PDF</button>
           </div>
         </div>         
        </div>
       </div>
    )
}
