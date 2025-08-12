import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function AddProduct() {
  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.price) {
      setError('Name and Price are required');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to add product');
      }

      router.push('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page-layout">
      <div className="form-image-section">
        <Image src="/images/form.jpeg" alt="Product creation" fill style={{ objectFit: 'cover' }} priority />
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
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              name="category"
              id="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows="3"
              value={form.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
}