const $ = document;
const themeToggle = $.querySelector(".theme-toggle");
const inputSection = $.querySelector(".input-section");
const products = $.querySelectorAll(".product__section--item");
const btnEls = $.querySelectorAll(".filter__section--btn");
const priceButton = $.querySelector(".filter__section--price").querySelector(
  "button"
);

const themeHandler = () => {
  const them = localStorage.getItem("theme");

  console.log(them);
  if (them === "dark") {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", "dark");
  }
};
const changeClass = (filter) => {
  btnEls.forEach((btnEl) => {
    const btnDateset = btnEl.dataset.filter;
    filter === btnDateset
      ? btnEl.classList.add("btn-selected")
      : btnEl.classList.remove("btn-selected");
  });
};
const searchHandler = (e) => {
  const searchValue = e.target.value.toLowerCase().trim();
  products.forEach((product) => {
    const productName = product.children[1].children[0].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};
const btnHandler = (e) => {
  const filter = e.target.dataset.filter;
  changeClass(filter);
  products.forEach((product) => {
    const category = product.dataset.category;
    if (filter === "all") {
      product.style.display = "block";
    } else {
      filter === category
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const priceHandler = (e) => {
  const searchPrice = +e.target.parentElement.children[0].value;
  products.forEach((product) => {
    const productPrice = product.children[1].children[1].innerText;
    const finalPrice = +productPrice.split(" ")[0];
    if (!searchPrice) {
      product.style.display = "block";
    } else {
      searchPrice === finalPrice
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

inputSection.addEventListener("keydown", searchHandler);
btnEls.forEach((btnEl) => {
  btnEl.addEventListener("click", btnHandler);
});
themeToggle.addEventListener("click", themeHandler);
priceButton.addEventListener("click", priceHandler);
