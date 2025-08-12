import { useState } from 'react';
import { useRouter } from 'next/router';
import dbConnect from '../../../lib/dbConnect';
import Image from 'next/image';
import Product from '../../../lib/Product';

export default function EditProduct({ product }) {
  const [form, setForm] = useState(product);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`/api/products/${form._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to update product');
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
        <Image src="/images/form.jpeg" alt="Product editing" fill style={{ objectFit: 'cover' }} priority />
        <div className="form-image-overlay-text">
          <span className="overlay-text-small">you can easily</span>
          <h2 className="overlay-text-large">Edit your product here</h2>
        </div>
      </div>
      <div className="form-container">
        <h2>Edit Product</h2>
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
            {loading ? 'Updating...' : 'Update Product'}
          </button>
        </form>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();

  try {
    const product = await Product.findById(params.id).lean();

    if (!product) {
      return { notFound: true };
    }

    // Convert ObjectId to string for serialization
    product._id = product._id.toString();

    return { props: { product: JSON.parse(JSON.stringify(product)) } };
  } catch (error) {
    return { notFound: true };
  }
}