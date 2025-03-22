export function findCategories(products) {
  let categories = [];

  products.forEach((product) => {
    if (!categories.some((category) => category.name === product.category)) {
      categories.push({ name: product.category, active: false });
    }
  });

  return categories;
}
