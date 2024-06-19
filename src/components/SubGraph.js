import React, { useEffect, useRef, useState } from "react";
import useResizeAware from "react-resize-aware";
import PropTypes from "prop-types";
import Neovis from "neovis.js/dist/neovis.js";
import { generateLabelConfigs } from "./NeoGraph";
import { labels } from "./Constant";

//这是展示Neo4j图形的组件，它使用了Neovis.js库，它可以将Neo4j图形展示在网页上。
const SubGraph = props => {
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
    } catch (e) {
      console.error(e);
    }
    //添加点击边的事件监听器
  }, [neo4jUri, neo4jUser, neo4jPassword, cypherQuery]);

  return (
    <div
      id={containerId}
      ref={visRef}
      style={{ width: "100%", height: "510px", border: "1px solid #ccc" }}
    />
  );
};
export { SubGraph };
