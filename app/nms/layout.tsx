import Sidebar from "./sidebar";

export default function BackOfficeLayout({ children }: {
    children: React.ReactNode
}) {
 return (

<div className="flex flex-col">


 <div className="flex h-[5vh] w-full items-center justify-center bg-blue-300 text-2xl">Pay Slip Sharing Tool</div>
 <div className="flex h-[15vh] w-full flex-row border-solid border-2 justify-between">
  <div>1</div>
  <div>1</div>
 </div>

 <div className="h-[90vh] w-full bg-white">
  <div className="flex"> 
   <div className="flex h-[90vh] w-full items-center justify-center">
    <div className="flex h-[90vh] w-full items-center justify-center">{children}</div>
   </div>
  </div> 
 </div>    






</div>

 );
}

