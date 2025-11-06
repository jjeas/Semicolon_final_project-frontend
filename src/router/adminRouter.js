import { lazy, Suspense } from "react";
import ProgramPage from "../pages/admin/program/ProgramPage";
import ProgramListPage from "../pages/program/ProgramListPage";
// const Login = lazy(() => import("../pages/member/LoginPage"));

const Loading = () => <div>Loading...</div>;
const adminRouter = () => {
  return [
    {
      path: "program",
      element: (
        <Suspense fallback={<Loading />}>
          <ProgramPage />
        </Suspense>
      ),
    },
    {
      path: "program/:programId",
      element: (
        <Suspense fallback={<Loading />}>
          <ProgramListPage />
        </Suspense>
      ),
    },
  ];
};
export default adminRouter;
