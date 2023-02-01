import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./menulink.css";
import { logout } from "../../redux/apiCalls";

export default function MenuLink({ icon, text }) {
  // to get name from user store]
  // const name = useSelector((state)=>state.user.userInfo.name);
  const user = useSelector((state)=>(state.user.userInfo));
  const dispatch = useDispatch();


  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <div className="menulink" onClick={handleLogout}>
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName" >
        {text === "Logout" && `( ${user.name} )`}
      </span>
    </div>
  );
}
