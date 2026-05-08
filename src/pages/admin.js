import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase.js";
import { collection, addDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

export default function Admin() {
  // LOGIN
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const ADMIN_EMAIL = "stmukeshhandwork@gmail.com";
  const ADMIN_PASSWORD = "shahmir@111";

  // PRODUCT STATES
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState("mukesh-royal");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // LOGIN
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Email or Password");
    }
  };

  // GET PRODUCTS
  useEffect(() => {
    if (!isLoggedIn) return;

    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, [isLoggedIn]);

  // IMAGE UPLOAD
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dka4p12hf/image/upload",
        { method: "POST", body: formData }
      );

      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.log("Upload Error:", error);
      return "";
    }
  };

  // ADD PRODUCT
  const addProduct = async (e) => {
    e.preventDefault();

    if (!title || !description || files.length === 0) {
      alert("Fill all fields");
      return;
    }

    setLoading(true);

    try {
      const uploadedImages = [];

      for (let file of files) {
        const url = await uploadImage(file);
        if (url) uploadedImages.push(url);
      }

      await addDoc(collection(db, "products"), {
        title,
        description,
        category,
        images: uploadedImages,
        createdAt: Date.now(),
      });

      // RESET FORM
      setTitle("");
      setDescription("");
      setFiles([]);
      setCategory("mukesh-royal");

      alert("Product Added ✅");
    } catch (error) {
      console.log(error);
      alert("Error Adding Product");
    }

    setLoading(false);
  };

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      alert("Deleted ✅");
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  // LOGIN SCREEN
  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-xl shadow w-80"
        >
          <h1 className="text-xl font-bold mb-4 text-center">Admin Login</h1>

          <input
            className="border w-full p-2 mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="border w-full p-2 mb-3"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-black text-white w-full py-2">
            Login
          </button>
        </form>
      </div>
    );
  }

  // DASHBOARD
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-bold">Admin Panel</h1>

        <button
          onClick={() => setIsLoggedIn(false)}
          className="bg-red-500 text-white px-3 py-1"
        >
          Logout
        </button>
      </div>

      {/* ADD PRODUCT */}
      <form onSubmit={addProduct} className="bg-white p-4 mb-6">
        <input
          className="border w-full p-2 mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border w-full p-2 mb-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="border w-full p-2 mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="mukesh-royal">Mukesh Royal</option>
          <option value="luxe-veils">Luxe Veils</option>
          <option value="resham">Resham</option>
          <option value="featured">Featured</option>
        </select>

        <input
          type="file"
          multiple
          className="border w-full p-2 mb-2"
          onChange={(e) => setFiles([...e.target.files])}
        />

        <button className="bg-black text-white px-4 py-2">
          {loading ? "Uploading..." : "Add Product"}
        </button>
      </form>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-3">
            <img src={p.images?.[0]} className="h-40 w-full object-cover" />
            <h2 className="font-bold mt-2">{p.title}</h2>
            <p className="text-sm">{p.description}</p>

            <button
              onClick={() => deleteProduct(p.id)}
              className="bg-red-500 text-white px-3 py-1 mt-2"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}