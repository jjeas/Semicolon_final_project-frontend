import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#2e3441] text-gray-100">
      <AdminHeader />
      <div className={`flex flex-1 flex-col"}`}>
        <AdminSidebar />
        <main className="flex-1 bg-white text-gray-800 p-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
