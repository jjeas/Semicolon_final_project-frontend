import { lazy, Suspense } from "react";
import ProgramPage from "../pages/admin/program/ProgramPage";
import ProgramListPage from "../pages/program/ProgramListPage";
import ProgramEditPage from "../pages/admin/program/ProgramEditPage";
import NoticeListPage from "../pages/notice/NoticeListPage";
import NoticeEditPage from "../pages/admin/community/notice/NoticeEditPage";
import NoticeAddPage from "../pages/admin/community/notice/NoticeAddPage";
import NoticeReadPage from "../pages/notice/NoticeReadPage";

const Loading = () => <div>Loading...</div>;
const adminRouter = () => {
  return [
    // {
    //   path: "program",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <ProgramPage />
    //     </Suspense>
    //   ),
    // },
    {
      path: "program/:programId",
      element: (
        <Suspense fallback={<Loading />}>
          <ProgramListPage />
        </Suspense>
      ),
    },
    {
      path: "program/update/:programId",
      element: (
        <Suspense fallback={<Loading />}>
          <ProgramEditPage />
        </Suspense>
      ),
    },
    {
      path: "notice",
      element: (
        <Suspense fallback={<Loading />}>
          <NoticeListPage />
        </Suspense>
      ),
    },
    {
      path: "notice/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <NoticeReadPage />
        </Suspense>
      ),
    },
    {
      path: "notice/add",
      element: (
        <Suspense fallback={<Loading />}>
          <NoticeAddPage />
        </Suspense>
      ),
    },
    {
      path: "notice/update/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <NoticeEditPage />
        </Suspense>
      ),
    },
  ];
};
export default adminRouter;
