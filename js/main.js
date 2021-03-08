const readMoreLink = document.querySelector(".more-info");
const readMoreContainer = document.querySelector(".read-more_container");
const colorSelectionBlock = document.querySelector(".color_selection_block");
const colorSelectionBlockImages = document.querySelector(".sale_img_block img");
const saleFormBlock = document.querySelector('.sale_form_block_item');

const radioButtonChecked = (e) => {
  const target = e.target;
  const FormRadioInput = saleFormBlock.querySelectorAll('.js_input_radio');
  if (target.className === 'js_input_radio') {
    FormRadioInput.forEach(it => it.checked = false);
    target.checked = true;
  }
}
const getReadMoreInfo = (e) => {
  e.preventDefault();
  readMoreLink.classList.toggle("active");
  readMoreContainer.classList.toggle("active");
};
const selectImg = (e) => {
  e.preventDefault();
  const target = e.target;
  const childArray = Array.prototype.slice.call(colorSelectionBlock.children);
  childArray.forEach((el) => {
    el.classList.remove("active");
  });
  if (target.className === "select_color_link") {
    let id = target.id;
    let urlStart = "/img/";
    if (id) {
      colorSelectionBlockImages.src = `${urlStart}${id}.png`;
      colorSelectionBlockImages.alt = `${id}`;
    }
    target.classList.add("active");
  }
};

colorSelectionBlock.addEventListener("click", selectImg);
readMoreLink.addEventListener("click", getReadMoreInfo);
saleFormBlock.addEventListener('click', radioButtonChecked)