const sendResponse = (res, data, message, success, code) => {
  const responseObj = {
    responseData: data,
    message: message,
    success: success,
    responseCode: code,
  };
  res.format({
    json: () => {
      res.send(responseObj);
    },
  });
};
const sendError = (res, data, msg) => {
  if (!res) {
    return false;
  }
  sendResponse(res, data, msg || "Request Failed", false, 400);
};
export { sendResponse, sendError };
