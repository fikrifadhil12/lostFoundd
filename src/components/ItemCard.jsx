import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      className="border rounded-lg overflow-hidden mb-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
      onClick={() => navigate(`/item/${item.id}`)}
    >
      {/* Bagian Gambar - Diperbaiki */}
      <div className="relative h-48 w-full overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="absolute h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gray-100 flex flex-col items-center justify-center text-gray-400">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm mt-2">Tidak ada gambar</span>
          </div>
        )}
      </div>

      {/* Bagian Informasi */}
      <div className="p-4">
        <h3 className="font-bold text-lg line-clamp-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-1">
          Ditemukan di: {item.location}
        </p>

        <div className="mt-3 flex justify-between items-center">
          <div>
            <p className="text-gray-700 text-sm">{item.phone}</p>
            <p className="font-semibold text-sm line-clamp-1">
              {item.finderName}
            </p>
          </div>
          <button
            className="text-blue-600 font-semibold text-sm hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-50"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/item/${item.id}`);
            }}
          >
            LIHAT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
