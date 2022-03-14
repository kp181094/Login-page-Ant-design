import "../App.less";
import { Card,  Row, Col } from "antd";
import "../Login.scss"
import FormLogin from "./FormLogin";


const MainPage = () => {
   return (
     <>
       <div className="centered-container">
         <div class="container" id="container">
           <Card>
             <Row style={{ height: "80vh" }}>
               <Col xs={24} lg={10}>
                 {" "}
                 <div style={{ height: "80vh" }} className="header-container">
                   <div className="text-container">
                     <h3 className="text-strong">Welcome Back</h3>
                     <p>Subtitle, text goes here.</p>
                   </div>
                   <FormLogin />
                 </div>
               </Col>
               <Col xs={0} lg={14}>
                 <div className="overlay"></div>
               </Col>
             </Row>
           </Card>
         </div>
       </div>
     </>
   );
};

export default MainPage;
