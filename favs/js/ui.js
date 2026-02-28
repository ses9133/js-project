// 이벤트 및 렌더링 - 메인 실행 파일
/**
 * - 화면에 리스트를 그리고 사용자의 클릭 이벤트를 처리,
 * - 이 파일이 store.js와 mapService.js를 불러와서 연결해 주는 중심 역할
 */
import { mapService } from "./mapService.js";
import { shops, categories, store } from "./store.js";

const list = document.getElementById('list-container');
const categoryContainer = document.getElementById('categoryContainer');
const modalCategoryContainer = document.getElementById('modalCategoryContainer');
const selectModal = new bootstrap.Modal(document.getElementById('categorySelectModal'));
const selectCategoryList = document.getElementById('select-category-list');
let tempPlace = null;

// 화면 렌더링(카테고리에 맞게)
export function renderShops(filterCategory = null) {
  list.innerHTML = '';

  const displayShops = filterCategory
    ? shops.filter(shop => shop.category == filterCategory)
    : [];

    if(displayShops.length === 0) { // filterCategory === true 의미: 배지를 클릭했을때
      list.innerHTML = `<li>등록된 장소가 없습니다.</li>`;
      return;
    }

    displayShops.forEach(shop => {
      const realIndex = shops.findIndex(s => s === shop); // 추출된 가게들에서의 인덱스가 아닌 진짜 기존 인덱스가 있어야 삭제할 때 안꼬임

      const li = document.createElement('li');
      li.innerHTML = `
      <div class="shop-item">
        <span class="badge rounded-pill category-list">${shop.category}</span>
        <strong>${shop.placeName}</strong>
        <small>${shop.placeAddress}</small>
        <button class="delete-btn" onclick="deleteShop(${realIndex})">삭제</button>
      </div>
    `;
    li.querySelector('.delete-btn').onclick = () => {
      store.deleteShop(realIndex);
      renderShops(null);
    };
    list.appendChild(li);
    });
}

export function renderCategories() {
  categoryContainer.innerHTML = '';
  if(modalCategoryContainer) modalCategoryContainer.innerHTML = '';

  categories.forEach((cat, index) => {
    const div = document.createElement('div');
    div.className = 'badge rounded-pill category-list';
    div.textContent = cat;
    div.style.cursor = 'pointer';

    div.onclick = () => {
      renderShops(cat);
    }

    categoryContainer.appendChild(div);

    if(modalCategoryContainer) {
      const modalDiv = document.createElement('div');
      modalDiv.className = 'badge rounded-pill category-list';
      modalDiv.innerHTML = `${cat} <i class="fa-solid fa-x"></i>`;
      modalDiv.style.cursor = 'pointer';
      modalDiv.onclick = () => {
        if(confirm('해당 카테고리를 삭제하시겠습니까?')) {
          store.deleteCategory(index);
          renderCategories(); // 삭제시 특정 요소를 지우는것이 아니라, 전체 화면을 담당하는 rednerCategories()를 재호출하는 방식
        } else {
          return;
        }
      };
      modalCategoryContainer.appendChild(modalDiv);
    }
  });
}

const input = document.getElementById('shop-input');
const searchBtn = document.getElementById('search-btn');
// 검색 버튼 이벤트 로직
searchBtn.addEventListener('click', () => {
  const keyword = input.value;
  if(!keyword) return;

  mapService.searchKeyword(keyword, placesSearchCB);
});

const resultList = document.getElementById('result-list');

// 키워드 검색 완료 시 호출되는 콜백함수
function placesSearchCB (data, status) {
    if (status === kakao.maps.services.Status.OK) {
        resultList.innerHTML = '';

        data.forEach(place => {
          const li = document.createElement('li');
          li.className = 'search-list';
          li.style.cursor = 'pointer';
          li.innerHTML = `
            <strong>${place.place_name}</strong><br>
            <small>${place.address_name}</small><br>
            <div class=save-btn-container>
            <button class="add-save-btn" type="button" data-bs-toggle="modal" data-bs-target="#categorySelectModal">등록</button>
            </div>
          `;

          // 지도 이동 이벤트
          li.addEventListener('click', () => {
          const moveLatLon = new kakao.maps.LatLng(place.y, place.x);
          map.panTo(moveLatLon);
          map.setLevel(3);

          displayMarker(place);
        });
        li.classList.add('result-element');

        // 등록 버튼 이벤트
        const saveBtn = li.querySelector('.add-save-btn');
        saveBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          tempPlace = place;
          renderSelectCategories();
          selectModal.show();
        });
          resultList.appendChild(li);
        });
    } 
}

// 장소 선택후 카테고리 선택시 렌더링 함수
function renderSelectCategories() {
  selectCategoryList.innerHTML = '';
  if(categories.length === 0) {
    alert('카테고리 등록 먼저 해주세요');
    return;
  }

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'badge rounded-pill category-list';
    btn.textContent = cat;

    btn.onclick = () => {
      store.addShop({
        placeName: tempPlace.place_name,
        placeAddress: tempPlace.address_name,
        category: cat
      });
      renderShops();
      selectModal.hide();
      alert(`${tempPlace.place_name}(이)가 [${cat}]카테고리에 등록되었습니다.`);
      tempPlace = null;
    };
    selectCategoryList.appendChild(btn);
  });
}

const categoryAddBtn = document.getElementById('categoryAddBtn');
categoryAddBtn.addEventListener('click', () => {
  const input = document.getElementById('category');
    const value = input.value.trim();
    if(!value) {
      alert('카테고리를 작성해주세요');
      return;
    }
    const div = document.createElement('div');
    div.className = 'badge rounded-pill category-list';
    div.textContent = value;
    div.style.cursor = 'pointer';
    categoryContainer.appendChild(div);
    input.value = "";

    store.addCategory(value);
    input.value = '';
    renderCategories();
});

renderCategories();
