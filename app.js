const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 5999,
    colors: [
      {
        code: "black",
        img: "./Image/air.png",
      },
      {
        code: "darkblue",
        img: "./Image/air2.png"
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 7999,
    colors: [
      {
        code: "lightgray",
        img: "./Image/jordan.png",
      },
      {
        code: "green",
        img: "./Image/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 6999,
    colors: [
      {
        code: "lightgray",
        img: "./Image/blazer.png",
      },
      {
        code: "green",
        img: "./Image/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 3999,
    colors: [
      {
        code: "black",
        img: "./Image/crater.png",
      },
      {
        code: "lightgray",
        img: "./Image/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 999,
    colors: [
      {
        code: "gray",
        img: "./Image/hippie.png",
      },
      {
        code: "black",
        img: "./Image/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₱" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});







document.addEventListener("DOMContentLoaded", function () {
  // Get the search input and search icon elements
  const searchInput = document.querySelector(".searchInput");
  const searchIcon = document.querySelector(".searchIcon");

  // Add an event listener to the search icon for when it's clicked
  searchIcon.addEventListener("click", function () {
      performSearch();
  });

  // Add an event listener to the search input for when Enter key is pressed
  searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
          performSearch(enter);
      }
  });

  // Function to perform the search
  function performSearch(Enter) {
      // Get the search query from the input
      const searchQuery = searchInput.value.trim().toLowerCase();

      // You can perform your search logic here
+
      console.log("Search query:", searchQuery);

      // You can implement further actions based on the search query, such as filtering results, displaying them, etc.
  }
});








