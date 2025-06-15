import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const UploadForm = ({ onItemAdded }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    finderName: "",
    imageFile: null,
    previewImg: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        imageFile: file,
        previewImg: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload gambar ke Firebase Storage
      let imageUrl = "";
      if (formData.imageFile) {
        const storageRef = ref(
          storage,
          `items/${Date.now()}_${formData.imageFile.name}`
        );
        await uploadBytes(storageRef, formData.imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      // Simpan data ke Firestore
      await addDoc(collection(db, "items"), {
        name: formData.name,
        location: formData.location,
        phone: formData.phone,
        finderName: formData.finderName,
        image: imageUrl,
        dateFound: new Date().toLocaleDateString("id-ID"),
        createdAt: serverTimestamp(),
      });

      // Reset form
      setFormData({
        name: "",
        location: "",
        phone: "",
        finderName: "",
        imageFile: null,
        previewImg: "",
      });

      navigate("/search");
      if (onItemAdded) onItemAdded();
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* ... (kode JSX tetap sama) ... */}
    </div>
  );
};

export default UploadForm;
