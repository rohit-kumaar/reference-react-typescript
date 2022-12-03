import { useState } from "react";
import Product from "./components/Product";

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: "Iphone",
      price: 5000,
    },
    {
      id: 2,
      name: "MacBook",
      price: 10000,
    },
  ]);

  function handleAddToCart(id: number) {
    console.log("Clicked", id);
  }

  return (
    <>
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          handleAddToCartClick={handleAddToCart}
        />
      ))}
    </>
  );
}

export default App;
