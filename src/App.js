import React, { useState } from "react";
import { Button, Layout } from "antd";
import { MyHeader } from "./components/MyHeader";
import { ResponsiveNeoGraph } from "./components/NeoGraph";
import Sider from "antd/es/layout/Sider";
import "./typography.css";
import { Footer } from "antd/es/layout/layout";

// const NEO4J_URI = "bolt://34.238.157.2:7687";
// const NEO4J_USER = "neo4j";
// const NEO4J_PASSWORD = "cars-cards-warranties";
const NEO4J_URI = "bolt://localhost:7687";
const NEO4J_USER = "neo4j";
const NEO4J_PASSWORD = "test1234";

function App() {
  const [cypherQuery, setCypherQuery] = useState(
    "MATCH p=()-[r:WROTE]->() RETURN p LIMIT 25"
  );
  return (
    <Layout>
      <Layout.Header style={{ background: "#fff", padding: 0, height: "auto" }}>
        <MyHeader headerText="知识图谱前端展示" />
      </Layout.Header>
      <Layout>
        <Sider style={{ boxShadow: "2px 0 8px rgba(0,0,0,0.1)" }}>
          <div className="button-container">
            <Button
              className="button-style"
              onClick={() => {
                setCypherQuery("MATCH (n:Movie) RETURN n LIMIT 25");
              }}
            >
              总体框架
            </Button>
            <Button
              className="button-style"
              onClick={() => {
                setCypherQuery("MATCH p=()-[r:ACTED_IN]->() RETURN p LIMIT 25");
              }}
            >
              项目管理
            </Button>
            <Button
              className="button-style"
              onClick={() => {
                setCypherQuery("MATCH p=()-[r:DIRECTED]->() RETURN p LIMIT 25");
              }}
            >
              运营数据
            </Button>
            <Button
              className="button-style"
              onClick={() => {
                setCypherQuery("MATCH p=()-[r:REVIEWED]->() RETURN p LIMIT 25");
              }}
            >
              大部件供应链
            </Button>
            <Button
              className="button-style"
              onClick={() => {
                setCypherQuery("MATCH p=()-[r:FOLLOWS]->() RETURN p LIMIT 25");
              }}
            >
              新能源政策
            </Button>
            <Button
              className="button-style"
              onClick={() => {
                setCypherQuery("MATCH p=()-[r:PRODUCED]->() RETURN p LIMIT 25");
              }}
            >
              数据更新
            </Button>
          </div>
        </Sider>
        <Layout.Content>
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
