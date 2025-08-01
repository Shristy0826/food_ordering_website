 
        // Sample food data
        const foodItems = [
            { id: 1, name: "Margherita Pizza", category: "pizza", price: 12.99, description: "Classic pizza with tomato sauce, mozzarella, and basil", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b088bd1a-b23b-4baf-93d2-3328ab96bcb1.png" },
            { id: 13, name: "Masala Dosa", category: "south-indian", price: 8.99, description: "Crispy rice crepe filled with spiced potatoes, served with sambar and chutney", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6161f68-79df-4c64-b600-4273cf75d69f.png" },
            { id: 14, name: "Butter Chicken", category: "punjabi", price: 14.99, description: "Tender chicken in rich tomato and butter sauce", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9a88123c-b77e-4b26-8d8c-a3af5feeef5c.png" },
            { id: 15, name: "Pad Thai", category: "thai", price: 11.99, description: "Stir-fried rice noodles with eggs, tofu and tamarind sauce", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0055c6b8-d1ec-4bbf-aae4-306d04fc9328.png" },
            { id: 16, name: "Kung Pao Chicken", category: "chinese", price: 12.99, description: "Spicy stir-fry with chicken, peanuts and vegetables", image: "https://theyummybowl.com/wp-content/uploads/kung-pao-chicken-n-10-of-11.jpg" },
            { id: 17, name: "Tacos", category: "mexican", price: 9.99, description: "Soft tortillas filled with your choice of meat, beans and toppings", image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos-1120x840.jpg" },
            { id: 2, name: "Cheeseburger", category: "burger", price: 8.99, description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0988c28f-6f2c-476b-9f1b-efa42db02580.png" },
            { id: 3, name: "Spaghetti Carbonara", category: "pasta", price: 14.99, description: "Pasta with creamy egg sauce, pancetta, and parmesan", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e6a94b8-614b-433d-8235-25a7350a3b60.png" },
            { id: 4, name: "Caesar Salad", category: "salad", price: 9.99, description: "Fresh romaine lettuce with croutons, parmesan, and Caesar dressing", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b49e91d3-556e-4000-bc8c-2c63d79880d0.png" },
            { id: 5, name: "Pepperoni Pizza", category: "pizza", price: 13.99, description: "Pizza with tomato sauce, mozzarella, and pepperoni", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ff8944d9-bf37-4b4b-8ffc-ca7f548cf8f0.png" },
            { id: 6, name: "BBQ Burger", category: "burger", price: 10.99, description: "Beef burger with BBQ sauce, onion rings, and cheddar", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9d62e12-50ea-4e2c-92d9-82aa34f66ec1.png" },
            { id: 7, name: "Chocolate Lava Cake", category: "dessert", price: 6.99, description: "Warm chocolate cake with a molten center, served with ice cream", image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca9249b7-4a85-4b6b-aedc-d28b87af5001.png" },
            { id: 8, name: "Greek Salad", category: "salad", price: 11.99, description: "Fresh vegetables with feta cheese, olives, and olive oil", image: "https://feelgoodfoodie.net/wp-content/uploads/2020/05/Greek-Salad-TIMG.jpg" },
            { id: 9, name: "Penne Arrabbiata", category: "pasta", price: 13.49, description: "Penne pasta with spicy tomato sauce and garlic", image: "https://finefoodsblog.com/wp-content/uploads/2021/03/penne-allArrabbiata-1200.jpg" },
            { id: 10, name: "Vegetarian Burger", category: "burger", price: 9.49, description: "Plant-based patty with lettuce, tomato, and vegan mayo", image: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg" },
            { id: 11, name: "Tiramisu", category: "dessert", price: 7.49, description: "Classic Italian dessert with coffee-flavored layers", image:  "https://www.kingarthurbaking.com/sites/default/files/2023-03/Tiramisu_1426.jpg" },
            { id: 12, name: "Four Cheese Pizza", category: "pizza", price: 15.99, description: "Pizza with mozzarella, gorgonzola, parmesan, and ricotta", image: "https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg" }
 
        ];

        // Cart state
        let cart = [];
        
        // DOM elements
        const cartButton = document.getElementById('cart-button');
        const cartCount = document.getElementById('cart-count');
        const cartSidebar = document.getElementById('cart-sidebar');
        const cartOverlay = document.getElementById('cart-overlay');
        const closeCartButton = document.getElementById('close-cart');
        const cartItemsContainer = document.getElementById('cart-items-container');
        const emptyCartMessage = document.getElementById('empty-cart-message');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartTotal = document.getElementById('cart-total');
        const checkoutButton = document.getElementById('checkout-button');
        const foodItemsContainer = document.getElementById('food-items-container');
        const categoryButtons = document.querySelectorAll('.food-category');
        
    // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            renderFoodItems('all');
            setupEventListeners();
        });
        
        function setupEventListeners() {
            // Cart toggle
            cartButton.addEventListener('click', toggleCart);
            closeCartButton.addEventListener('click', toggleCart);
            cartOverlay.addEventListener('click', toggleCart);
            
            // Category filtering
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    button.classList.add('active');
                    const category = button.dataset.category;
                    renderFoodItems(category);
                });
            });
            
            // Initialize with 'All Items' active
            document.querySelector('.food-category[data-category="all"]').classList.add('active');
            
            // Checkout button
            checkoutButton.addEventListener('click', () => {
                alert('Proceeding to checkout! This would redirect to payment page in a real application.');
            });

// Menu toggle button
            document.getElementById('menu-toggle').addEventListener('click', () => {
                showFullMenu = !showFullMenu;
                renderFoodItems(document.querySelector('.food-category.active').dataset.category);
                document.getElementById('menu-toggle').textContent = showFullMenu ? 'View Less' : 'View Full Menu';
            });
        }
        
        function toggleCart() {
            cartSidebar.classList.toggle('translate-x-full');
            cartOverlay.classList.toggle('hidden');
        }
        
        let showFullMenu = false;
        const INITIAL_DISPLAY_LIMIT = 4;
        
        function renderFoodItems(category = 'all') {
            foodItemsContainer.innerHTML = '';
            
            const filteredItems = category === 'all' 
                ? foodItems 
                : foodItems.filter(item => item.category === category);
            
            const itemsToShow = showFullMenu ? filteredItems : filteredItems.slice(0, INITIAL_DISPLAY_LIMIT);
            
            filteredItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'food-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200';
                itemElement.innerHTML = `
                    <div class="relative">
                        <img src="${item.image}" alt="${item.name} - ${item.description}" class="w-full h-48 object-cover" />
                        <div class="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                            $${item.price.toFixed(2)}
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-bold text-lg mb-1">${item.name}</h3>
                        <p class="text-gray-600 text-sm mb-3">${item.description}</p>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center">
                                <button class="quantity-btn bg-gray-200 text-gray-700 px-3 py-1 rounded-l" data-id="${item.id}" data-action="decrease">-</button>
                                <span class="quantity-display bg-gray-100 px-3 py-1" data-id="${item.id}">0</span>
                                <button class="quantity-btn bg-gray-200 text-gray-700 px-3 py-1 rounded-r" data-id="${item.id}" data-action="increase">+</button>
                            </div>
                            <button class="add-to-cart bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full transition" data-id="${item.id}">
                                Add
                            </button>
                        </div>
                    </div>
                `;
                foodItemsContainer.appendChild(itemElement);
            });

          // Add event listeners to quantity buttons and add to cart buttons
            document.querySelectorAll('.quantity-btn').forEach(button => {
                button.addEventListener('click', handleQuantityChange);
            });
            
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        }
        
        function handleQuantityChange(e) {
            const button = e.target;
            const itemId = parseInt(button.dataset.id);
            const action = button.dataset.action;
            const quantityDisplay = document.querySelector(`.quantity-display[data-id="${itemId}"]`);
            
            let quantity = parseInt(quantityDisplay.textContent);
            
            if (action === 'increase') {
                quantity++;
            } else if (action === 'decrease' && quantity > 0) {
                quantity--;
            }
            
            quantityDisplay.textContent = quantity;
        }
        
      function addToCart(e) {
            const button = e.target;
            const itemId = parseInt(button.dataset.id);
            const quantityDisplay = document.querySelector(`.quantity-display[data-id="${itemId}"]`);
            const quantity = parseInt(quantityDisplay.textContent);
            
            if (quantity <= 0) return;
            
            // Find the item in our foodItems array
            const itemToAdd = foodItems.find(item => item.id === itemId);
            
            // Check if item already exists in cart
            const existingItemIndex = cart.findIndex(item => item.id === itemId);
            
            if (existingItemIndex !== -1) {
                // Update quantity if item exists
                cart[existingItemIndex].quantity += quantity;
            } else {
                // Add new item to cart
                const cartItem = {
                    ...itemToAdd,
                    quantity: quantity
                };
                cart.push(cartItem);
            }
            
            // Reset quantity display
            quantityDisplay.textContent = '0';
            
            // Update cart UI
            updateCart();
        }
        
        function updateCart() {
            // Update cart count
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            
            if (totalItems > 0) {
                cartCount.textContent = totalItems;
                cartCount.classList.remove('hidden');
            } else {
                cartCount.classList.add('hidden');
            }
            
            // Render cart items
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                emptyCartMessage.classList.remove('hidden');
            } else {
                emptyCartMessage.classList.add('hidden');
                
                cart.forEach(item => {
                    const cartItemElement = document.createElement('div');
                    cartItemElement.className = 'cart-item mb-4 pb-4 border-b';
                    cartItemElement.innerHTML = `
                        <div class="flex justify-between items-center mb-2">
                            <h4 class="font-medium">${item.name}</h4>
                            <span class="font-bold">$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div class="flex justify-between text-sm text-gray-500 mb-2">
                            <div class="flex items-center">
                                <button class="cart-quantity-btn bg-gray-200 rounded w-6 h-6 mr-2" data-id="${item.id}" data-action="decrease">-</button>
                                <span class="mr-2">${item.quantity}</span>
                                <button class="cart-quantity-btn bg-gray-200 rounded w-6 h-6" data-id="${item.id}" data-action="increase">+</button>
                            </div>
                            <button class="text-red-500 hover:text-red-700 text-sm" data-id="${item.id}" data-action="remove">Remove</button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(cartItemElement);
                });
            }
            
            // Add event listeners to cart quantity buttons
            document.querySelectorAll('.cart-quantity-btn').forEach(button => {
                button.addEventListener('click', handleCartQuantityChange);
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('[data-action="remove"]').forEach(button => {
                button.addEventListener('click', removeFromCart);
            });
            
            // Update totals
            updateCartTotals();
        }
        
        function handleCartQuantityChange(e) {
            const button = e.target;
            const itemId = parseInt(button.dataset.id);
            const action = button.dataset.action;
            
            const itemIndex = cart.findIndex(item => item.id === itemId);
            
            if (itemIndex === -1) return;
            
            if (action === 'increase') {
                cart[itemIndex].quantity++;
            } else if (action === 'decrease') {
                cart[itemIndex].quantity--;
                
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
            }
            
            updateCart();
        }
        
        function removeFromCart(e) {
            const button = e.target;
            const itemId = parseInt(button.dataset.id);
            
            cart = cart.filter(item => item.id !== itemId);
            
            updateCart();
        }
               

     

     
   
function updateCartTotals() {
            const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            const deliveryFee = 2.99;
            const total = subtotal + deliveryFee;
            
            cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
            cartTotal.textContent = `$${total.toFixed(2)}`;
        }
       
    function showOrderConfirmation() {
        const orderSummary = document.getElementById('order-summary');
        orderSummary.innerHTML = ''; // Clear previous summary

        // Populate order summary
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'flex justify-between mb-2';
            itemElement.innerHTML = `<span>${item.name} (x${item.quantity})</span><span>$${(item.price * item.quantity).toFixed(2)}</span>`;
            orderSummary.appendChild(itemElement);
        });

        // Show order confirmation modal
        document.getElementById('order-confirmation').classList.remove('hidden');
    }

    function toggleOrderConfirmation() {
        document.getElementById('order-confirmation').classList.toggle('hidden');
    }

document.getElementById('payment-method').addEventListener('change', function() {
    const selectedMethod = this.value;
    const creditCardInfo = document.getElementById('credit-card-info');

    if (selectedMethod === 'credit-card') {
        creditCardInfo.classList.remove('hidden');
    } else {
        creditCardInfo.classList.add('hidden');
    }
});

// Confirm Order Button Event Listener
document.getElementById('confirm-order-button').addEventListener('click', function() {
    const paymentMethod = document.getElementById('payment-method').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCVC = document.getElementById('card-cvc').value;

    // Here you can add logic to handle the payment processing
    if (paymentMethod === 'credit-card') {
        // Validate credit card details
        if (!cardNumber || !cardExpiry || !cardCVC) {
            alert('Please fill in all credit card details.');
            return;
        }
    }

    // Proceed with order confirmation
    alert('Order confirmed! Thank you for your order.');
    toggleOrderConfirmation();
    // Clear the cart after confirmation
    cart = [];
    updateCart();
});

        // Login/Signup Modal Functions
    function toggleLoginModal() {
      const modal = document.getElementById('login-modal');
      modal.classList.toggle('active');
      if (modal.classList.contains('active')) {
        showLoginForm();
      }
    }
    
    function showLoginForm() {
      document.getElementById('login-form').classList.remove('hidden');
      document.getElementById('signup-form').classList.add('hidden');
      document.getElementById('forgot-form').classList.add('hidden');
      document.getElementById('login-modal-title').textContent = 'Login to Food Express';
      document.getElementById('login-tab').classList.add('active');
      document.getElementById('signup-tab').classList.remove('active');
    }
    
    function showSignupForm() {
      document.getElementById('login-form').classList.add('hidden');
      document.getElementById('signup-form').classList.remove('hidden');
      document.getElementById('forgot-form').classList.add('hidden');
      document.getElementById('login-modal-title').textContent = 'Create an Account';
      document.getElementById('login-tab').classList.remove('active');
      document.getElementById('signup-tab').classList.add('active');
    }
    
    function showForgotPassword() {
      document.getElementById('login-form').classList.add('hidden');
      document.getElementById('signup-form').classList.add('hidden');
      document.getElementById('forgot-form').classList.remove('hidden');
      document.getElementById('login-modal-title').textContent = 'Reset Password';
      document.getElementById('login-tab').classList.remove('active');
      document.getElementById('signup-tab').classList.remove('active');
    }
    
    // Form validation
    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      let valid = true;
      
      const email = document.getElementById('login-email');
      const password = document.getElementById('login-password');
      const emailError = document.getElementById('login-email-error');
      const passwordError = document.getElementById('login-password-error');
      
      // Reset errors
      email.classList.remove('input-error');
      password.classList.remove('input-error');
      emailError.classList.add('hidden');
      passwordError.classList.add('hidden');
      
      // Validate email
      if (!email.value || !email.value.includes('@')) {
        email.classList.add('input-error');
        emailError.classList.remove('hidden');
        valid = false;
      }
      
      // Validate password
      if (!password.value || password.value.length < 6) {
        password.classList.add('input-error');
        passwordError.classList.remove('hidden');
        valid = false;
      }
      
      if (valid) {
        // In a real app, you would submit the form here
        alert('Login successful!');
        toggleLoginModal();
      }
    });
    
    // Similar validation would be added for signup and forgot password forms
    
    // Address Modal Functions
    function toggleAddressModal() {
      const modal = document.getElementById('address-modal');
      modal.classList.toggle('active');
      if (modal.classList.contains('active')) {
        document.getElementById('address-form').classList.add('hidden');
      }
    }
    
    function saveAddress() {
      const line1 = document.getElementById('address-line1').value;
      const city = document.getElementById('city').value;
      const state = document.getElementById('state').value;
      
      if (line1 && city && state) {
        document.getElementById('location-text').textContent = `${line1}, ${city}, ${state}`;
        toggleAddressModal();
      } else {
        alert('Please fill in required address fields');
      }
    }
    
    // Show manual address form when clicking "Add new address"
    document.getElementById('add-new-address').addEventListener('click', function() {
      document.getElementById('address-form').classList.remove('hidden');
    });

    






  
