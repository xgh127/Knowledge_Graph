// This is the header component for the app.
// It includes the logo and the navigation links.

import React from "react";
import { Header } from "antd/es/layout/layout";

export const MyHeader = props => {
  return (
    <Header
      style={{
        height: "120px",
        padding: 0,
        textAlign: "center",
        //设置字体样式
        fontFamily: "cursive",
        fontWeight: "bold",
        fontSize: "50px",
        //提高高度
        backgroundColor: "#001529",
        //字体居中
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //设置字体颜色为渐变色
        color: "white",
      }}
    >
      {props.headerText}
    </Header>
  );
};
