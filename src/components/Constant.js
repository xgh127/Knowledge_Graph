export const menuItems = [
  {
    key: "overall",
    label: "总体框架",
    query:
      "MATCH p=(a {name: '云南国际'})-[r1]->(b)-[r2]->(c)-[r3]->(d) RETURN *",
  },
  {
    key: "projectManagement",
    label: "项目管理",
    children: [
      {
        key: "laoqingshan",
        label: "老青山风场",
        query: "MATCH p=(a {name: '老青山项目'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "dgshan",
        label: "打挂山风场",
        query: "MATCH p=(a {name: '打挂山风场'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "xblfc",
        label: "小白龙风场",
        query: "MATCH p=(a {name: '小白龙风场'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "xrdshan",
        label: "仙人洞风场",
        query: "MATCH p=(a {name: '仙人洞风场'})-[r1]->(b)-[r2]->(c) RETURN *",
      },

      {
        key: "xiutianguangfu",
        label: "秀田光伏",
        query: "MATCH p=(a {name: '秀田光伏'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "damoguguangfu",
        label: "大莫古光伏",
        query: "MATCH p=(a {name: '大莫古光伏'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "xxguangfu",
        label: "小西村光伏",
        query: "MATCH p=(a {name: '小西村光伏'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "bdguangfu",
        label: "北大村光伏",
        query: "MATCH p=(a {name: '北大村光伏'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "glxpguangfu",
        label: "关岭新铺光伏",
        query:
          "MATCH p=(a {name: '关岭新铺光伏'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      // 其他子菜单项...
    ],
  },
  {
    key: "xiangmuguzhang",
    label: "项目故障",
    children: [
      {
        key: "lqsgz",
        label: "老青山故障",
        query: "MATCH p=(a {name: '老青山故障'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "dgshangz",
        label: "打挂山故障",
        query: "MATCH p=(a {name: '打挂山故障'})-[r1]->(b) RETURN *",
      },
      {
        key: "xblgz",
        label: "小白龙故障",
        query: "MATCH p=(a {name: '小白龙故障'})-[r1]->(b) RETURN *",
      },
      {
        key: "xrdshangz",
        label: "仙人洞故障",
        query: "MATCH p=(a {name: '仙人洞故障'})-[r1]->(b) RETURN *",
      },

      {
        key: "xiutianguangfugz",
        label: "秀田故障",
        query: "MATCH p=(a {name: '秀田故障'})-[r1]->(b)RETURN *",
      },
      {
        key: "damoguguangfugz",
        label: "大莫古故障",
        query: "MATCH p=(a {name: '大莫古故障'})-[r1]->(b) RETURN *",
      },
      {
        key: "xxguangfugz",
        label: "小西村故障",
        query: "MATCH p=(a {name: '小西村故障'})-[r1]->(b) RETURN *",
      },
      {
        key: "bdguangfugz",
        label: "北大村故障",
        query: "MATCH p=(a {name: '北大村故障'})-[r1]->(b) RETURN *",
      },
      {
        key: "glxpguangfugz",
        label: "关岭新铺故障",
        query: "MATCH p=(a {name: '关岭新铺故障'})-[r1]->(b) RETURN *",
      },
      // 其他子菜单项...
    ],
  },
  {
    key: "operationData",
    label: "运营数据",
    children: [
      {
        key: "lqsqqsj",
        label: "老青山运营数据",
        query:
          "MATCH p=(a {name: '老青山运营数据'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "dgsqqsj",
        label: "打挂山运营数据",
        query:
          "MATCH p=(a {name: '打挂山运营数据'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "xblqsj",
        label: "小白龙运营数据",
        query:
          "MATCH p=(a {name: '小白龙运营数据'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "xrdcyysj",
        label: "仙人洞运营数据",
        query:
          "MATCH p=(a {name: '仙人洞运营数据'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "xxcyysj",
        label: "小西村运营数据",
        query:
          "MATCH p=(a {name: '小西村运营数据'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "dmgyysj",
        label: "大莫古运营数据",
        query:
          "MATCH p=(a {name: '大莫古运营数据'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "bdcyysj",
        label: "北大村运营数据",
        query:
          "MATCH p=(a {name: '北大村运营数据'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "xtyysj",
        label: "秀田运营数据",
        query:
          "MATCH p=(a {name: '秀田运营数据'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
      {
        key: "glxfyysj",
        label: "关岭新铺运营数据",
        query:
          "MATCH p=(a {name: '关岭新铺运营数据'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
    ],
  },
  {
    key: "supplyChain",
    label: "大部件供应链",
    children: [
      {
        key: "gddbj",
        label: "光电大部件公司",
        query:
          "MATCH p=(a {name: '光电大部件公司'})-[r1]->(b)-[r2]->(c) RETURN *",
      },

      {
        key: "fddbj",
        label: "风电大部件公司",
        query:
          "MATCH p=(a {name: '风电大部件公司'})-[r1]->(b)-[r2]->(c) RETURN *",
      },
    ],
  },
  {
    key: "newEnergyPolicy",
    label: "新能源政策",
    query: "MATCH p=()-[r:`电力政策`]->() RETURN p LIMIT 25",
  },
  {
    key: "dataUpdate",
    label: "数据更新",
    query: "MATCH p=()-[r:`属于`]->() RETURN p LIMIT 25",
  },
  // 可以根据需要继续添加更多菜单项
];
export const labels = [
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
  "设计施工公司",
  "设计施工单位",
  "项目运营数据",
];
export const searchTypeToCypher = [
  {
    type: 0,
    cypher: "MATCH p=(a)-[r1]->(b) WHERE a.name =~ '.*${target}.*' RETURN *",
  },
  {
    type: 1,
    cypher: "MATCH p=(a)-[r1]->(b) WHERE b.name =~ '.*${target}.*' RETURN *",
  },
  {
    type: 2,
    cypher:
      "MATCH p=(a)-[r1]->(b)-[r2]->(c) WHERE b.name =~ '.*${target}.*' RETURN *",
  },
  {
    type: 3,
    cypher:
      "MATCH p=(a)-[r1]->(b)-[r2]->(c) WHERE a.name =~ '.*${target}.*' RETURN *",
  },
];
// export function generateRelationshipConfigs() {
//   const baseRelationshipConfig = {
//     thickness: 0.1, // 设置所有关系的厚度为0.1
//   };
//   const relationshipConfig = {};
//   allRelationships.forEach(relationship => {
//     relationshipConfig[relationship] = { ...baseRelationshipConfig };
//   });
//
//   return relationshipConfig;
// }
// export const allRelationships = [
//   "供应商",
//   "公司",
//   "风机故障",
//   "风机故障检测",
//   "风机信息",
//   "运营故障",
//   "设计施工单位",
//   "设计施工单位名称",
//   "风电项目",
//   "主变压器",
//   "主机",
//   "主机厂家",
//   "光电项目",
//   "全委托",
//
//   "公司消缺项",
//   "属于",
//   "市场分析",
//   "市场参与者",
//   "整体",
//   "机组变压器",
//   "电力价格",
//   "电力市场",
//   "电力政策",
//   "老青山项目故障",
//   "自主运维",
//   "运营",
//   "运营单位",
//   "项目消缺项",
//   "风场项目",
//   "风机分支",
//   "风机发电数据",
//   "10号风机",
//   "11号风机",
//   "12号风机",
//   "13号风机",
//   "14号风机",
//   "15号风机",
//   "16号风机",
//   "17号风机",
//   "18号风机",
//   "19号风机",
//   "1号风机",
//   "20号风机",
//   "21号风机",
//   "22号风机",
//   "23号风机",
//   "24号风机",
//   "25号风机",
//   "26号风机",
//   "27号风机",
//   "28号风机",
//   "29号风机",
//   "2号风机",
//   "30号风机",
//   "31号风机",
//   "32号风机",
//   "33号风机",
//   "3号风机",
//   "4号风机",
//   "5号风机",
//   "6号风机",
//   "7号风机",
//   "8号风机",
//   "9号风机",
// ];
