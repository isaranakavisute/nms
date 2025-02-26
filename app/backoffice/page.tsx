export default function Page(){
    return (
    //  <div>
    //     <h1>Back Office</h1>
    //  </div>

   <div className="flex h-3/4 w-3/4 flex-col items-center justify-center bg-white">
    <div className="pb-10 text-4xl">NMS Template</div>
    <div className="h-2/4 w-3/4 rounded-2xl bg-white">
     <div className="text-2xl">Username</div>
     <input type="text" className="form-control" />
     <div className="text-2xl">Password</div>
     <input type="text" className="form-control" />
     <div className="flex items-center justify-center pt-10"><button className="btn">Login</button></div>
    </div>
   </div>

    );
}
