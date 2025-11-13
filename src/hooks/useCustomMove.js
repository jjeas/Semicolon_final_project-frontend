import React from "react";
import { useNavigate } from "react-router-dom";

const useCustomMove = () => {
<<<<<<< Updated upstream
  const navigate = useNavigate();
  const moveToLogin = () => navigate("/login");
  const moveToMain = () => navigate("/");
  const moveToNoticeDetail = (id) => navigate(`/community/notice/${id}`);
  const moveToAdminNoticeDetail = (id) => navigate(`/admin/notice/${id}`);

  return {
    moveToLogin,
    moveToMain,
    moveToNoticeDetail,
    moveToAdminNoticeDetail,
  };
};
=======
    const navigate=useNavigate();
    const moveToLogin=()=>navigate("/login")
    const moveToMain=()=>navigate("/")
    const moveToNoticeDetail=(id)=>navigate(`/community/notice/${id}`)
    const moveToGallery = () => navigate("/community/gallery")
    const moveToGalleryDetail = (id)=>navigate(`/community/gallery/${id}`)

  return {moveToLogin, moveToMain,moveToNoticeDetail,moveToGallery,moveToGalleryDetail}
}
>>>>>>> Stashed changes

export default useCustomMove;
