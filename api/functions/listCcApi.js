export function request(ctx) {
  console.log("listCcApi");
  console.log(ctx);

  return {
    operation: "Invoke",
    payload: {
      type: ctx.args.type,
      appSyncContext: ctx,
    },
  };
  // return {
  //   method: "GET",
  //   params: {
  //     query: {
  //       Action: "ListResources",
  //       TypeName: "AWS::Logs::LogGroup",
  //       Version: "2021-09-30",
  //     },
  //   },
  //   resourcePath: `/`,
  // };
}

export function response(ctx) {
  console.log("listCcApi response");
  console.log(ctx);

  return ctx.result;
  // const { statusCode, body } = ctx.result;
  // // if response is 200, return the response
  // if (statusCode === 200) {
  //   return JSON.parse(body).ResourceDescriptions;
  // }
  // // if response is not 200, append the response to error block.
  // util.appendError(body, statusCode);
}
