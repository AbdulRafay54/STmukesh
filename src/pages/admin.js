// import { useState } from "react";
// import { db } from "../Firebase/firebase";
// import { collection, addDoc } from "firebase/firestore";

// export default function Admin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(false);

//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
//   const [link, setLink] = useState("");
//   const [category, setCategory] = useState("men");

//   const ADMIN_EMAIL = "admin@gmail.com";
//   const ADMIN_PASSWORD = "123456";

//   const handleLogin = () => {
//     if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
//       setIsLogin(true);
//     } else {
//       alert("Wrong Email or Password");
//     }
//   };

//   const handleAddProduct = async () => {
//     if (!title || !image || !link) {
//       alert("All fields required");
//       return;
//     }

//     try {
//       await addDoc(collection(db, "products"), {
//         title,
//         image,
//         link,
//         category,
//         createdAt: new Date(),
//       });

//       alert("Product Added Successfully 🎉");

//       setTitle("");
//       setImage("");
//       setLink("");
//       setCategory("men");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

//       {!isLogin ? (

//         // 🔐 LOGIN UI
//         <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">

//           <h1 className="text-2xl font-bold mb-6 text-center">
//             Admin Login
//           </h1>

//           <input
//             className="border p-3 w-full mb-3 rounded"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             className="border p-3 w-full mb-3 rounded"
//             placeholder="Password"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             onClick={handleLogin}
//             className="bg-black text-white w-full py-3 rounded hover:bg-gray-800 transition"
//           >
//             Login
//           </button>

//         </div>

//       ) : (

//         // 📊 DASHBOARD
//         <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-6">

//           <h1 className="text-2xl font-bold mb-2">
//             Admin Dashboard
//           </h1>

//           <p className="mb-6 text-gray-600">
//             Add products to different categories
//           </p>

//           <div className="grid gap-3">

//             <input
//               className="border p-3 rounded"
//               placeholder="Product Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />

//             <input
//               className="border p-3 rounded"
//               placeholder="Image URL"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//             />

//             <input
//               className="border p-3 rounded"
//               placeholder="Amazon / Product Link"
//               value={link}
//               onChange={(e) => setLink(e.target.value)}
//             />

//             <select
//               className="border p-3 rounded"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="men">Men</option>
//               <option value="women">Women</option>
//               <option value="beauty">Beauty</option>
//             </select>

//             <button
//               onClick={handleAddProduct}
//               className="bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
//             >
//               Add Product
//             </button>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// }