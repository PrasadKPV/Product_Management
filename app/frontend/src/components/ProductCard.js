import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

const formatPrice = (price) => {
  if (price === undefined || price === null) return '';
  return price.toLocaleString('en-IN');
};

const ProductCard = ({ product, onDelete, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(product._id);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="product-card-advanced">
        <button onClick={handleDeleteClick} className="delete-btn-corner" title="Delete product">
          &times;
        </button>
        <div className="image-wrapper">
          <img src={image} alt="product" className="product-image" />
        </div>

        <div className="category-pill-overlap">{product.category}</div>

        <div className="product-content">
          <h3>{product.name}</h3>
          <p className="card-description">{product.description}</p>
          <p className="card-price">₹ {formatPrice(product.price)}</p>

          <div className="card-actions">
            <Link to={`/edit/${product._id}`} className="edit-btn">
            <img src="/icons/edit.png" alt="edit" className="edit-icon" />
            Edit
            </Link>
          </div>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        message={`Are you sure you want to delete "${product.name}"?`}
      />
    </>
  );
};

export default ProductCard;
