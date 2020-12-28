import axios from "axios";

import { api } from "../config";
import { getHeaders } from "./helpers/localStorage";
// import { SAVE_PRODUCT } from "./utils/types";
// import { errorHandling } from "./helpers/errorHandling";

export const saveProducts = async (product, store_id, cb) => {

  const { data } = await axios.post(
    `${api}/stores/${store_id}/products`,
    {
      productName: product.productName,
      isActive: true,
      descriptionShort: "muito legal",
      mainCategory: 1,
      categoryId: [1],
      brand_id: 1,
      variations: [],
      evaluations: [],
      sku: 1,
    },
    getHeaders()
  );

  const { data: variation } = await axios.post(
    `${api}/stores/${store_id}/variations`,
    {
      variationName: product.title, // nao vai ter nome da variação mais, só titulo
      isActive: true,
      keyWords: "calcados, sapatos, tenis, skate",
      title: product.title,
      descriptionShort: "tenis muito legal",
      description: "tenis muito legal",
      packagedHeight: "16",
      packagedLength: "16",
      packagedWidth: "16",
      weightKg: "2",
      freeShipping: false,
      product_id: data.productId,
    },
    getHeaders()
  );

  const { data: price } = await axios.put(
    `${api}/stores/${store_id}/prices`,
    {
      variation_id: variation.variationId,
      costPrice: "40",
      profitMargin: "",
      offerPrice: product.offerPrice,
      salesPrice: product.salesPrice,
    },
    getHeaders()
  );

  const { data: stock } = await axios.put(
    `${api}/stores/${store_id}/stocks`,
    {
      variation_id: variation.variationId,
      quantity: product.quantity,
      quantityLimit: true,
      minimumAmount: "2",
      maximumAmount: "250",
    },
    getHeaders()
  );

  return console.log(price, stock);

  // const saveImages = function (dispatch) {
  //   axios
  //     .post(
  //       `${api}/stores/${store_id}/categories`,
  //       {
  //         categoryName: category.categoryName,
  //         description: category.description,
  //         isActive: category.isActive,
  //         refId: category.refId,
  //         products: category.products,
  //       },
  //       getHeaders()
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       dispatch({ type: SAVE_PRODUCT, payload: respose.data });
  //       cb(null);
  //     })
  //     .catch((err) => cb(errorHandling(err)));
  // };

  // return saveProduct;
};
