import DUMMY_DATA from "../../dummy-data.json" assert {type: 'json'};


export default function handler(req, res) {
    if (req.method === "GET") {
      const limit = 10;
      let page = 1;

      const { colorFamily, categoryTags, priceMin, priceMax } = req.query;

      console.log(colorFamily, categoryTags, priceMin, priceMax);
  
  
      const filteredProduct =
        DUMMY_DATA.data.allContentfulProductPage.edges.slice(
          limit * (page - 1),
          limit * (page - 1) + limit
        ).map(edge => edge.node);
  
      res.status(200).json(filteredProduct);
    }
  }