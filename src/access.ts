// 定义一个类型，限制result的键必须为accessMap的键
type ResultType = keyof typeof accessMap;

// 全部权限
const accessMap = {
  A: 1,
  B: 2,
  C: 3,
  D: 4
};

// 后端所允许的权限
const authorities: Record<string, boolean> = await fetch('./access.json').then((res) => {
  return res.json();
});

const result = {} as Record<ResultType, boolean>;
Object.entries(accessMap).forEach(([key]) => {
  result[key as ResultType] = !!authorities[key];
});

export default result;
