import React, { useEffect, useRef, useState } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";
import Sider from "antd/es/layout/Sider";
import { Card, Layout } from "antd";
import InfoDisplay from "./InfoDisplay";

const { Meta } = Card;
//这是展示Neo4j图形的组件，它使用了Neovis.js库，它可以将Neo4j图形展示在网页上。
function generateLabelConfigs() {
  const baseConfig = {
    caption: "name",
    size: "pagerank",
  };
  const labels = [
    "SVG厂家",
    "一级节点",
    "上华新能源无锡",
    "上海电气",
    "上能电气",
    "东方日升光伏",
    "东方日升新能源",
    "东方电气",
    "中清光伏",
    "中电电气光伏",
    "中节能太阳能",
    "主机厂家",
    "主齿轮箱厂家",
    "二级节点",
    "云南国际项目",
    "亿晶光电",
    "供应商",
    "偏航轴承厂家",
    "光伏支架厂家",
    "光电供应商",
    "公司消缺项",
    "具体故障风机",
    "具体风机故障信息",
    "功率预测系统厂家",
    "北京ABB电气传动系统",
    "华为技术",
    "华耀光伏科技",
    "发电机厂家",
    "变桨轴承厂家",
    "变频器厂家",
    "叶片厂家",
    "哈电风能",
    "广东易事特电源",
    "故障",
    "整体故障信息",
    "新能源政策法规",
    "易事特集团",
    "晶科能源",
    "正泰新能源",
    "气象系统厂家",
    "汇流箱厂家",
    "浙江乐叶光伏",
    "海润光伏",
    "电力价格",
    "电力市场",
    "电池组件厂家",
    "监控系统厂家",
    "箱变厂家",
    "箱变测控厂家",
    "老青山主机设备",
    "许继电气",
    "许继集团",
    "许继风电",
    "设计施工单位名",
    "轮毂厂家",
    "辐照计厂家",
    "运营单位名",
    "运营情况",
    "运营故障",
    "远景能源",
    "逆变器厂家",
    "通威光伏科技",
    "重庆海装",
    "金风科技",
    "隆基绿能",
    "项目故障",
    "项目消缺项",
    "项目节点",
    "风场大部件",
    "风机",
    "风机发电量数据",
    "风机子节点",
    "风电供应商",
    "黄河上游水电开发西宁分公司",
  ];

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
      <Layout>
        <Sider
          width={400}
          height="100%"
          style={{
            background: "#fff",
            // boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
            position: "fixed",
            right: 0,
            top: -18,
            bottom: 0,
            overflow: "auto",
            zIndex: 1000,
          }}
        >
          {/* 选中节点信息展示区域 */}

          <Card size="large">
            <InfoDisplay
              style={{ userSelect: "text" }}
              title="选中节点信息"
              selectedInputInfo={selectedNodeInfo}
            />
          </Card>
          <Card size="large">
            <InfoDisplay
              style={{ userSelect: "text" }}
              title="选中边信息"
              selectedInputInfo={selectedEdgeInfo}
            />
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
            style={{ width: "100%", height: "100%" }}
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
