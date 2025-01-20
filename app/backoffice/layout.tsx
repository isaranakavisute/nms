import Sidebar from "./sidebar";

export default function BackOfficeLayout({ children }: {
    children: React.ReactNode
}) {
 return (
//   <div className="flex">
//    <Sidebar />
//    <div className="w-full">
//     <div className="bg-teal-400 p-5 text-black">Title</div>
//     <div className="p-5">{children}</div>
//    </div>
//    <div className="h-screen w-[300px] bg-gray-500 p-5">
//     <div>Right Box</div>
//    </div>
//    <div className="h-screen w-[300px] bg-green-200 p-5">
//     <div>Right Box</div>
//    </div>
//   </div>

<div className="flex flex-col">


 <div className="flex h-[5vh] w-full items-center justify-center bg-green-300">Header</div>


<div className="h-[90vh] w-full bg-teal-400">
  <div className="flex">
   <Sidebar /> 
   <div className="flex h-[90vh] w-full items-center justify-center">
    <div className="flex h-[90vh] w-full items-center justify-center">{children}</div>
   </div>
   <div className="flex w-1/4 items-center justify-center bg-gray-500 p-5">
    <div>Right Box</div>
   </div>
 </div> 
</div>    


 <div className="flex h-[5vh] w-full items-center justify-center bg-yellow-300">Bottom</div>



</div>

 );
}

