import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Scrol from "./Scrol";
const About=()=>{
    return(
        <>
        <Container>
      <Row>
        <h1 className="text-center">ABOUT</h1>
        <Col lg={12}>
            <p className="text-justify">Magnam dolores commodi suscipit. Necessitatibus eius consequatur 
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                 quisquam cupiditate. Et nemo qui impedit suscipit 
                
                alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </Col>
        
      </Row>
      <Row>
        <Col lg={4} xs={12} md={12}>
            <img src="https://media.istockphoto.com/id/1354244046/photo/cheerful-indian-guy-businessman-with-laptop-having-phone-conversation.jpg?s=1024x1024&w=is&k=20&c=raBELfohqYLxdK8z6_acFyB1cbBoeRkexFKvFlnLL8E=" 
               width="400"
               height="400"
               className="img-fluid"
               alt="pkj"/>
        </Col>
        <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>front end developer &amp; UI Developer</h3>
            <p className="fst-italic">
            I am pankaj yadav i belong to uttar pradesh from ghazipur.I am front end developer at Boonoz pvt ldt.
            I have one year experience as reactjs developer.i have done one project in organization.
            
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 1 May 1997</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Website:</strong> www.pankajbaba.com</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> 6307899971</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>City:</strong> Noida</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 26</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong>B.tech</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>PhEmailone:</strong> py796880@gmail.cpm</li>
                  <li><i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
          </Row>
          <Row>
            <Col lg={12}>
                <h1 className="text-center">Skills</h1>
                </Col>
                <Col lg={6}>
                    <ul className="list-group">
                        <li className="list-group-item">HTML</li>
                        <li className="list-group-item">CSS</li>
                        <li className="list-group-item">JAVASCRIPT</li>
                        <li className="list-group-item">Reactjs</li>
                    </ul>
                </Col>
                <Col lg={6}>
                    <ul className="list-group">
             
                <li className="list-group-item">REDUX</li>
                <li className="list-group-item">Bootstrap</li>

                <li className="list-group-item">RESTAPI</li>
                <li className="list-group-item">POSTMAN</li>

                    </ul>
               
                    
                </Col>
          </Row>
          <Row>
            <Col lg={12}> <h1 className="text-center">Facts</h1></Col>
         
            <Col lg={12}>
          <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
            </Col>
            <div class="row counters">

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="0" class="purecounter">232</span>
            <p>Clients</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="0" class="purecounter">521</span>
            <p>Projects</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="0" class="purecounter">1463</span>
            <p>Hours Of Support</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="0" class="purecounter">15</span>
            <p>Hard Workers</p>
          </div>

        </div>
        <footer id="footer" style={{backgroundColor:"white",width:"100%",height:"160px"}}>
    <div class="container">
      <div className="copyright d-flex justify-content-center  align-items-center">
        © Copyright <strong><span>pankaj</span></strong>. All Rights Reserved
      </div>
         
    </div>
  </footer>
          </Row>
          <Scrol/>
    </Container>
    
        </>
    )
}
export default About;