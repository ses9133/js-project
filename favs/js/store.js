// 데이터 저장 및 관리
// 로컬스토리지와 직접 통신하며 데이터를 넣고 빼는 역할만 담당

export let shops = JSON.parse(localStorage.getItem('myShops')) || [];
export let categories = JSON.parse(localStorage.getItem('myCategories')) || [];

export const store = {
  saveShops: () => {
    localStorage.setItem('myShops', JSON.stringify(shops));
  },
  saveCateogories: () => {
    localStorage.setItem('myCategories', JSON.stringify(categories));
  },
  addShop: (shop) => {
    shops.push(shop);
    store.saveShops();
  },
  deleteShop: (index) => {
    shops.splice(index, 1);
    store.saveShops();
  },
  addCategory: (category) => {
    categories.push(category);
    store.saveCateogories();
  },
  deleteCategory: (index) => {
    categories.splice(index, 1);
    store.saveCateogories();
  }
};