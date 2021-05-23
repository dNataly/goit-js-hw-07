const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];
const container = document.querySelector("ul");

function setIngredientsList() {
    ingredients.forEach((ingredient) => {
        const item = document.createElement("li");
        item.textContent = ingredient;
        container.append(item);
    })
}
setIngredientsList();


