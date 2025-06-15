const Header = () => {
  return (
    <div className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome to</h1>
          <h2 className="text-3xl font-extrabold">Lost & Found</h2>
        </div>
        <div className="flex space-x-2">
          <button className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm">
            S+
          </button>
          <button className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm">
            Found
          </button>
        </div>
      </div>
      <p className="mt-2">Temukan Barang Kamu dan Temukan Barang</p>
    </div>
  );
};

export default Header;
