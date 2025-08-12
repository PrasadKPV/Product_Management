import Link  from 'next/link';
import Image from 'next/image';
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
          <Image src={image} alt={product.name} className="product-image" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }}/>
        </div>

        <div className="category-pill-overlap">{product.category}</div>

        <div className="product-content">
          <h3>{product.name}</h3>
          <p className="card-description">{product.description}</p>
          <p className="card-price">₹ {formatPrice(product.price)}</p>

          <div className="card-actions">
            <Link href={`/products/${product._id}/edit`} className="edit-btn">
            <Image src="/icons/edit.png" alt="edit" width={16} height={16} className="edit-icon"/>
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
