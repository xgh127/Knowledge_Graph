import React, { useState } from "react";
import { Button, Input, Layout, Menu, Select, Space } from "antd";
import { MyHeader } from "./components/MyHeader";
import { NeoGraph, ResponsiveNeoGraph } from "./components/NeoGraph";
import "./typography.css";

import { menuItems, searchTypeToCypher } from "./components/Constant";
import { Option } from "antd/es/mentions";
import { Footer } from "antd/es/modal/shared";

// const NEO4J_URI = "bolt://34.238.157.2:7687";
// const NEO4J_USER = "neo4j";
// const NEO4J_PASSWORD = "cars-cards-warranties";
const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "hongyuzhou";
const { Search } = Input;
// 递归函数，用于生成菜单项

function App() {
  const [cypherQuery, setCypherQuery] = useState(
    "MATCH p=(a {name: '云南国际'})-[r1]->(b)-[r2]->(c)-[r3]->(d) RETURN *"
  );
  const [searchType, setSearchType] = useState(0);
  const renderMenuItems = items => {
    return items.map(({ key, label, query, children }) => {
      const handleClick = () => {
        setCypherQuery(query);
      };
      if (children) {
        return (
          <Menu.SubMenu key={key} title={<span>{label}</span>}>
            {renderMenuItems(children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={key} onClick={handleClick}>
          {label}
        </Menu.Item>
      );
    });
  };
  const handleSearchTypeChange = value => {
    console.log(value);
    setSearchType(value);
  };
  const onSearch = value => {
    let cypher = searchTypeToCypher[searchType].cypher.replace(
      "${target}",
      value
    );
    setCypherQuery(cypher);
  };

  return (
    <Layout>
      <MyHeader headerText="知识图谱前端展示" />
      <Layout>
        <Layout.Sider
          // width={240}
          theme="light"
        >
          <Menu
            theme="light"
            style={{
              width: "100%",
              height: "100%",
              fontSize: "20px",
              textAlign: "center",
            }}
            mode="inline"
          >
            {renderMenuItems(menuItems)}
          </Menu>
        </Layout.Sider>
        <Layout.Content>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Space.Compact style={{ width: "100%" }}>
              <Select
                style={{ width: "25%", textAlign: "center" }}
                defaultValue="0"
                onChange={handleSearchTypeChange}
              >
                <Select.Option value="0" style={{ textAlign: "center" }}>
                  按名称搜索后一层节点
                </Select.Option>
                <Select.Option value="1" style={{ textAlign: "center" }}>
                  按名称搜索前一层节点
                </Select.Option>
                <Select.Option value="2" style={{ textAlign: "center" }}>
                  按名称搜索后前后一层节点
                </Select.Option>
                <Select.Option value="3" style={{ textAlign: "center" }}>
                  按名称搜索后两层节点
                </Select.Option>
              </Select>
              <Search
                placeholder="input search text"
                size={"middle"}
                style={{ width: "75%" }}
                onSearch={onSearch}
              />
            </Space.Compact>
          </div>
          <ResponsiveNeoGraph
            cypherQuery={cypherQuery}
            containerId={"id0"}
            neo4jUri={NEO4J_URI}
            neo4jUser={NEO4J_USER}
            neo4jPassword={NEO4J_PASSWORD}
          />
        </Layout.Content>
      </Layout>
      <Layout.Footer
        style={{
          textAlign: "center",
        }}
      >
        &copy; 2024 SJTU. All Rights Reserved By Xgh.
      </Layout.Footer>
    </Layout>
  );
}

export default App;
