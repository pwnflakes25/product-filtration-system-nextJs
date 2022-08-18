// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import DUMMY_DATA from "../../dummy-data.json" assert { type: "json" };

export default function handler(req, res) {
  if (req.method === "GET") {
    const limit = 10;

    let { page, colorFamily, categoryTags, priceMin, priceMax } = req.query;

    if (!page) page = 1;

    let filteredProduct = DUMMY_DATA.data.allContentfulProductPage.edges.map(
      (edge) => edge.node
    );

    if (colorFamily || categoryTags || priceMin || priceMax) {
      colorFamily = colorFamily && new Set(colorFamily.split("-"));
      categoryTags = categoryTags && new Set(categoryTags.split("-"));

      // filter the items based on filter

      filteredProduct = filteredProduct.filter((node) => {
        const containsColor =
          colorFamily && colorFamily.size !== 0
            ? node.colorFamily &&
              node.colorFamily.length &&
              node.colorFamily.some((color) => colorFamily.has(color.name))
            : true;
        const containTags =
          categoryTags && categoryTags.size !== 0
            ? node.categoryTags &&
              node.categoryTags.length &&
              node.categoryTags.some((tag) => categoryTags.has(tag))
            : true;
        const priceCondition =
          priceMin || priceMax
            ? node.shopifyProductEu.variants.edges
                .map((edge) => edge.node)
                .every(
                  (node) =>
                    (node.price <= priceMax || !priceMax) &&
                    (node.price >= priceMin || !priceMin)
                )
            : true;

        return containsColor && containTags && priceCondition;
      });
    }

    // slice to paginate
    filteredProduct = filteredProduct.slice(
      limit * (page - 1),
      limit * (page - 1) + limit
    );

    console.log(filteredProduct);

    res.status(200).json(filteredProduct);
  }
}
