import  { useState } from "react";
import Header from "./header";


function Page1() {
    
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "This is a great product.",
      price: 20.00,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
    },
    {
      id: 2,
      title: "Product 2",
      description: "This is another great product.",
      price: 30.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_YQHcrKbz6XNgvGI53ZbMrrcIvRhKIT9Eaw&s",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Yet another amazing product.",
      price: 40.00,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusJxIMFvnZbTguJXiMjfSl3sfxNty9-v5vQ&s",
    },
  ];

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  
    <> <Header /><div className="bg-white">
          <header className="container mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                  <div className="text-2xl font-semibold">Brand</div>
                  <div className="flex items-center space-x-4">
                      <button onClick={() => setCartOpen(!cartOpen)} className="text-gray-600">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                      </button>
                  </div>
              </div>
              <div className="mt-4 max-w-lg mx-auto">
                  <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full border rounded-md px-4 py-2" />
              </div>
          </header>

          {/* Cart Panel */}
          {cartOpen && (
              <div className="fixed right-0 top-0 w-80 h-full px-6 py-4 bg-white border-l-2 border-gray-300">
                  <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-medium text-gray-700">Your Cart</h3>
                      <button onClick={() => setCartOpen(false)} className="text-gray-600">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                      </button>
                  </div>
                  <hr className="my-3" />
                  <ul>
                      {cartItems.length > 0 ? (
                          cartItems.map((item) => (
                              <li key={item.id} className="flex justify-between py-4">
                                  <span className="text-gray-700">{item.title}</span>
                                  <span className="text-gray-700">${item.price.toFixed(2)}</span>
                                  <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-600">Remove</button>
                              </li>
                          ))
                      ) : (
                          <p className="text-gray-600">Your cart is empty.</p>
                      )}
                  </ul>
                  <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-lg font-semibold">
                          ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                      </span>
                  </div>
                  <button className="w-full mt-4 py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md">Checkout</button>
              </div>
          )}

          {/* Product List */}
          <div className="container mx-auto px-6 py-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                      <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
                          <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
                          <div className="p-4">
                              <h4 className="text-lg font-semibold text-gray-700">{product.title}</h4>
                              <p className="text-sm text-gray-600">{product.description}</p>
                              <div className="mt-4 flex justify-between items-center">
                                  <span className="text-xl text-gray-800">${product.price.toFixed(2)}</span>
                                  <button
                                      onClick={() => handleAddToCart(product)}
                                      className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                                  >
                                      Add to Cart
                                  </button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div></>
  );
}

export default Page1;
