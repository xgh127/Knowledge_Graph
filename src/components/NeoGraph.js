import React, { useEffect, useRef, useState } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";
import Sider from "antd/es/layout/Sider";
import { Card, Layout } from "antd";
import InfoDisplay from "./InfoDisplay";
import { SubGraph } from "./SubGraph";
import { labels } from "./Constant";

const { Meta } = Card;
//这是展示Neo4j图形的组件，它使用了Neovis.js库，它可以将Neo4j图形展示在网页上。
export function generateLabelConfigs() {
  const baseConfig = {
    caption: "name",
    size: "pagerank",
  };

  const config = {};
  labels.forEach(label => {
    config[label] = { ...baseConfig };
  });
  return config;
}
const NeoGraph = props => {
  //定义一个NeoGraph组件，接收props参数
  const {
    containerId, //容器id
    neo4jUri, //neo4jUri 地址
    neo4jUser, //neo4jUser 用户名
    neo4jPassword, //neo4jPassword 密码
    cypherQuery, //cypherQuery 查询语句
  } = props;

  const visRef = useRef(); //创建一个ref对象,用于保存Neo4j对象
  // useEffect 是一个React hook，它可以让你在函数组件中执行一些有副作用的操作，比如获取数据，设置状态，或者订阅一些事件。

  const [selectedNodeInfo, setSelectedNodeInfo] = useState(null); // 存储选中节点的详细信息
  const [selectedEdgeInfo, setSelectedEdgeInfo] = useState(null); // 存储选中边的详细信息
  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: neo4jUri,
      server_user: neo4jUser,
      server_password: neo4jPassword,
      //caption属性换成label属性即可
      labels: generateLabelConfigs(),
      relationships: {
        DIRECTED: {
          value: "weight",
        },
      },
      arrows: true,
      initial_cypher: cypherQuery,
    };
    try {
      const vis = new Neovis(config);
      vis.render();
      // 添加点击节点的事件监听器
      vis.registerOnEvent("clickNode", e => {
        // e: { nodeId: number; node: Node }
        console.log(JSON.stringify(e.node.raw.properties));
        setSelectedNodeInfo(e.node.raw.properties);
      });

      vis.registerOnEvent("clickEdge", e => {
        console.log(e);
        setSelectedEdgeInfo(e.edge.raw.properties);
      });
    } catch (e) {
      console.error(e);
    }
    //添加点击边的事件监听器
  }, [neo4jUri, neo4jUser, neo4jPassword, cypherQuery]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider
        width={300}
        height="100%"
        style={{
          background: "#fff",
          position: "fixed",
          right: 0,
          top: -18,
          bottom: 0,
          overflow: "auto",
          zIndex: 1000,
        }}
      >
        {/* 选中节点信息展示区域 */}

        <Card
          size="large"
          style={{
            width: "100%",
            height: "40%", // 你希望Card的最大高度
            overflowY: "auto", // 当内容超过高度时，显示垂直滚动条
            overflowX: "hidden", // 隐藏水平滚动条
            boxSizing: "border-box", // 确保padding和border不会增加Card的总宽度
          }}
          title="选中节点信息"
        >
          <InfoDisplay
            style={{ userSelect: "text" }}
            selectedInputInfo={selectedNodeInfo}
          />
        </Card>
        <SubGraph
          cypherQuery={cypherQuery}
          containerId={"id1"}
          neo4jUri={neo4jUri}
          neo4jUser={neo4jUser}
          neo4jPassword={neo4jPassword}
        />
      </Layout.Sider>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 300,
          bottom: 0,
        }}
        id={containerId}
        ref={visRef}
      />
    </Layout>
  );
};

//这是一个响应式NeoGraph组件，它会根据窗口大小自动调整大小。
const ResponsiveNeoGraph = props => {
  const { cypherQuery } = props;

  const neoGraphProps = {
    ...props,
    cypherQuery,
    backgroundColor: "white",
  };
  return (
    <div className="neoGraph-container">
      <NeoGraph {...neoGraphProps} />
    </div>
  );
};
ResponsiveNeoGraph.defaultProps = {
  backgroundColor: "#d3d3d3",
};

export { NeoGraph, ResponsiveNeoGraph };
