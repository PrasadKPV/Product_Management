import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import ProductListItem from '../components/ProductListItem';
import CustomSelect from '../components/CustomSelect';
import dbConnect from '../lib/dbConnect';
 import Product from '../lib/Product';

const categoryImages = {
  electronics: [
    '/images/electronics/elec1.jpeg',
    '/images/electronics/elec2.jpeg',
    '/images/electronics/elec3.jpeg',
    '/images/electronics/elec4.jpeg',
    '/images/electronics/elec5.jpeg',
    '/images/electronics/elec6.jpeg'
  ],
  grocery: [
    '/images/grocery/img1.jpeg',
    '/images/grocery/img2.jpeg',
    '/images/grocery/img3.jpeg',
    '/images/grocery/img4.jpeg',
    '/images/grocery/img5.jpeg',
    '/images/grocery/img6.jpeg',
    '/images/grocery/img7.jpeg',
    '/images/grocery/img8.jpeg',
    '/images/grocery/img9.jpeg',
    '/images/grocery/img10.jpeg',
    '/images/grocery/img11.jpeg',
    '/images/grocery/img12.jpeg',
    '/images/grocery/img13.jpeg',

  ],
  footwear: [
    '/images/footwear/foot1.jpeg',
    '/images/footwear/foot2.jpeg',
    '/images/footwear/foot3.jpeg',
    '/images/footwear/foot4.jpeg',
    '/images/footwear/foot5.jpeg',
    '/images/footwear/foot6.jpeg'
  ],
};

const fallbackImages = [
  '/images/grocery/img1.jpeg',
  '/images/grocery/img2.jpeg',
  '/images/grocery/img3.jpeg',
  '/images/grocery/img4.jpeg',
  '/images/grocery/img5.jpeg',
  '/images/grocery/img6.jpeg',
  '/images/grocery/img7.jpeg',
  '/images/grocery/img8.jpeg',
  '/images/grocery/img9.jpeg',
  '/images/grocery/img10.jpeg',
  '/images/grocery/img11.jpeg',
  '/images/grocery/img12.jpeg',
  '/images/grocery/img13.jpeg',
];

export default function ProductList({ initialProducts, categoryOptions }) {
  const [allProducts, setAllProducts] = useState(initialProducts);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [category, setCategory] = useState("");
  const router = useRouter();

  const sortOptions = [
    { value: '', label: 'Sort by price' },
    { value: 'asc', label: 'Low to High' },
    { value: 'desc', label: 'High to Low' },
  ];
  
  const imageMap = useMemo(() => {
    const imageCounters = { electronics: 0, grocery: 0, footwear: 0, fallback: 0 };
    const newImageMap = {};
    allProducts.forEach(p => {
      const lowerCategory = p.category?.toLowerCase();
      const imageList = categoryImages[lowerCategory];
      if (imageList && imageList.length > 0) {
        const index = imageCounters[lowerCategory] % imageList.length;
        newImageMap[p._id] = imageList[index];
        imageCounters[lowerCategory]++;
      } else {
        const index = imageCounters.fallback % fallbackImages.length;
        newImageMap[p._id] = fallbackImages[index];
        imageCounters.fallback++;
      }
    });
    return newImageMap;
  }, [allProducts]);

  useEffect(() => {
    let filteredProducts = [...allProducts];
    if (search) {
      filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    if (sort === 'asc') filteredProducts.sort((a, b) => a.price - b.price);
    if (sort === 'desc') filteredProducts.sort((a, b) => b.price - a.price);
    setProducts(filteredProducts);
  }, [search, sort, category, allProducts]);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/products/${id}`, { method: 'DELETE' });
      setAllProducts(prev => prev.filter(p => p._id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <div>
      <div className="toolbar">
        <div className="search-bar">
          <Image src="/icons/search.png" alt="Search" width={16} height={16} className="search-icon"/>
          <input
            className="search-input"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="toolbar-actions">
          <CustomSelect
            options={categoryOptions}
            value={category}
            onChange={setCategory}
          />
          <CustomSelect
            options={sortOptions}
            value={sort}
            onChange={setSort}
          />
          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              title="List view"
            >
              <Image src="/icons/list.png" alt="List view" width={20} height={20} className="view-icon"/>
            </button>
            <button
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Grid view"
            >
              <Image src="/icons/grid.png" alt="Grid view" width={20} height={20} className="view-icon"/>
            </button>
          </div>
        </div>
      </div>

      {/* Render view */}
      <div
        key={viewMode}
        className={viewMode === "grid" ? "product-grid" : "product-list"}
      >
        {products.map((p, index) => {
          const image = imageMap[p._id];
          return (
            <div key={p._id} className="product-item-wrapper" style={{ animationDelay: `${index * 50}ms` }}>
              {viewMode === "grid" ? (
                <ProductCard product={p} onDelete={handleDelete} image={image} />
              ) : (
                <ProductListItem product={p} onDelete={handleDelete} image={image} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const result = await Product.find({});
  // Mongoose result is not directly serializable, so we need to convert it.
  const products = result.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();
    return product;
  });

  const uniqueCategories = [...new Set(products.map(p => p.category).filter(Boolean))];
  const categoryOptions = [
    { value: '', label: 'All Categories' },
    ...uniqueCategories.map(c => ({ value: c, label: c }))
  ];

  // Shuffle products on the server
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }

  return {
    props: { initialProducts: products, categoryOptions },
  };
}
