import { IProduct } from "../App";

interface ProductProps {
  product: IProduct;
  handleAddToCartClick(id: number): void;
}

function Product({ product, handleAddToCartClick }: ProductProps) {
  return (
    <div>
      <h1>{product.name}</h1>
      <button onClick={() => handleAddToCartClick(product.id)}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
