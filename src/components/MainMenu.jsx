import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-lg"
        onClick={() => navigate("/search")}
      >
        GET STARTED
      </button>
      <div className="flex space-x-4 mt-8">
        <button
          className="bg-gray-200 px-4 py-2 rounded-lg"
          onClick={() => navigate("/search")}
        >
          Cari Barang
        </button>
        <button
          className="bg-gray-200 px-4 py-2 rounded-lg"
          onClick={() => navigate("/upload")}
        >
          Menemukan barang
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
