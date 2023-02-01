import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from "react";
import Recommendation from "../recommendation/Recommendation";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Recommendation type="user" />
        <Recommendation type="popular" />
        <Recommendation type="editor" />
        <button className="rightButton">
          See More
          <ArrowDownwardIcon />
        </button>
      </div>
    </div>
  );
}
