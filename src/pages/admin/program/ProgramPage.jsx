// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { programGetList } from "../../../api/adminApi";

// const ProgramPage = () => {
//   const [programList, setProgramList] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProgramList = async () => {
//       try {
//         const res = await programGetList();
//         setProgramList(res);
//       } catch (error) {
//         console.error("프로그램 목록을 불러올 수 없습니다:", error);
//       }
//     };
//     fetchProgramList();
//   }, []);

//   return (
//     <div className="container mx-auto max-w-5xl p-4 md:p-8">
//       <h1 className="text-3xl font-bold mb-6 pb-4 border-b-2 border-gray-800">
//         프로그램 정보 수정
//       </h1>
//       <div className="text-sm mb-2 text-gray-600">
//         총 <strong>{programList.length}</strong>건
//       </div>
//       <table className="w-full text-center border-t-2 border-gray-700">
//         <thead className="bg-gray-50 border-b">
//           <tr>
//             <th className="p-3 w-20">번호</th>
//             <th className="p-3 text-center">프로그램명</th>
//           </tr>
//         </thead>
//         <tbody>
//           {programList.length === 0 ? (
//             <tr>
//               <td colSpan="2" className="p-8 text-center text-gray-500">
//                 등록된 프로그램이 없습니다.
//               </td>
//             </tr>
//           ) : (
//             programList.map((item) => (
//               <tr
//                 key={item.pno}
//                 onClick={() => navigate(`/admin/program/${item.pno}`)}
//                 className="border-b hover:bg-gray-50 cursor-pointer transition"
//               >
//                 <td className="p-3 text-sm text-gray-600">{item.pno}</td>
//                 <td className="p-3 text-center text-gray-800">
//                   {item.programName || "이름 없음"}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProgramPage;
