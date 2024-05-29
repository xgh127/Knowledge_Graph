import React from "react";
import { Card, List } from "antd";

function renderValue(value, depth = 0) {
  // 递归函数，用于处理嵌套的对象和数组
  const fontSize = 14 + depth * 2; // 假设每次深度增加，字体大小增加 2px
  if (Array.isArray(value)) {
    return (
      <pre style={{ fontSize: fontSize + "px", paddingLeft: depth * 10 }}>
        {value.map((item, index) => (
          <div key={index}>{renderValue(item, depth + 1)}</div>
        ))}
      </pre>
    );
  }
  if (typeof value === "object" && value !== null) {
    return (
      <pre style={{ fontSize: 14 + depth, paddingLeft: depth * 10 }}>
        {Object.entries(value).map(([key, val]) => (
          <div key={key}>
            <strong>{key}:</strong> {renderValue(val, depth + 1)}
          </div>
        ))}
      </pre>
    );
  }
  // 对于非对象和数组的值，直接返回其字符串表示
  return value.toString();
}

function InfoDisplay({ selectedInputInfo, title }) {
  // 假设 selectedNodeInfo 是一个包含节点属性的对象
  const renderAttributes = () => {
    if (!selectedInputInfo) return null;

    // 创建一个列表项数组来展示属性
    const listItems = Object.entries(selectedInputInfo).map(([key, value]) => (
      <List.Item key={key}>
        <List.Item.Meta
          title={<span style={{ fontSize: "24px" }}>{key}</span>}
          description={
            renderValue(value) // 使用递归函数来渲染值
          }
        />
      </List.Item>
    ));

    return listItems;
  };

  return (
    <div>
      <h1 style={{ fontSize: "32px" }}>{title}</h1>
      <Card>
        <List>{renderAttributes()}</List>
      </Card>
    </div>
  );
}

export default InfoDisplay;
