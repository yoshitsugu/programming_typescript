function is<T>(...args: T[]) {
  if (args.length < 2) {
    throw Error("2つ以上の引数を指定してください");
  }

  return args.slice(1).every(a => args[0] === a);
}

console.log("1 is 1:", is(1, 1));
console.log('"string" is "hoge:"', is("string", "hoge"));
// コンパイルエラー
// console.log('1 is "hoge":', is(1, "hoge"));
