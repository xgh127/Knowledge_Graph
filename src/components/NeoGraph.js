import React, { useEffect, useRef, useState } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";
import Sider from "antd/es/layout/Sider";
import { Card, Layout } from "antd";
import NodeInfoDisplay from "./NodeInfoDisplay";

const { Meta } = Card;
//这是展示Neo4j图形的组件，它使用了Neovis.js库，它可以将Neo4j图形展示在网页上。
const NeoGraph = props => {
  //定义一个NeoGraph组件，接收props参数
  const {
    width, //宽度
    height, //高度
    containerId, //容器id
    backgroundColor, //背景颜色
    neo4jUri, //neo4jUri 地址
    neo4jUser, //neo4jUser 用户名
    neo4jPassword, //neo4jPassword 密码
    cypherQuery, //cypherQuery 查询语句
  } = props;

  const visRef = useRef(); //创建一个ref对象,用于保存Neo4j对象
  // useEffect 是一个React hook，它可以让你在函数组件中执行一些有副作用的操作，比如获取数据，设置状态，或者订阅一些事件。

  const [selectedNodeInfo, setSelectedNodeInfo] = useState(null); // 存储选中节点的详细信息
  useEffect(() => {
    const config = {
      container_id: visRef.current.id,
      server_url: neo4jUri,
      server_user: neo4jUser,
      server_password: neo4jPassword,
      labels: {
        Troll: {
          caption: "user_key",
          size: "pagerank",
          community: "community",
        },
      },
      relationships: {
        RETWEETS: {
          caption: false,
          thickness: "count",
        },
      },
      initial_cypher: cypherQuery,
      // "MATCH p=()-[r:IN_SQUAD]->() RETURN p LIMIT 25",
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
    } catch (e) {
      console.error(e);
    }
  }, [neo4jUri, neo4jUser, neo4jPassword, cypherQuery]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Sider
          width={300}
          height="100%"
          style={{
            background: "#fff",
            boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
            position: "fixed",
            right: 0,
            top: 0,
            bottom: 0,
            overflow: "auto",
          }}
        >
          {/* 选中节点信息展示区域 */}

          <Card size="large">
            <NodeInfoDisplay selectedNodeInfo={selectedNodeInfo} />
          </Card>
        </Sider>
        <Layout
          style={{
            //设置最大高度和宽度
            maxHeight: "100vh",
            maxWidth: "100vw",
          }}
        >
          <div
            id={containerId}
            ref={visRef}
            style={{ width: "100%", height: "100%", backgroundColor }}
          />
        </Layout>
      </Layout>
    </Layout>
  );
};

NeoGraph.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

//这是一个响应式NeoGraph组件，它会根据窗口大小自动调整大小。
const ResponsiveNeoGraph = props => {
  const { cypherQuery } = props;
  const [resizeListener, sizes] = useResizeAware();
  const neoGraphProps = {
    ...props,
    width: sizes.width || window.innerWidth * 0.8,
    height: sizes.height || window.innerHeight * 0.9,
    cypherQuery,
    backgroundColor: "white",
  };
  return (
    <div className="neoGraph-container">
      {/*{resizeListener}*/}
      <NeoGraph {...neoGraphProps} />
    </div>
  );
};

ResponsiveNeoGraph.defaultProps = {
  backgroundColor: "#d3d3d3",
};

ResponsiveNeoGraph.propTypes = {
  containerId: PropTypes.string.isRequired,
  neo4jUri: PropTypes.string.isRequired,
  neo4jUser: PropTypes.string.isRequired,
  neo4jPassword: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

export { NeoGraph, ResponsiveNeoGraph };
