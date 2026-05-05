import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(items);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {products.map((item) => (
        <div key={item.id} className="border p-4 rounded">
          <img src={item.image} className="h-40 w-full object-cover" />
          <h2 className="font-bold mt-2">{item.title}</h2>
          <a href={item.link} className="text-blue-600">
            View Product
          </a>
        </div>
      ))}
    </div>
  );
}