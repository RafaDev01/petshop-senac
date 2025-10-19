import "./ShopSidebar.css";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"; // Importa o CSS base da biblioteca

const ShopSidebar = ({ categories, brands, popularProducts }) => {
  // Define o estado para guardar o intervalo de preço.
  // Os valores iniciais são os mesmos do print: [9, 399]
  const [priceRange, setPriceRange] = useState([10, 399]);

  const handleApplyClick = () => {
    // Em um app real, aqui você chamaria a função para filtrar os produtos com base no `priceRange`.
    console.log(
      `Filtro de preço aplicado: $${priceRange[0]} - $${priceRange[1]}`
    );
  };

  return (
    <aside className="sidebar">
      <div className="filter-group">
        <h4>Filter by categories</h4>
        <ul>
          {categories.map((cat) => (
            <li key={cat.name} className="checkbox-item">
              <input type="checkbox" id={cat} />
              <span>{cat.name}</span>
              <span className="category-count">{cat.count}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-group">
        <div className="price-filter-container">
          <h4>Filter by Price</h4>

          {/* Componente Slider da biblioteca */}
          <Slider
            range // A propriedade 'range' diz à biblioteca que queremos dois controles
            min={0} // Valor mínimo possível do slider
            max={500} // Valor máximo possível do slider
            defaultValue={priceRange} // Define os valores iniciais
            onChange={(newRange) => setPriceRange(newRange)} // Atualiza o estado quando o usuário move os controles
          />

          <div className="price-info">
            <span>
              Price: ${priceRange[0]} – ${priceRange[1]}
            </span>
            <button onClick={handleApplyClick}>Apply</button>
          </div>
        </div>
      </div>
      <div className="filter-group">
        <h4>Filter by brands</h4>
        <ul>
          {brands.map((brand, index) => (
            <li key={index} className="checkbox-item">
              <input type="checkbox" id={brand.name} />
              <label htmlFor={brand.name}>{brand.name}</label>
              <span className="category-count">{brand.count}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-group">
        <h4>Popular products</h4>
        {popularProducts.map((product) => (
          <div key={product.id} className="popular-product">
            <div className="popular-product-image-placeholder"></div>
            <div className="popular-product-info">
              <span>{product.name}</span>
              <strong>${product.price.toFixed(2)}</strong>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default ShopSidebar;
