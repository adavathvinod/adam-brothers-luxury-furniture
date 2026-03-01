import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import AnimatedSection from "@/components/AnimatedSection";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <main className="pt-32 section-padding text-center">
        <div className="container-main">
          <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-2">Your Basket is Empty</h1>
          <p className="text-muted-foreground mb-6">Browse our collection and find something you love.</p>
          <Button asChild variant="accent"><Link to="/shop">Continue Shopping</Link></Button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <h1 className="text-3xl font-bold mb-8">Your Basket</h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-4">
              {items.map(({ product, quantity }) => (
                <AnimatedSection key={product.id} className="flex gap-4 bg-card rounded-lg border border-border p-4">
                  <Link to={`/product/${product.slug}`} className="w-24 h-24 rounded overflow-hidden shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${product.slug}`} className="font-semibold text-sm hover:text-accent transition-colors">{product.name}</Link>
                    <p className="text-sm text-muted-foreground mt-1">£{product.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-border rounded">
                        <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1 hover:bg-secondary"><Minus className="w-3 h-3" /></button>
                        <span className="w-8 text-center text-sm">{quantity}</span>
                        <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1 hover:bg-secondary"><Plus className="w-3 h-3" /></button>
                      </div>
                      <button onClick={() => removeFromCart(product.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-bold text-sm whitespace-nowrap">£{(product.price * quantity).toLocaleString()}</p>
                </AnimatedSection>
              ))}
              <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-destructive self-start mt-2">
                Clear basket
              </button>
            </div>

            <AnimatedSection delay={0.2} className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>£{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>{totalPrice >= 500 ? "Free" : "£49"}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-bold text-lg mb-6">
                  <span>Total</span>
                  <span>£{(totalPrice + (totalPrice >= 500 ? 0 : 49)).toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-4">VAT included. Free delivery on orders over £500.</p>
                <Button variant="accent" size="lg" className="w-full">Proceed to Checkout</Button>
                <Button asChild variant="ghost" size="sm" className="w-full mt-2">
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
