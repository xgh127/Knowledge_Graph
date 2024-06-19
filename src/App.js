import React, { useState } from "react";
import { Button, Input, Layout, Menu } from "antd";
import { MyHeader } from "./components/MyHeader";
import { NeoGraph, ResponsiveNeoGraph } from "./components/NeoGraph";
import Sider from "antd/es/layout/Sider";
import "./typography.css";
import { Footer } from "antd/es/layout/layout";

import { menuItems } from "./components/SiderInfo";
import { SimpleGraph } from "./components/SimpleGraph";

// const NEO4J_URI = "bolt://34.238.157.2:7687";
// const NEO4J_USER = "neo4j";
// const NEO4J_PASSWORD = "cars-cards-warranties";
const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "test1234";

// 递归函数，用于生成菜单项

function App() {
  const [cypherQuery, setCypherQuery] = useState(
    "MATCH p=(a {name: '云南国际'})-[r1]->(b)-[r2]->(c)-[r3]->(d) RETURN *"
  );
  const [inputValue, setInputValue] = useState("null");
  const renderMenuItems = items => {
    return items.map(({ key, icon: Icon, label, query, children }) => {
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
  return (
    <Layout>
      <Layout.Header style={{ margin: 0, padding: 0, height: "10vh" }}>
        <MyHeader headerText="知识图谱前端展示" />
      </Layout.Header>
      <Layout style={{ padding: "10 10px" }}>
        <Layout.Sider width={260}>
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
          {/*//补充一个输入查询语句，然后按下查询按钮，可以查询到对应的图谱,搜索框和按钮并排，要求按下按钮后，运行输入的查询语句，并展示对应的图谱*/}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Input
              style={{ width: "80%" }}
              // value={cypherQuery}
              onChange={e => {
                let target = e.target.value;
                // const query = `MATCH (a) WHERE a.name =~ '.*${target}.*' RETURN a`;
                const query = `MATCH p=(a)-[r]->(b) WHERE a.name =~ '.*${target}.*' RETURN *`;
                setInputValue(query);
              }}
            />
            <Button
              style={{ width: "20%" }}
              type="primary"
              onClick={() => {
                setCypherQuery(inputValue);
              }}
            >
              查询
            </Button>
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
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2024 Created by Guohong Xu
      </Footer>
    </Layout>
  );
}

export default App;
