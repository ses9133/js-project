/* 외부 API 통신 전담 */

// 카카오 지도 설정 및 마커 표시
// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };  

// 지도 생성  
export var mapInstance = new kakao.maps.Map(mapContainer, mapOption); 
// 장소 검색 객체 생성
var ps = new kakao.maps.services.Places(); 

export const mapService = {
  searchKeyword: (keyword, callback) => {
    ps.keywordSearch(keyword, callback);
  },
  displayMarker: (place) => {
    var marker = new kakao.maps.Marker({
        map: mapInstance,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
    });
  },
  panTo: (y, x) => {
    const moveLatLon = new kakao.maps.LatLng(y, x);
    mapInstance.panTo(moveLatLon);
    mapInstance.setLevel(3);
  }
};