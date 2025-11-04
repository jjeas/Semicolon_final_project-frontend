import React from 'react'
import { useNavigate } from 'react-router-dom'

const useCustomMove = () => {
    const navigate=useNavigate();
    const moveToLogin=()=>navigate("/login")
    const moveToMain=()=>navigate("/")
    const moveToNoticeDetail=(id)=>navigate(`/notice/${id}`)

  return {moveToLogin, moveToMain,moveToNoticeDetail}
}

export default useCustomMove
