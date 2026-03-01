import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";
import { motion } from "framer-motion";

interface Props {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: Props) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
    >
      <Link to={`/product/${product.slug}`} className="block overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover product-image-hover"
          loading="lazy"
        />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-display text-sm font-semibold leading-tight mb-1 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-foreground">£{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">£{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <Button
          variant="accent"
          size="sm"
          className="w-full gap-2"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Basket
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
