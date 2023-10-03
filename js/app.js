const $ = document;
const inputSection = document.querySelector(".input-section");
const products = $.querySelectorAll(".product__section--item");
const btnEls = $.querySelectorAll(".btn-section");
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

inputSection.addEventListener("keydown", searchHandler);
btnEls.forEach((btnEl) => {
  btnEl.addEventListener("click", btnHandler);
});
