import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  const location = useLocation();

  const isMainPage = location.pathname === "/";
  const shouldShowSidebar = !isMainPage;

  // 서브 페이지일 때만 flex 클래스를 부모 컨테이너에 적용
  const contentWrapperClasses = `flex-1 w-full max-w-screen-2xl mx-auto ${
    shouldShowSidebar ? "flex" : ""
  }`;
  if (isMainPage) {
    return (
      <div className="flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 bg-gray-100">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <div className={contentWrapperClasses}>
        <AdminSidebar />
        <main className={`flex-1 bg-white p-6 lg:pl-8`}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
