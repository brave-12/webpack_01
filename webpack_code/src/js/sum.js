// ...args剩余参数（展开运算符）
export default function sum(...args) {
    return args.reduce((p, c) => p + c, 0);
  }