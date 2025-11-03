import React, { lazy, Suspense } from 'react'
const MemberEdit = lazy(() => import("../pages/member/MemberEditPage"));
const Reservation = lazy(()=>import("../pages/member/ReservationPage"));
const Inquiry = lazy(()=>import("../pages/member/InquiryPage"));
const PartnerRequest = lazy(()=>import("../pages/member/PartnerRequestPage"));

const Loading = () => <div>Loading...</div>;
const memberMyPageRouter = () => {
  return [
    {
        path: "memberEdit", 
        element: (
            <Suspense fallback= {<Loading/>}>
                <MemberEdit/>
            </Suspense>
        )
    },
    {
        path: "reservation", 
        element: (
            <Suspense fallback= {<Loading/>}>
                <Reservation/>
            </Suspense>
        )
    },
    {
        path: "inquiry", 
        element: (
            <Suspense fallback= {<Loading/>}>
                <Inquiry/>
            </Suspense>
        )
    },
    {
        path: "partnerRequest", 
        element: (
            <Suspense fallback= {<Loading/>}>
                <PartnerRequest/>
            </Suspense>
        )
    },
  ]
}

export default memberMyPageRouter
