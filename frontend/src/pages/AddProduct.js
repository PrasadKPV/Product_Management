import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return setError('Name and Price are required');

    await axios.post('http://localhost:5000/api/products', form);
    navigate('/');
  };

  return (
    <div className="form-page-layout">
      <div className="form-image-section">
        <img src="/images/form.jpeg" alt="Product creation" />
        <div className="form-image-overlay-text">
          <span className="overlay-text-small">you can easily</span>
          <h2 className="overlay-text-large">Add your product here</h2>
        </div>
      </div>
      <div className="form-container">
        <h2>Add New Product</h2>
        {error && <p className="form-error">{error}</p>}
        <form onSubmit={handleSubmit} className="product-form" autoComplete="off">
          <div className="form-group">
            <label>Product Name</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input name="category" value={form.category} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={form.description} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className="submit-btn">Add Product</button>
        </form>
      </div>
    </div>
  );
}
