"use client";
import Sibar from "./components/siderbars/Sibar";
import React from "react";


function page() {
  return (
    <div>
      <Sibar/>
    </div>
  );
}

export default page;

// "use client";

// import { useState,useEffect } from "react";
// import { Button } from 'antd';

// export default function Home() {

//   const [name, setName] = useState("");
//   const [data, setData] = useState(null);

//   const changeName = () => {
//     console.log("changeName");
//     setName("บอส");
//   }

//   useEffect(() => {
//     console.log("useEffect")
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//       const response = await fetch("/api");
//       const data = await response.json();
//       console.log(data);
//       setData(data);
//   }
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="relative flex w-100 flex-col rounded-xl bg-blue-100 bg-clip-border text-gray-700 shadow-md">
//         <div className="relative mx-4 -mt-6 h-50 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
//           <img
//             className="object-cover w-full h-full"
//             src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-1/375046875_1475456826582961_6089366772079554131_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=85axAHKdqioQ7kNvwG_HRTa&_nc_oc=AdlKE--2xHcu5f6DHEJcfTxdUitG5FS8-RvEhGwu3eRNx6P2BCNZuZZnNRVXETVofUI&_nc_zt=24&_nc_ht=scontent.fbkk7-2.fna&_nc_gid=qcFJe7XFyOHHPQo8eWWymg&oh=00_AfK1IojtsTsBAEN2DVdWwjh1BpDzy4O0KwuDTZMdVCWlrA&oe=6839F08A"
//             alt="Boss Image"
//             width={300}
//             height={300}
//           />
//         </div>
//         <div className="p-6">
//           <div className=" flex justify-between">
//             <h5 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//               {data ? data.name : "Loading..."}
//             </h5>
//             <p className=" font-sans text-base font-normal leading-relaxed text-blue-gray-500 antialiased">
//               {name}
//             </p>
//           </div>
//           <p>ตำแหน่ง : {data?.trainees}</p>
//           <p>สถานศึกษา : {data?.university}</p>
//           <p>คณะ : {data?.faculty}</p>
//           <p>สาขา : {data?.major}</p>
//           <p>รหัสนักศึกษา : {data?.studentId}</p>
//           <p>อายุ : {data?.age} ปี</p>
//           <p>วันเดือนปีเกิด : {data?.birthday}</p>
//           <h3>ช่องทางติดต่อ</h3>
//           <p>อีเมล : {data?.contact.email}</p>
//           <p>เบอร์โทรศัพท์ : {data?.contact.phone}</p>
//         </div>

//         <div className="flex justify-center p-6 pt-0">
//           <Button type="primary" onClick={changeName}>ชื่อเล่น</Button>
//         </div>
//       </div>
//     </div>
//   );
// }
