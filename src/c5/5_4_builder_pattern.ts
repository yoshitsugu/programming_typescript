type Method = "get" | "post";

interface SendableRequest {
  data: object | null;
  method: Method;
  url: string;
}

class RequestBuilder {
  data: object | null = null;
  method: Method | null = null;
  url: string | null = null;

  setMethod(method: Method): this & Pick<SendableRequest, "method"> {
    return Object.assign(this, { method });
  }

  setData(data: object): this & Pick<SendableRequest, "data"> {
    return Object.assign(this, { data });
  }

  setUrl(url: string): this & Pick<SendableRequest, "url"> {
    return Object.assign(this, { url });
  }

  send(this: SendableRequest) {
    console.log(
      `send: ${this.method} ${this.url} ${JSON.stringify(this.data)}`
    );
  }
}

new RequestBuilder()
  .setUrl("/users")
  .setMethod("get")
  .setData({ firstName: "Anna" })
  .send();

// コンパイルエラー
// new RequestBuilder().setUrl("/users").send();
