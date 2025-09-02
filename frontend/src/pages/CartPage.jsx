import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("cart-page");
    return () => {
      document.body.classList.remove("cart-page");
    };
  }, []);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const res = await axios.get("https://shopy-backend-gwyc.onrender.com/cart");
      if (res.data && Array.isArray(res.data.cartItems)) {
        setCartItems(res.data.cartItems);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItems([]);
    }
  };

  const increaseQuantity = async (itemId) => {
    try {
      await axios.put(`http://localhost:3000/cart/increase/${itemId}`);
      fetchCartItems();
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const decreaseQuantity = async (itemId) => {
    try {
      await axios.put(`http://localhost:3000/cart/decrease/${itemId}`);
      fetchCartItems();
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  const removeItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/cart/remove/${itemId}`);
      fetchCartItems();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.productId?.price || 0;
      return total + (price * item.quantity);
    }, 0);
  };

  const calculateSubtotal = () => {
    return calculateTotal();
  };

  const deliveryFee = calculateTotal() > 500 ? 0 : 40;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-main">
          <div className="cart-header">
            <h1>My Cart ({cartItems.length})</h1>
            <div className="cart-count">
              {cartItems.length > 0 && `${cartItems.length} item${cartItems.length > 1 ? 's' : ''}`}
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added anything to your cart yet.</p>
              <Link to="/" className="shop-btn">Continue Shopping</Link>
            </div>
          ) : (
            <>
              {cartItems.map((item) => {
                const product = item.productId || {};
                return (
                  <div key={item._id} className="cart-item">
                    <div className="cart-item-content">
                      <img
                        src={product.image || "https://via.placeholder.com/120"}
                        alt={product.title || "Product"}
                        className="product-image"
                      />

                      <div className="product-details">
                        <Link to={`/product/${product._id}`} className="product-title">
                          {product.title || "No Title"}
                        </Link>
                        <div className="product-price">
                          ₹{product.price || "N/A"}
                        </div>
                        <div className="product-size">Size: M</div>

                        <div className="quantity-controls">
                          <button
                            className="quantity-btn"
                            onClick={() => decreaseQuantity(item._id)}
                          >
                            -
                          </button>
                          <span className="quantity-display">{item.quantity}</span>
                          <button
                            className="quantity-btn"
                            onClick={() => increaseQuantity(item._id)}
                          >
                            +
                          </button>
                          <button
                            className="remove-btn"
                            onClick={() => removeItem(item._id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-sidebar">
            <div className="price-details">
              <h3>Price Details</h3>
              <div className="price-row">
                <span>Total MRP</span>
                <span>₹{calculateSubtotal()}</span>
              </div>
              <div className="price-row">
                <span>Discount on MRP</span>
                <span className="discount">-₹0</span>
              </div>
              <div className="price-row">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="price-row total">
                <span>Total Amount</span>
                <span>₹{calculateTotal() + deliveryFee}</span>
              </div>
              <button className="checkout-btn" onClick={goToCheckout}>
                Place Order
              </button>
            </div>

            <div className="delivery-info">
              <h4>Delivery Information</h4>
              <p>
                {deliveryFee === 0
                  ? "🎉 Free delivery on orders above ₹500!"
                  : "Add ₹" + (500 - calculateTotal()) + " more for free delivery"
                }
              </p>
              <p>Estimated delivery: 3-5 business days</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
