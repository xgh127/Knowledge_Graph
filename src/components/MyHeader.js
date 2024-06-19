// This is the header component for the app.
// It includes the logo and the navigation links.

import React from "react";
import { Header } from "antd/es/layout/layout";
import { Layout } from "antd";

export const MyHeader = props => {
  return (
    <Layout.Header
      style={{
        backgroundImage:
          "url('https://hbimg.b0.upaiyun.com/d79887a5bd0c67c31d121570ae63e1886a44010611673-Kq66IF_fw658')",
        backgroundSize: "cover", // 确保背景图片覆盖整个Sider
        backgroundRepeat: "no-repeat", // 防止背景图片重复
        backgroundPosition: "center", // 背景图片居中显示
        height: "120px",
        padding: 0,
        textAlign: "center",
        //设置字体样式
        fontFamily: "cursive",
        fontWeight: "bold",
        fontSize: "50px",
        //字体居中
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "pink",
      }}
    >
      {props.headerText}
    </Layout.Header>
  );
};
