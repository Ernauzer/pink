const readMoreLink = document.querySelector(".more-info");
const readMoreContainer = document.querySelector(".read-more_container");
const colorSelectionBlock = document.querySelector(".color_selection_block");
const colorSelectionBlockImages = document.querySelector(".sale_img_block img");
console.log(colorSelectionBlockImages.src);
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
    let urlStart = '/img/'
    switch (id) {
      case 'pink_grey':
        colorSelectionBlockImages.src = `${urlStart}girl_grey.png`;
        colorSelectionBlockImages.alt = `girl_grey`;
        break;
      case 'pink_black':
        colorSelectionBlockImages.src = `${urlStart}girl_black.png`;
        colorSelectionBlockImages.alt = `girl_black`;
        break;
      default:
        break;
    }
    target.classList.add("active");
  }
};

colorSelectionBlock.addEventListener("click", selectImg);
readMoreLink.addEventListener("click", getReadMoreInfo);
