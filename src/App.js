import React, { useState } from "react";
import { Button, Input, Layout, Menu, Select } from "antd";
import { MyHeader } from "./components/MyHeader";
import { NeoGraph, ResponsiveNeoGraph } from "./components/NeoGraph";
import "./typography.css";
import { Footer } from "antd/es/layout/layout";

import { menuItems, searchTypeToCypher } from "./components/Constant";
import { Option } from "antd/es/mentions";

// const NEO4J_URI = "bolt://34.238.157.2:7687";
// const NEO4J_USER = "neo4j";
// const NEO4J_PASSWORD = "cars-cards-warranties";
const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "test1234";
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
      <Layout.Header style={{ margin: 0, padding: 0, height: "12vh" }}>
        <MyHeader headerText="知识图谱前端展示" />
      </Layout.Header>
      <Layout>
        <Layout.Sider width={240}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Menu
              theme="dark"
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
          </div>
        </Layout.Sider>
        <Layout.Content>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Input.Group compact>
              <Select
                style={{ width: "30%", textAlign: "center" }}
                defaultValue="0"
                onChange={handleSearchTypeChange}
              >
                <Option value="0">按名称搜索子节点</Option>
                <Option value="1">按B类型搜索</Option>
                <Option value="2">按C类型搜索</Option>
                <Option value="3">按D类型搜索</Option>
              </Select>
              <Search
                placeholder="input search text"
                size={"middle"}
                style={{ width: "70%" }}
                onSearch={onSearch}
              />
            </Input.Group>
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
    </Layout>
  );
}

export default App;
