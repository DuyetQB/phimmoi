import React from "react";
import NavBar from "../../../components/NavBar";
import "./style.scss"

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout">
      <NavBar />
      <div style={{ display: "flex" }}>
        <div className="fake-layout"></div>
        <div className="content" style={{flex:1  }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
