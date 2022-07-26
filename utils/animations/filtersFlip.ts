import { Product } from "../../ts/interfaces/interfaces";
const { gsap } = require("gsap/dist/gsap");
const { Flip } = require("gsap/dist/Flip");

interface FiltersInterface {
  category: string;
}

gsap.registerPlugin(Flip);
const updateFilterAnimation = (
  products: Product[],
  filters: FiltersInterface
) => {
  let tempFilterList = [...products];
  let items = gsap.utils.toArray(".product-single");
  let state = Flip.getState(items);
  const { category } = filters;

  if (category !== "all") {
    tempFilterList = tempFilterList.filter((el) => el.category == category);
  }

  items.forEach((item: HTMLDivElement) => {
    if (tempFilterList.find((i) => i.id == item.id)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  Flip.from(state, {
    duration: 1,
    scale: true,
    absolute: false,
    ease: "power1.inOut",
    onEnter: (elements: HTMLDivElement) => {
      {
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.6 }
        );
      }
    },
    onLeave: (elements: HTMLDivElement) =>
      gsap.fromTo(
        elements,
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0, duration: 0.6 }
      ),
  });
};

export default updateFilterAnimation;
