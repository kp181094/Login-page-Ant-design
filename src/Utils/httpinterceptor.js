import axios from "axios";

export const BASE = "https://reqres.in/";
const baseURL = `${BASE}`;

const handleError = (err) => {
  const errorResponse = {
    data: { message: "Something went wrong.", error: true },
  };

  if (err.message === "Network Error") {
    errorResponse.data.message = err.message;
    return errorResponse;
  }
  const { response } = err;
  if (response.status === 500) {
    try {
      const res = JSON.parse(response.data.split("}")[1] + "}");
      if (res.statusCode === "401") {
         console.log("error parsing 401 error");
      }
    } catch (err) {
      console.log("error  parsing 500 error");
    }
  }
  return errorResponse;
};


export const post = async (url, bodyObj = {}, mediaFile = false) => {
  let apiUrl = baseURL + url;
  let header = {
    "Access-Control-Allow-Origin": "*",
  };
  if (mediaFile) {
    let formData = new FormData();
    Object.keys(bodyObj).map((key) => {
      formData.append(key, bodyObj[key]);
    });
    bodyObj = formData;

    header["Content-Type"] = "multipart/form-data";
  }

  try {
    return await axios.post(apiUrl, bodyObj, {
      headers: header,
    });
  } catch (err) {
    return handleError(err);
  }
};


