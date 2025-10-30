import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 상단 고정 Header */}
      <Header />

      {/* 페이지 내용이 바뀌는 부분 */}
      <main className="flex-1 bg-gray-100">
        <Outlet />
      </main>

      {/* 하단 고정 Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
