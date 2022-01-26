import Cookies from "universal-cookie";

const cookies = new Cookies();

const setUserInfo = (userInfo) => {
  cookies.set("userInfo", JSON.stringify(userInfo), { path: "/" });
};

const getUserInfo = () => {
  return cookies.get("userInfo");
};

export const cookieManager = {
  setUserInfo,
  getUserInfo,
};
export default cookieManager;
