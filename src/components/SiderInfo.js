export const menuItems = [
  {
    key: "overall",
    label: "总体框架",
    query: "MATCH (n:`一级节点`) RETURN n",
  },
  {
    key: "projectManagement",
    label: "项目管理",
    children: [
      {
        key: "laoqingshan",
        label: "老青山项目",
        query: "MATCH (n:`上能电气`) RETURN n LIMIT 25",
      },
      {
        key: "guangfuchang",
        label: "光伏村",
        query: "MATCH p=(a)-[r]->(b) WHERE a.name =~ '光伏.*' RETURN *",
      },
      // 其他子菜单项...
    ],
  },
  {
    key: "operationData",
    label: "运营数据",
    query: "MATCH p=()-[r:`24号风机`]->() RETURN p LIMIT 25",
  },
  {
    key: "supplyChain",
    label: "大部件供应链",
    query: "MATCH p=()-[r:`公司消缺项`]->() RETURN p LIMIT 25",
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
