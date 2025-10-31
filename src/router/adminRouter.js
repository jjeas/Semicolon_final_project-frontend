import { lazy, Suspense } from "react";
// const Login = lazy(() => import("../pages/member/LoginPage"));

const Loading = () => <div>Loading...</div>;
const adminRouter = () => {
  return [
    {
      path: "memberManage",
      element: <Suspense fallback={<Loading />}>{/* <Login /> */}</Suspense>,
    },
  ];
};
export default adminRouter;
