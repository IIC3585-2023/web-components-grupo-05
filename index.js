const encapsulationButton = document.getElementById("encapsulation");
const productsButton = document.getElementById("products");
const treeButton = document.getElementById("tree");

encapsulationButton.addEventListener("click", () => {
  window.location.href = "./src/views/encapsulation.html";
}
);

productsButton.addEventListener("click", () => {
  window.location.href = "./src/views/products.html";
}
);

treeButton.addEventListener("click", () => {
  window.location.href = "./src/views/trees.html";
}
);