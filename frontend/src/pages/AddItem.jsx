import React, { useState } from "react";
import axios from "axios";

const AddItem = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    size: "",
    condition: "",
    tags: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    if (image) data.append("image", image);

    try {
      const res = await axios.post("http://localhost:5000/api/items", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage("Item added successfully!");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Error adding item");
    }
  };

  return (
    <div className="p-8 bg-[#f5efe5] min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Add New Item</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto bg-white p-6 rounded shadow">
        <input name="title" type="text" placeholder="Title" onChange={handleChange} className="p-2 border rounded" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="p-2 border rounded"></textarea>
        <input name="category" type="text" placeholder="Category (e.g., Clothing)" onChange={handleChange} className="p-2 border rounded" />
        <input name="type" type="text" placeholder="Type (e.g., Men)" onChange={handleChange} className="p-2 border rounded" />
        <input name="size" type="text" placeholder="Size (e.g., M)" onChange={handleChange} className="p-2 border rounded" />
        <input name="condition" type="text" placeholder="Condition (e.g., New)" onChange={handleChange} className="p-2 border rounded" />
        <input name="tags" type="text" placeholder="Tags (comma separated)" onChange={handleChange} className="p-2 border rounded" />
        <input type="file" accept="image/*" onChange={handleFileChange} className="p-2" />

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Submit Item
        </button>

        {message && <p className="text-center text-sm text-green-700 mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default AddItem;
