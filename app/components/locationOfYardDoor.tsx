// import { useState, type FormEventHandler } from "react";
// import type {
//   LandDirectionType,
//   LocationDoorDataType,
//   LocationDoorFieldsType,
// } from "~/types/locationOfYardDoor.types";

// export default function LocationOfYardDoor() {
//   const [yardLength, setYardLength] = useState(0);
//   const [landDirection, setLandDirection] =
//     useState<LandDirectionType>("utara");
//   const [data, setData] = useState<LocationDoorDataType | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();

//     const fields: LocationDoorFieldsType = { yardLength, landDirection };

//     setLoading(true);

//     const response = await fetch(
//       "https://bali-building-simulator-api-7n41.vercel.app/api/locationDoor",
//       {
//         method: "POST",
//         body: JSON.stringify(fields),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     const result = await response.json();

//     if (response.ok) {
//       setData(result);
//     }

//     setLoading(false);
//   };

//   return (
//     <>
//       <div className="bg-white shadow-lg rounded p-6 max-w-4xl mx-auto">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="panjang" className="block text-primary font-medium">
//               Yard Length (m)
//             </label>
//             <input
//               type="text"
//               id="panjang"
//               pattern="^\d*(\.\d{0,5})?$"
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//               placeholder="Enter yard length"
//               onChange={(e) => setYardLength(Number(e.target.value))}
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label htmlFor="arah" className="block text-primary font-medium">
//               Land Direction
//             </label>
//             <select
//               className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//               id="arah"
//               onChange={(e) =>
//                 setLandDirection(e.target.value as LandDirectionType)
//               }
//             >
//               <option value="utara">North</option>
//               <option value="timur">East</option>
//               <option value="selatan">South</option>
//               <option value="barat">West</option>
//             </select>
//           </div>

//           <button
//             className={`w-full inline-flex items-center justify-center bg-primary text-white text-[14px] md:text-[16px] py-[8px] md:py-[10px] rounded-[5px] mt-[20px] md:mt-[30px] ${
//               loading && "bg-primary/80 cursor-not-allowed"
//             }`}
//             disabled={loading}
//           >
//             <svg
//               className={`w-5 h-5 mr-3 -ml-1 text-white animate-spin ${
//                 !loading && "hidden"
//               }`}
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 stroke-width="4"
//               ></circle>
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               ></path>
//             </svg>
//             Process
//           </button>
//           {data && (
//             <div className="md:col-span-2 lg:grid lg:grid-cols-5 gap-2 mt-4">
//               <img
//                 className="col-span-3"
//                 src={`data:image/png;base64,${data.bytesImg}`}
//                 alt="Letak Pintu"
//               />
//               <div className="col-span-2 bg-primary rounded-md p-4 text-white my-4 lg:my-0 text-[14px] md:text-[16px]">
//                 <p className="uppercase font-semibold">
//                   Philosophy of the Location of Each Yard Door
//                 </p>
//                 {Object.entries(data.philosophy).map(([k, v]) => (
//                   <p
//                     key={k}
//                   >{`${k}. ${v.bhsBali} = ${v.bhsIndonesia} (${v.locationValue})`}</p>
//                 ))}
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </>
//   );
// }
