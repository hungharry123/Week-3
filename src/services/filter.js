import _ from 'lodash';

export default {
  filterProducts(products, category) {
    if (!category) {
      if (typeof (category) === 'object') {
        return _.filter(products, { "categoryId": category.id });
      } else {
        return _.filter(products, { "categoryId": category });
      }
    }

    return [];
  }
}