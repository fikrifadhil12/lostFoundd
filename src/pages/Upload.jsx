import Header from "../components/Header";
import UploadForm from "../components/UploadForm";

const Upload = ({ onAddItem }) => {
  return (
    <div>
      <Header />
      <UploadForm onItemAdded={onAddItem} />
    </div>
  );
};

export default Upload;
