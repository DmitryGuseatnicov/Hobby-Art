/* eslint-disable class-methods-use-this */
import categoryJson from '../../initJson/category.json';
import { storageWorker } from '../../libs';

interface IFilters {
  name: string;
  key: string;
  variants: string[];
}

interface ICategory {
  id: string;
  name: string;
  img: string;
  filters: IFilters[];
}

class Category {
  constructor() {
    if (storageWorker.get<ICategory>('category').length === 0) {
      this.init();
    }
  }

  getAll<T extends ICategory>() {
    const categories = storageWorker.get<T>('category');
    return { data: categories };
  }

  getFilterParams(categoryName: string) {
    const categories = storageWorker.get<ICategory>('category');
    const [concreteCategory] = categories.filter((cr) => cr.name === categoryName);
    return { data: concreteCategory };
  }

  private init() {
    const categoriesWithCorrectImg = categoryJson.category.map((cr) => {
      const categoryWithCorrectImg = { ...cr };
      categoryWithCorrectImg.img = `${process.env.REACT_APP_BASE_URL}/${cr.img}`;
      return categoryWithCorrectImg;
    });
    storageWorker.set('category', categoriesWithCorrectImg);
  }
}

const categoryService = new Category();

export type { ICategory };
export { categoryService };
