import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingBag, Minus, Plus, ChevronLeft, Truck, RotateCcw, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { getProductBySlug, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug || "");
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <main className="pt-32 text-center section-padding">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button asChild variant="outline"><Link to="/shop">Back to Shop</Link></Button>
      </main>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Shop
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* IMAGES */}
            <AnimatedSection>
              <div className="aspect-square overflow-hidden rounded-lg bg-secondary mb-3">
                <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 rounded border-2 overflow-hidden ${i === selectedImage ? "border-accent" : "border-border"}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </AnimatedSection>

            {/* INFO */}
            <AnimatedSection delay={0.2}>
              <p className="text-accent uppercase tracking-widest text-xs font-semibold mb-2">
                {product.category.replace("-", " ")}
              </p>
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{product.name}</h1>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-bold">£{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">£{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

              <div className="flex flex-col gap-2 mb-6">
                {product.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center border border-border rounded-md">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 hover:bg-secondary transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center font-medium">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-2 hover:bg-secondary transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
                <Button
                  variant="accent"
                  size="lg"
                  className="flex-1 gap-2"
                  onClick={() => addToCart(product, qty)}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Basket
                </Button>
              </div>

              <div className="flex flex-col gap-3 text-sm text-muted-foreground border-t border-border pt-6">
                <div className="flex items-center gap-2"><Truck className="w-4 h-4" /> Free UK delivery on orders over £500</div>
                <div className="flex items-center gap-2"><RotateCcw className="w-4 h-4" /> 14-day returns policy</div>
              </div>
            </AnimatedSection>
          </div>

          {/* RELATED */}
          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
