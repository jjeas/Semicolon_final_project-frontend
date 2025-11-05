import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar"; // Sidebar 컴포넌트 import

const Layout = () => {
  const location = useLocation();

  // 현재 경로가 메인 페이지('/')인지 확인
  const isMainPage = location.pathname === "/";
  const isAdminPage = location.pathname === "/admin";
  const shouldShowSidebar = !isMainPage;

  // 서브 페이지일 때만 flex 클래스를 부모 컨테이너에 적용
  const contentWrapperClasses = `flex-1 w-full max-w-screen-2xl mx-auto ${
    shouldShowSidebar ? "flex" : ""
  }`;

  if (isMainPage || isAdminPage) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-gray-100">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 상단 고정 Header */}
      <Header />

      {/* 페이지 내용 컨테이너 (Flex 적용) */}
      <div className={contentWrapperClasses}>
        {/* 👈 왼쪽 사이드바 (Sidebar는 shouldShowSidebar가 true일 때만 렌더링됨) */}
        <Sidebar />

        {/* 오른쪽 페이지 내용 (Outlet) */}
        <main
          className={`flex-1 bg-white p-6 lg:pl-8`} // flex-1로 남은 공간 전체 사용
        >
          <Outlet />
        </main>
      </div>

      {/* 하단 고정 Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
