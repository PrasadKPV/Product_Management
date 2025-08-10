import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5000/api/products/${id}`).then(res => {
      setForm(res.data);
      setLoading(false);
    }).catch(err => {
      console.error("Failed to fetch product", err);
      setLoading(false);
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/products/${id}`, form);
    navigate('/');
  };

  if (loading) {
    return <div className="form-container"><h2>Loading...</h2></div>;
  }

  return (
    <div className="form-page-layout">
      <div className="form-image-section">
        <img src="/images/form.jpeg" alt="Product editing" />
        <div className="form-image-overlay-text">
          <span className="overlay-text-small">you can easily</span>
          <h2 className="overlay-text-large">Edit your product here</h2>
        </div>
      </div>
      <div className="form-container">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit} className="product-form" autoComplete="off">
          <div className="form-group">
            <label>Product Name</label>
            <input name="name" value={form.name || ''} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input name="price" type="number" value={form.price || ''} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input name="category" value={form.category || ''} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={form.description || ''} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="submit-btn">Update Product</button>
        </form>
      </div>
    </div>
  );
}
