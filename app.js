// ===== ПРОСТОЙ И ПОНЯТНЫЙ КОД ДЛЯ МОБИЛЬНЫХ =====

// Массив товаров
var products = [
  { id: "p1", name: "Acryl Kratzputz (Farbe)", category: "Штукатурка декоративная", price: 4500, unit: "шт.", image: "images/p1.png" },
  { id: "p2", name: "Acryl Reibeputz (Farbe)", category: "Штукатурка декоративная", price: 4500, unit: "шт.", image: "images/p2.png" },
  { id: "p3", name: "Silikon Kratzputz (Farbe)", category: "Штукатурка декоративная", price: 5500, unit: "шт.", image: "images/p3.png" },
  { id: "p4", name: "Silikon Reibeputz (Farbe)", category: "Штукатурка декоративная", price: 5500, unit: "шт.", image: "images/p4.png" },
  { id: "p5", name: "Silikon Art Beton (Farbe)", category: "Штукатурка декоративная", price: 4190, unit: "шт.", image: "images/p5.png" },
  { id: "p6", name: "Silikon Roll&Kellenputz (Farbe)", category: "Краска декоративная фактурная", price: 7800, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p7", name: "Siloxan Roll&Kellenputz (Farbe)", category: "Краска декоративная фактурная", price: 6250, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p8", name: "Roll&Kellenputz (Farbe)", category: "Краска декоративная фактурная", price: 5000, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p9", name: "Decor (Günstig)", category: "Краска декоративная фактурная", price: 2682, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p10", name: "Acryl Wand (Günstig)", category: "Краска для стен и потолка", price: 1689, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p11", name: "Acryl Wand (Farbe)", category: "Краска для стен и потолка", price: 5915, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p12", name: "Silikon Wand (Farbe)", category: "Краска для стен и потолка", price: 6390, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p13", name: "Wand Trend (Farbe)", category: "Краска для стен и потолка", price: 1500, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p14", name: "Super Wand Trend (Farbe)", category: "Краска интерьерная", price: 15000, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p15", name: "Acryl Premium Wand (Farbe)", category: "Краска интерьерная", price: 5915, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p16", name: "Silikon Premium Wand (Farbe)", category: "Краска интерьерная", price: 6390, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p17", name: "Interior (Günstig)", category: "Краска интерьерная", price: 2935, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p18", name: "Silikon Fassaden (Farbe)", category: "Краска фасадная", price: 8000, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p19", name: "Acryl Fassaden (Farbe)", category: "Краска фасадная", price: 5100, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p20", name: "Acryl Fassad (Günstig)", category: "Краска фасадная", price: 2600, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p21", name: "Бетоноконтакт Кварц Грунт (Farbe)", category: "Грунтовка 'Бетоноконтакт'", price: 1590, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p22", name: "Бетоноконтакт (Gunstig)", category: "Грунтовка 'Бетоноконтакт'", price: 1200, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p23", name: "Tiefgrund LF (Farbe)", category: "Грунтовка глубокого проникновения", price: 1000, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p24", name: "Tiefgrund (Günstig)", category: "Грунтовка глубокого проникновения", price: 500, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p25", name: "Silikon Quarzgrund (Farbe)", category: "Грунтовка под декоративные покрытия и штукатурки", price: 2685, unit: "шт.", image: "images/placeholder.jpg" },
  { id: "p26", name: "Acryl Quarzgrund (Farbe)", category: "Грунтовка под декоративные покрытия и штукатурки", price: 2045, unit: "шт.", image: "images/placeholder.jpg" },
  
  
];

// Корзина
var cart = {};

// Текущий фильтр
var currentFilter = "all";

// Функция форматирования цены
function formatPrice(price) {
  return price.toLocaleString("ru-RU") + " ₽";
}

// Функция отрисовки товаров
function renderProducts(filter) {
  var productGrid = document.getElementById("product-grid");
  if (!productGrid) {
    console.log("product-grid не найден!");
    return;
  }
  
  productGrid.innerHTML = "";
  
  var filteredProducts = products;
  if (filter && filter !== "all") {
    filteredProducts = [];
    for (var i = 0; i < products.length; i++) {
      if (products[i].category === filter) {
        filteredProducts.push(products[i]);
      }
    }
  }
  
  if (filteredProducts.length === 0) {
    productGrid.innerHTML = '<div style="padding: 40px; text-align: center; color: rgba(148, 163, 184, 0.9);">Товары не найдены</div>';
    return;
  }
  
  for (var i = 0; i < filteredProducts.length; i++) {
    var product = filteredProducts[i];
    var qty = cart[product.id] || 0;
    
    var card = document.createElement("article");
    card.className = "product-card";
    
    var cardHTML = '<div class="product-image">';
    cardHTML += '<img src="' + product.image + '" alt="' + product.name + '" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">';
    cardHTML += '<div style="display:none; width:100%; height:100%; align-items:center; justify-content:center; background:radial-gradient(circle at 10% 0, #38bdf8, #0f172a);"><span>ФОТО</span></div>';
    cardHTML += '</div>';
    cardHTML += '<div class="product-content">';
    cardHTML += '<div class="product-name">' + product.name + '</div>';
    cardHTML += '<div class="product-meta">';
    cardHTML += '<div class="product-price">' + formatPrice(product.price) + '</div>';
    cardHTML += '<div class="product-unit">' + product.unit + '</div>';
    cardHTML += '</div>';
    cardHTML += '<div class="product-actions">';
    cardHTML += '<div class="qty-pill"><span>В корзине</span><strong id="qty-' + product.id + '">' + qty + '</strong></div>';
    cardHTML += '<button class="btn btn-primary add-to-cart-btn" data-product-id="' + product.id + '">В корзину</button>';
    cardHTML += '</div>';
    cardHTML += '</div>';
    
    card.innerHTML = cardHTML;
    productGrid.appendChild(card);
  }
  
  // Добавляем обработчики на кнопки "В корзину"
  var addButtons = productGrid.querySelectorAll(".add-to-cart-btn");
  for (var i = 0; i < addButtons.length; i++) {
    var btn = addButtons[i];
    var productId = btn.getAttribute("data-product-id");
    if (productId) {
      btn.onclick = function(pid) {
        return function() {
          addToCart(pid);
        };
      }(productId);
    }
  }
}

// Функция обновления активных кнопок фильтра
function updateFilterButtons() {
  var buttons = document.querySelectorAll(".filter-btn");
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    var category = btn.getAttribute("data-category");
    if (category === currentFilter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  }
}

// Функция добавления в корзину
function addToCart(productId) {
  if (!cart[productId]) {
    cart[productId] = 0;
  }
  cart[productId]++;
  
  var qtyEl = document.getElementById("qty-" + productId);
  if (qtyEl) {
    qtyEl.textContent = cart[productId];
  }
  
  updateCart();
}

// Функция обновления корзины
function updateCart() {
  var cartItemsEl = document.getElementById("cart-items");
  var cartCountEl = document.getElementById("cart-count");
  var cartTotalEl = document.getElementById("cart-total");
  var checkoutBtn = document.getElementById("checkout-btn");
  var bottomCartSummaryEl = document.getElementById("bottom-cart-summary");
  var cartToggleBadge = document.getElementById("cart-toggle-badge");
  
  if (!cartItemsEl) return;
  
  var totalQty = 0;
  var totalPrice = 0;
  var items = [];
  
  for (var productId in cart) {
    if (cart.hasOwnProperty(productId)) {
      var qty = cart[productId];
      if (qty > 0) {
        var product = null;
        for (var i = 0; i < products.length; i++) {
          if (products[i].id === productId) {
            product = products[i];
            break;
          }
        }
        if (product) {
          totalQty += qty;
          totalPrice += product.price * qty;
          items.push({ product: product, quantity: qty });
        }
      }
    }
  }
  
  cartItemsEl.innerHTML = "";
  if (items.length === 0) {
    cartItemsEl.classList.add("empty");
    var p = document.createElement("p");
    p.className = "cart-empty-text";
    p.textContent = "Ваша корзина пуста.";
    cartItemsEl.appendChild(p);
  } else {
    cartItemsEl.classList.remove("empty");
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = 
        '<div class="cart-item-main">' +
          '<div class="cart-item-name">' + item.product.name + '</div>' +
          '<div class="cart-item-meta">' + item.product.unit + '</div>' +
        '</div>' +
        '<div class="cart-item-actions">' +
          '<div class="cart-qty">' +
            '<button class="cart-dec-btn" data-product-id="' + item.product.id + '">−</button>' +
            '<span>' + item.quantity + '</span>' +
            '<button class="cart-inc-btn" data-product-id="' + item.product.id + '">+</button>' +
          '</div>' +
          '<div class="cart-item-price">' + formatPrice(item.product.price * item.quantity) + '</div>' +
        '</div>';
      cartItemsEl.appendChild(row);
    }
    
    // Добавляем обработчики на кнопки + и -
    var incButtons = cartItemsEl.querySelectorAll(".cart-inc-btn");
    var decButtons = cartItemsEl.querySelectorAll(".cart-dec-btn");
    for (var i = 0; i < incButtons.length; i++) {
      var btn = incButtons[i];
      var pid = btn.getAttribute("data-product-id");
      if (pid) {
        btn.onclick = function(p) {
          return function() {
            if (cart[p]) {
              cart[p]++;
              updateCart();
              var qtyEl = document.getElementById("qty-" + p);
              if (qtyEl) qtyEl.textContent = cart[p];
            }
          };
        }(pid);
      }
    }
    for (var i = 0; i < decButtons.length; i++) {
      var btn = decButtons[i];
      var pid = btn.getAttribute("data-product-id");
      if (pid) {
        btn.onclick = function(p) {
          return function() {
            if (cart[p]) {
              cart[p]--;
              if (cart[p] <= 0) {
                delete cart[p];
              }
              updateCart();
              var qtyEl = document.getElementById("qty-" + p);
              if (qtyEl) qtyEl.textContent = cart[p] || 0;
            }
          };
        }(pid);
      }
    }
  }
  
  if (cartCountEl) cartCountEl.textContent = totalQty;
  if (cartTotalEl) cartTotalEl.textContent = formatPrice(totalPrice);
  if (checkoutBtn) checkoutBtn.disabled = items.length === 0;
  if (cartToggleBadge) {
    cartToggleBadge.textContent = totalQty;
    cartToggleBadge.style.display = totalQty > 0 ? "flex" : "none";
  }
  if (bottomCartSummaryEl) {
    if (items.length === 0) {
      bottomCartSummaryEl.textContent = "Товары не выбраны";
    } else {
      bottomCartSummaryEl.innerHTML = 'Позиций: <strong>' + totalQty + '</strong> · Итого: <strong>' + formatPrice(totalPrice) + '</strong>';
    }
  }
}

// Запуск при загрузке страницы
function init() {
  console.log("Инициализация...");
  
  var productGrid = document.getElementById("product-grid");
  if (!productGrid) {
    console.log("ОШИБКА: product-grid не найден!");
    setTimeout(init, 100);
    return;
  }
  
  console.log("Отрисовка товаров...");
  renderProducts(currentFilter);
  updateFilterButtons();
  
  // Обработчики на кнопки фильтров
  var filterButtons = document.querySelectorAll(".filter-btn");
  console.log("Найдено кнопок фильтров: " + filterButtons.length);
  for (var i = 0; i < filterButtons.length; i++) {
    var btn = filterButtons[i];
    var category = btn.getAttribute("data-category");
    if (category) {
      btn.onclick = function(cat) {
        return function() {
          console.log("Клик по фильтру: " + cat);
          currentFilter = cat;
          renderProducts(currentFilter);
          updateFilterButtons();
        };
      }(category);
      // Также добавляем touch события для мобильных
    }
  }
  
  updateCart();
  console.log("Инициализация завершена");
}

// Запускаем при загрузке DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

