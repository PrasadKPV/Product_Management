import { Link } from 'react-router-dom';
import { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

const formatPrice = (price) => {
  if (price === undefined || price === null) return '';
  return price.toLocaleString('en-IN');
};

const ProductListItem = ({ product, onDelete, image }) => {
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
      <div className="product-list-item">
        <img src={image} className="list-image" alt="product" />

        <div className="list-text name">{product.name}</div>
        <div className="list-text category">{product.category}</div>
        <div className="list-text description">{product.description}</div>
        <div className="list-text price">₹ {formatPrice(product.price)}</div>

        <div className="product-actions">
          <Link to={`/edit/${product._id}`} className="edit-btn">
            <img src="/icons/edit.png" alt="edit" className="edit-icon" />
            Edit
          </Link>
          <button onClick={handleDeleteClick} className="delete-btn">
            <img src="/icons/bin.png" alt="delete" className="delete-icon" />
            Delete</button>
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

export default ProductListItem;
