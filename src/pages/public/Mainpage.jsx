import { Map, MapMarker } from "react-kakao-maps-sdk";

const MainPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* 메인 콘텐츠 */}
      <main className="w-full p-8 max-w-[1400px] mx-auto px-8 shadow-lg mt-14 bg-gray-200 rounded">
        <div className="grid grid-cols-12 gap-4">
          {/* 왼쪽 메뉴 */}
          <aside className="col-span-3 bg-gray-100 p-4 grid grid-cols-2 gap-2 rounded">
            <button className="w-full bg-white py-14 border rounded">
              이용안내
            </button>
            <button className="w-full bg-white py-14 border rounded">
              프로그램 안내
            </button>
            <button className="w-full bg-white py-14 border rounded">
              수강 신청
            </button>
            <button className="w-full bg-white py-14 border rounded">
              대관 신청
            </button>
            <button className="w-full bg-white py-14 border rounded">
              예약 내역 조회
            </button>
            <button className="w-full bg-white py-14 border rounded">
              FAQ
            </button>
          </aside>

          {/* 가운데 이벤트 영역 */}
          <section className="col-span-6 bg-gray-300 flex flex-col justify-center items-center rounded">
            <h2 className="text-xl font-semibold mb-2">Image</h2>
            <div className="flex space-x-2 mt-2">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </section>

          {/* 오른쪽 공지 및 지도API */}
          <aside className="col-span-3 flex flex-col space-y-4">
            <div className="flex-1 bg-gray-100 p-4 rounded flex justify-center items-center">
              <p>공지</p>
            </div>
            <div className="flex-1 bg-gray-100 p-4 rounded flex justify-center items-center">
              <Map
                center={{ lat: 37.3498095, lng: 127.1069927 }}
                style={{ width: "300px", height: "200px" }}
                level={5}
              >
                <MapMarker position={{ lat: 37.3498095, lng: 127.1069927 }}>
                  {/* <div className=" text-primary-dark border border-primary-light rounded-xl px-3 py-1.5 shadow-lg text-sm font-semibold">
                    그린 체육관
                  </div> */}
                </MapMarker>
              </Map>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
