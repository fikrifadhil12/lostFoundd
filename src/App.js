import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import ItemDetail from "./pages/ItemDetail";

// Data default bisa dipindahkan ke file terpisah
const DEFAULT_ITEMS = [
  {
    id: 1,
    name: "AirPods Gen 2",
    location: "masjid MSU",
    phone: "082125369984",
    finderName: "FIKRI FADHIL",
    description:
      "AirPods generasi kedua warna putih dengan case yang sedikit tergores",
    image:
      "data:image/jpeg;base64,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",
    dateFound: "15 Juni 2023",
  },
  {
    id: 2,
    name: "Kunci motor Beat",
    location: "parkiran gedung 4",
    phone: "082125369984",
    finderName: "FIKRI FADHIL",
    description: "Kunci motor Honda Beat warna hitam dengan gantungan karakter",
    image:
      "https://images.unsplash.com/photo-1575908539614-ff89490f4a78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtleXxlbnwwfHwwfHx8MA%3D%3D",
    dateFound: "14 Juni 2023",
  },
  {
    id: 3,
    name: "Dompet Kulit Coklat",
    location: "kantin pusat",
    phone: "081234567890",
    finderName: "ANDA RAHARJO",
    description:
      "Dompet kulit asli warna coklat dengan beberapa kartu di dalamnya",
    image:
      "https://www.russ.co.id/cdn/shop/files/ginee_20231115114106953_4334064915_800x.png?v=1739795038",
    dateFound: "13 Juni 2023",
  },
];

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("lostFoundItems");
    return saved ? JSON.parse(saved) : DEFAULT_ITEMS;
  });

  useEffect(() => {
    localStorage.setItem("lostFoundItems", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (newItem) => {
    setItems([{ ...newItem, id: Date.now() }, ...items]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search items={items} />} />
          <Route
            path="/upload"
            element={<Upload onAddItem={handleAddItem} />}
          />
          <Route path="/item/:id" element={<ItemDetail items={items} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
