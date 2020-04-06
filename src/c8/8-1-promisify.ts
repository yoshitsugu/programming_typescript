type PromisifyTargetFunction<T> = (
  arg: T,
  cb: (...args: unknown[]) => unknown
) => unknown;

const promisify = <T>(
  f: PromisifyTargetFunction<T>
): ((arg: T) => Promise<any>) => {
  return (arg: T) => {
    return new Promise((resolve, reject) => {
      try {
        f(arg, resolve);
      } catch (e) {
        reject(e);
      }
    });
  };
};

const promisifyTest = (sec: number, cb: () => void) => {
  setTimeout(cb, sec);
};

const promisifiedTimer = promisify(promisifyTest);

promisifiedTimer(2000)
  .then(() => {
    console.log("test2000");
  })
  .catch((error) => console.error("error", error));

promisifiedTimer(1000)
  .then(() => {
    console.log("test1000");
  })
  .catch((error) => console.error("error", error));
