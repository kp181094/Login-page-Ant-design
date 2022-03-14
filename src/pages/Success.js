import React from 'react';
import { Result, Button } from 'antd';
import { useLocation } from "react-router-dom";
import {  useNavigate } from "react-router-dom";

const Success = () => {
  const location = useLocation();
   const navigate = useNavigate();
  console.log("location.state", location.state);

  
  const Redirect = () => {
     navigate("/");
  }
  return (
    <Result
      status="success"
      title="Successfully Logged In"
      subTitle={`Welcome ${location?.state?.key?.username} to ATools.`}
      extra={[
        <Button type="primary" key="console" onClick={Redirect}>
          Go to Login
        </Button>,
      ]}
    />
  );
}

export default Success