import { Product } from './Product';

type ProductGridprops = {
  loadCart: ()=> Promise<void>;
  products: {
    id: string;
    image: string;
    name: string;
    rating: {
      stars: number
      count: number;
    };
    priceCents: number;
    keywords: string[];
  }[];
   
}
export function ProductsGrid({ products, loadCart }: ProductGridprops) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} loadCart={loadCart} />
        );
      })}
    </div>
  );
}