import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

// Asegúrate de que este array tenga al menos 3 categorías y 6 plantas
const plantsArray = [
  {
    category: "Aromatic Plants",
    plants: [
      { name: "Lavender", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Calming fragrance", cost: "$12.00" },
      { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b", description: "Sweet scent", cost: "$14.00" },
      { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2015/09/09/17/38/basil-932079_1280.jpg", description: "Herbal aroma", cost: "$10.00" },
    ]
  },
  {
    category: "Medicinal Plants",
    plants: [
      { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", description: "Soothing gel", cost: "$15.00" },
      { name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg", description: "Digestive aid", cost: "$8.00" },
      { name: "Chamomile", image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg", description: "Relaxing tea", cost: "$11.00" },
    ]
  },
  {
    category: "Succulents",
    plants: [
      { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Air purifier", cost: "$18.00" },
      { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg", description: "Easy care", cost: "$13.00" },
      { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361", description: "Low light", cost: "$20.00" },
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const isAdded = (plantName) => addedToCart[plantName] || cartItems.some(item => item.name === plantName);

  return (
    <div className="product-list-page">
      {plantsArray.map((category, idx) => (
        <div key={idx} className="category-section">
          <h2>{category.category}</h2>
          <div className="product-grid">
            {category.plants.map((plant, plantIdx) => (
              <div key={plantIdx} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <h3>{plant.name}</h3>
                <p className="description">{plant.description}</p>
                <p className="price">{plant.cost}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isAdded(plant.name)}
                >
                  {isAdded(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;