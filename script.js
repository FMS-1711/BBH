// // Bismillah Burger House — sample menu and cart. Update menu prices and WhatsApp number before publishing.
// const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Replace with the restaurant number, digits only.
// const products = [
//   {id:1,name:"Crispy Chicken Burger",category:"Chicken",price:149,description:"Crispy chicken, fresh lettuce and our signature sauce.",image:"images/crispy-chicken.jpg",tag:"FAVOURITE"},
//   {id:2,name:"Zinger Burger",category:"Chicken",price:169,description:"Spicy, crunchy chicken with creamy zinger sauce.",image:"images/zinger-burger.jpg"},
//   {id:3,name:"Double Cheese Burger",category:"Cheese",price:199,description:"Two juicy patties with rich, melting cheese.",image:"images/double-cheese.jpg",tag:"LOADED"},
//   {id:4,name:"Cheese Blast Burger",category:"Cheese",price:189,description:"A cheesy, satisfying burger with a big flavour hit.",image:"images/cheese-blast.jpg"},
//   {id:5,name:"Fish Fillet Burger",category:"Special",price:179,description:"Crispy fish fillet with fresh lettuce and tangy sauce.",image:"images/fish-fillet.jpg"},
//   {id:6,name:"Bismillah Special",category:"Special",price:249,description:"Our signature burger, stacked for a serious craving.",image:"images/special-burger.jpg",tag:"HOUSE SPECIAL"},
//   {id:7,name:"French Fries",category:"Sides",price:99,description:"Golden, crispy and perfectly seasoned fries.",image:"images/fries.jpg"},
//   {id:8,name:"Chicken Nuggets (6 pcs)",category:"Sides",price:119,description:"Crispy chicken nuggets, perfect for sharing.",image:"images/nuggets.jpg"}
// ];
// let cart = [];
// const $ = (selector) => document.querySelector(selector);
// const money = (amount) => `₹${amount.toLocaleString("en-IN")}`;

// function renderProducts(filter = "All") {
//   const visible = filter === "All" ? products : products.filter(item => item.category === filter);
//   $("#productGrid").innerHTML = visible.map(item => `
//     <article class="product-card">
//       <div class="product-image">${item.tag ? `<span class="product-tag">${item.tag}</span>` : ""}<img src="${item.image}" alt="${item.name}" loading="lazy"></div>
//       <div class="product-info"><h3>${item.name}</h3><p>${item.description}</p>
//         <div class="product-bottom"><strong class="price">${money(item.price)}</strong><button class="add-button" data-add="${item.id}" aria-label="Add ${item.name} to cart">+ Add</button></div>
//       </div>
//     </article>`).join("");
//   $("#menuCount").textContent = `${visible.length} ${visible.length === 1 ? "item" : "items"}`;
// }

// function addToCart(id) {
//   const found = cart.find(item => item.id === id);
//   if (found) found.quantity += 1;
//   else cart.push({ ...products.find(item => item.id === id), quantity: 1 });
//   renderCart(); showToast("Added to your cart");
// }
// function changeQuantity(id, change) {
//   const item = cart.find(product => product.id === id);
//   if (!item) return;
//   item.quantity += change;
//   if (item.quantity <= 0) cart = cart.filter(product => product.id !== id);
//   renderCart();
// }
// function removeFromCart(id) { cart = cart.filter(item => item.id !== id); renderCart(); }
// function renderCart() {
//   const count = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   $("#cartCount").textContent = count;
//   $("#drawerCount").textContent = `(${count})`;
//   $("#cartTotal").textContent = money(total);
//   if (!cart.length) {
//     $("#cartLines").innerHTML = `<div class="empty-cart"><span>🍔</span><h3>Your cart is hungry.</h3><p>Add something delicious from the menu.</p><button class="button button-red" id="backToMenu">Browse menu</button></div>`;
//     return;
//   }
//   $("#cartLines").innerHTML = cart.map(item => `
//     <div class="cart-line"><img src="${item.image}" alt=""><div class="cart-line-info"><strong>${item.name}</strong><small>${money(item.price)} each</small><div class="quantity-control"><button data-qty="${item.id}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button data-qty="${item.id}" data-change="1" aria-label="Increase quantity">+</button></div></div><button class="remove-line" data-remove="${item.id}" aria-label="Remove ${item.name}">×</button></div>`).join("");
// }
// function openCart() { $("#cartDrawer").classList.add("open"); $("#drawerBackdrop").classList.add("show"); $("#cartDrawer").setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; }
// function closeCart() { $("#cartDrawer").classList.remove("open"); $("#drawerBackdrop").classList.remove("show"); $("#cartDrawer").setAttribute("aria-hidden","true"); document.body.style.overflow=""; }
// function showToast(message) { const toast=$("#toast"); toast.textContent=message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.classList.remove("show"),1800); }
// function checkout() {
//   if (!cart.length) { showToast("Your cart is empty — add a burger first."); return; }
//   if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) { showToast("Add your restaurant WhatsApp number in script.js first."); return; }
//   const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
//   let message="Hello Bismillah Burger House! I'd like to place an order:\n\n";
//   cart.forEach(item=>message+=`${item.name} × ${item.quantity} — ${money(item.price*item.quantity)}\n`);
//   message+=`\nSubtotal: ${money(total)}\nPlease confirm availability and delivery/pickup details.`;
//   window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer");
// }

// $("#filters").addEventListener("click",event=>{const button=event.target.closest("[data-filter]");if(!button)return;document.querySelectorAll(".filter").forEach(el=>el.classList.remove("active"));button.classList.add("active");renderProducts(button.dataset.filter);});
// $("#productGrid").addEventListener("click",event=>{const button=event.target.closest("[data-add]");if(button)addToCart(Number(button.dataset.add));});
// $("#cartLines").addEventListener("click",event=>{const qty=event.target.closest("[data-qty]");const remove=event.target.closest("[data-remove]");const browse=event.target.closest("#backToMenu");if(qty)changeQuantity(Number(qty.dataset.qty),Number(qty.dataset.change));if(remove)removeFromCart(Number(remove.dataset.remove));if(browse){closeCart();document.querySelector("#menu").scrollIntoView({behavior:"smooth"});}});
// $("#openCart").addEventListener("click",openCart);$("#closeCart").addEventListener("click",closeCart);$("#drawerBackdrop").addEventListener("click",closeCart);$("#whatsappOrder").addEventListener("click",checkout);
// $("#mobileToggle").addEventListener("click",()=>{const nav=$("#mainNav");const isOpen=nav.classList.toggle("open");$("#mobileToggle").setAttribute("aria-expanded",String(isOpen));});
// document.querySelectorAll("#mainNav a").forEach(link=>link.addEventListener("click",()=>{$("#mainNav").classList.remove("open");$("#mobileToggle").setAttribute("aria-expanded","false");}));
// document.addEventListener("keydown",event=>{if(event.key==="Escape")closeCart();});
// $("#year").textContent=new Date().getFullYear();renderProducts();renderCart();

// MOBILE NAVIGATION

const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");

        mobileToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    document.querySelectorAll("#mainNav a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            mobileToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// FOOTER YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
// BISMILLAH BURGER HOUSE JOURNEY MAP

const journeyLocations = [
    { name: "Valsad", coords: [20.6100, 72.9300] },
    { name: "Chikhli", coords: [20.7580, 73.0620] },
    { name: "Bardoli", coords: [21.1250, 73.1120] },
    { name: "Amboli", coords: [21.1000, 73.0200] },
    { name: "Pardi", coords: [20.5080, 72.9450] },
    { name: "Vapi", coords: [20.3710, 72.9040] },
    { name: "Navsari", coords: [20.9500, 72.9300] }
];

const mapElement = document.getElementById("journeyMap");

if (mapElement && window.L) {

    const map = L.map("journeyMap", {
        scrollWheelZoom: false
    });

    // Map tiles
    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors",
            maxZoom: 19
        }
    ).addTo(map);

    const routeCoordinates = journeyLocations.map(
        location => location.coords
    );

    // Journey route
    L.polyline(routeCoordinates, {
        color: "#f4b942",
        weight: 3,
        opacity: 0.9,
        dashArray: "8, 8"
    }).addTo(map);

    // Create all markers
    const mapMarkers = {};

    journeyLocations.forEach(location => {

        const marker = L.marker(location.coords, {
            icon: L.divIcon({
                className: "",
                html: '<div class="journey-marker-pin"></div>',
                iconSize: [24, 24],
                iconAnchor: [12, 12]
            })
        }).addTo(map);

        mapMarkers[location.name.toLowerCase()] = marker;

        marker.bindPopup(`<strong>${location.name}</strong>`);

        marker.on("mouseover", () => {
            marker.getElement()?.classList.add("marker-hovered");
            marker.setZIndexOffset(1000);
        });

        marker.on("mouseout", () => {
            marker.getElement()?.classList.remove("marker-hovered");
            marker.setZIndexOffset(0);
        });
    });

    // Timeline hover connects to map markers
    document.querySelectorAll(".journey-stop").forEach(stop => {

        const city = stop.querySelector("strong")
            .textContent.trim().toLowerCase();

        const marker = mapMarkers[city];

        if (!marker) return;

        stop.addEventListener("mouseenter", () => {
            marker.getElement()?.classList.add("marker-hovered");
            marker.setZIndexOffset(1000);
        });

        stop.addEventListener("mouseleave", () => {
            marker.getElement()?.classList.remove("marker-hovered");
            marker.setZIndexOffset(0);
        });
    });

    // Display all destinations
    map.fitBounds(routeCoordinates, {
        padding: [45, 45]
    });

    // Correct map size after layout
    setTimeout(() => map.invalidateSize(), 200);
}

// DESTINATION DETAILS

const locationData = {
    "Valsad": {
        address: "Shop no. 4,Sagar Apartment,Shahid Chowk,Valsad, Gujarat, India",
        phone: "+91 78619 29971",
        status: "Journey Location"
    },

    "Chikhli": {
        address: "Thala Chikhli, Collage Road, Near Abed Service Station, Chikhli, Gujarat, India",
        phone: "+91 99799 84740 | +91 70696 99188",
        status: "Journey Location"
    },

    "Bardoli": {
        address: "Opp Bus Stand,Patel Tower,Near Linear Circle,Bardoli, Gujarat, India",
        phone: "+91 81414 17886",
        status: "Journey Location"
    },

    "Amboli": {
        address: "Tapi Arcade, Near Nana Complex, Amboli,Surat, Gujarat, India",
        phone: "+91 81414 17887",
        status: "Journey Location"
    },

    "Pardi": {
        address: "Near S.K Electronics, Front Of Ashapura Mobile Shop, Killa Pardi, Pardi, Gujarat, India",
        phone: "+91 81417 88700",
        status: "Journey Location"
    },

    "Vapi": {
        address: "Bismillah Burger House, Godal Nagar, Koparli Road, Opp. Asha Dham School, Vapi - 396191, Gujarat, India",
        phone: "+91 62622 60262",
        status: "NOW OPEN"
    },

    "Navsari": {
        address: "Near Nana Ni Cha, Opp, Tata High School Rd, Mahavir Society, Viraval, Navsari, Gujarat, India",
        phone: "+91  81418 09956",
        status: "COMING SOON"
    }
};

function showLocation(place) {
    const location = locationData[place];

    if (!location) return;

    document.getElementById("locationName").textContent = place;
    document.getElementById("locationAddress").textContent = location.address;
    document.getElementById("locationPhone").textContent = location.phone;
    document.getElementById("locationStatus").textContent = location.status;

    const mapButton = document.getElementById("locationMap");

    mapButton.href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(location.address);

    mapButton.style.display = "inline-flex";

    document.getElementById("locationDetails").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

// FRANCHISE POPUP

const franchiseModal = document.getElementById("franchiseModal");
const openFranchiseForm = document.getElementById("openFranchiseForm");
const closeFranchiseForm = document.getElementById("closeFranchiseForm");
const franchiseForm = document.getElementById("franchiseForm");

openFranchiseForm.addEventListener("click", () => {
    franchiseModal.classList.add("active");
    document.body.style.overflow = "hidden";
});

function closeFranchisePopup() {
    franchiseModal.classList.remove("active");
    document.body.style.overflow = "";
}

closeFranchiseForm.addEventListener("click", closeFranchisePopup);

franchiseModal.addEventListener("click", (event) => {
    if (event.target === franchiseModal) {
        closeFranchisePopup();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeFranchisePopup();
    }
});


franchiseForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!franchiseForm.checkValidity()) {
        franchiseForm.reportValidity();
        return;
    }

    const submitButton = franchiseForm.querySelector(".franchise-submit");
    const successMessage = document.getElementById("franchiseSuccess");

    const enquiryData = {
        name: document.getElementById("franchiseName").value.trim(),
        mobile: document.getElementById("franchiseMobile").value.trim(),
        city: document.getElementById("franchiseCity").value.trim(),
        state: document.getElementById("franchiseState").value.trim(),
        country: document.getElementById("franchiseCountry").value.trim()
    };

    submitButton.disabled = true;
    submitButton.textContent = "SENDING...";

    successMessage.hidden = true;

    try {
        const response = await fetch(
            "http://localhost:5000/api/franchise",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(enquiryData)
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Submission failed.");
        }

        successMessage.removeAttribute("hidden");

successMessage.textContent =
    "✓ Thank you! Your franchise enquiry has been received.";

successMessage.style.display = "block";
successMessage.style.color = "#4caf50";

franchiseForm.reset();

    } catch (error) {
        console.error("Franchise enquiry error:", error);

        successMessage.textContent =
            "Something went wrong. Please try again.";

        successMessage.style.color = "#ff5555";
        successMessage.hidden = false;

    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "SUBMIT ENQUIRY ↗";
    }
});



// 3D TILT EFFECT — DESKTOP AND MOBILE

const tiltElements = document.querySelectorAll(
    ".franchise-visual, .hero-visual, .review-card, .features article, .contact-logo"
);

tiltElements.forEach((element) => {

    // DESKTOP: MOUSE TILT
    element.addEventListener("mousemove", (e) => {

        if (window.matchMedia("(pointer: coarse)").matches) return;

        const rect = element.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 10;
        const rotateX = (0.5 - y) * 10;

        element.style.transform =
            `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    // DESKTOP: RESET
    element.addEventListener("mouseleave", () => {
        element.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
    });

    // MOBILE: 3D TILT ON TOUCH
    element.addEventListener("touchstart", () => {

        if (!window.matchMedia("(pointer: coarse)").matches) return;

        element.style.transition = "transform 0.2s ease";

        element.style.transform =
            "perspective(900px) rotateX(3deg) rotateY(-3deg) scale(1.02)";
    }, { passive: true });

    // MOBILE: RESET AFTER TOUCH
    element.addEventListener("touchend", () => {

        element.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) scale(1)";

    }, { passive: true });

    element.addEventListener("touchcancel", () => {
        element.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) scale(1)";
    });

});
