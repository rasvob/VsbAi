import React from 'react';
import { Row, Col } from "react-bootstrap";
import { SizeMe } from 'react-sizeme'
import fei_logo from "../Assets/fei_big_logo.png" 

const MapComponent = () => {
    return (
        <SizeMe>
            {
                ({size}) => {
                    console.log(size.width)
                    return (
                        <div className="container-fluid pl-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.567105027674!2d18.15884441587938!3d49.83180093962745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e152397d9f47%3A0xe521626078f3bc54!2sFakulta%20elektrotechniky%20a%20informatiky%2C%20V%C5%A0B-TUO!5e0!3m2!1sen!2scz!4v1601636337965!5m2!1sen!2scz" title="FEECS Map" width={size.width} height="600" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    );
                }
            }
        </SizeMe>

    );
};

export const ContactPage = (props) => {
    return (
        <div className="flex-fill">
            <div className="jumbotron vertical-center jumbotron-fluid py-4 bg-primary text-left">
                <div className="container text-white">
                    <h1 className="text-white">Connect with us!</h1>
                    <p className="lead">Are you interested in our research? Don't hesitate to make a first step!</p>
                </div>
            </div>

            <div className="container">
                <h3>Okay, whom should I contact to discuss the research?</h3>
                <div>
                    <p>You can contact either <strong><a href="mailto:jan.platos@vsb.cz">doc. Ing. Jan Platoš, Ph.D.</a></strong> or <strong><a href="mailto:radek.svoboda@vsb.cz">Ing. Radek Svoboda</a></strong></p>
                </div>

                <div>
                    <h3>Where can you find us?</h3>
                    <p>We are part of <a href="https://katedrainformatiky.cz/">Department of Computer Science, FEECS, VŠB - Technical University of Ostrava</a></p>

                    <h4>Address</h4>
                    <Row>
                        <Col>
                        <p>Fakulta elektrotechniky a informatiky, VŠB-TU Ostrava <br/>
                        17. listopadu 2172/15 <br/>
                        708 00  Ostrava - Poruba <br/>
                        Czech Republic
                        </p>
                        </Col>

                        <Col>
                        <img className="img-fluid" width="486px" src={fei_logo} alt="Department of Computer Science, FEECS, VŠB-TUO"/>
                        </Col>
                    </Row>
                    
                </div>

                

                <div>
                </div>

                
                
            </div>

            <MapComponent />
        </div>
    )
}

export default ContactPage;