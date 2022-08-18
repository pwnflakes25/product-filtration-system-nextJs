import DUMMY_DATA from "./dummy-data.json" assert { type: "json" };

export const getCategories = () => {
  return ['Mid Heels', 'Boots', 'New Arrivals', 'Sandals', 'Flats', 'Court Shoes'];
};

export const getColors = () => {
  return DUMMY_DATA.data.allContentfulProductPage.edges
    .map((edge) => edge.node.colorFamily)
    .flat()
    .filter(x => x && x.name)
    .map((color) => color.name);
};

export const getTotalLength = () => {
  return DUMMY_DATA.data.allContentfulProductPage.edges.length;
}
