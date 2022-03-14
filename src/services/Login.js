import { notification } from "antd";
import { post } from "../Utils/httpinterceptor.js";

export const loginApi = async (data) => {
   const response = await post(`api/login`, data);
   
   console.log("res----->",response)
  if (!response.data?.error) {
    notification.success({ message: "Logged In Successfully"});
    return response;
  } else {
    notification.error({ message: response.data.message });
    return response;
  }
};