import { useState } from "react";
import "./ProductGrid.css";
import ShopSidebar from "../shopSidebar/ShopSidebar";
import ShopCard from "../shopCard/ShopCard";
import Pagination from "../pagination/Pagination";

// --- DADOS FICTÍCIOS ---
const allProducts = [
  { id: 1, name: "Pet Carrier", price: 22.0, category: "Litter" },
  { id: 2, name: "Cat Bed", price: 15.5, category: "Toys" },
  { id: 3, name: "Cat Bowl", price: 8.0, category: "Food" },
  {
    id: 4,
    name: "Premium Cat Food",
    price: 45.0,
    category: "Food",
    brand: "Royal Canin",
  },
  { id: 5, name: "Dog Bed", price: 30.0, category: "Toys", brand: "Whiskas" },
  { id: 6, name: "Dog Leash", price: 12.0, category: "Grooming" },
  {
    id: 7,
    name: "Medium Dog Bed",
    price: 25.0,
    category: "Toys",
    brand: "Royal Canin",
  },
  {
    id: 8,
    name: "Medium Dog Bed",
    price: 25.0,
    category: "Toys",
    brand: "Whiskas",
  },
  { id: 9, name: "Cat Litter", price: 18.0, category: "Litter" },
  { id: 10, name: "Grooming Brush", price: 9.5, category: "Grooming" },
  { id: 11, name: "Squeaky Toy", price: 5.0, category: "Toys" },
  {
    id: 12,
    name: "Dry Dog Food",
    price: 50.0,
    category: "Food",
    brand: "Royal Canin",
  },
];

const categories = [
  { name: "Litter", count: 12 },
  { name: "Grooming", count: 21 },
  { name: "Toys", count: 8 },
  { name: "Food", count: 15 },
  { name: "Health", count: 10 },
  { name: "Clothing", count: 7 },
];

const brands = [
  { name: "Royal Canin", count: 7 },
  { name: "Whiskas", count: 7 },
  { name: "Purina", count: 7 },
];

const popularProducts = allProducts.slice(0, 3);

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Lógica de paginação
  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="product-grid-container">
      <ShopSidebar
        categories={categories}
        brands={brands}
        popularProducts={popularProducts}
      />
      <main className="product-list-section">
        <header className="product-list-header">
          <p>
            Showing {indexOfFirstProduct + 1}–
            {Math.min(indexOfLastProduct, allProducts.length)} of{" "}
            {allProducts.length} results
          </p>
          <div className="sort-by">
            <label htmlFor="sort">Ordenar por: </label>
            <select name="sort" id="sort">
              <option value="default">Mais Recente</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="name-asc">Name: A-Z</option>
            </select>
          </div>
        </header>
        <div className="products-grid">
          {currentProducts.map((product) => (
            <ShopCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
};

export default ProductGrid;
