function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args);
}

console.log(
  "call",
  call(_ => _ + 10, 100)
);

function call2<T extends unknown[], U, R>(
  f: (arg1: U, arg2: string, ...args: T) => R,
  arg1: U,
  arg2: string,
  ...args: T
): R {
  return f(arg1, arg2, ...args);
}

console.log(
  "call2",
  call2((a, b) => a + b.length, 10, "hoge")
);

// コンパイルエラー
/* console.log(
  "call2",
  call2((a: number, b: number) => a + b, 10, 100)
); */
