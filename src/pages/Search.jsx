import { useState, useEffect } from "react";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Search = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Buat query dengan pengurutan berdasarkan tanggal terbaru
        const q = query(collection(db, "items"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const itemsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching items: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Memuat data...</p>
      </div>
    );
  }

  return (
    <div className="pb-16 min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Temukan Barang</h2>

        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Belum ada barang yang ditemukan</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
