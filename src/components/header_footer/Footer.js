import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                    <div id="footer">

        <div className="container">
          <div className="row">
            <div className="col-md-3">
               <p className="footlist ">Copyright &copy; 2017 Elit-Vitae</p>
            </div>


            <div className="col-md-9">
              <ul className="footer-menu ">
                  <li className="facebook"><a  href="https://www.facebook.com/lifemadeeazzy/"><i className="fa fa-facebook"></i></a></li>
                  <li className="googleplus"><a target="_blank" href="https://plus.google.com/u/0/101469961552096631904"><i className="fa fa-google-plus"></i></a></li>
                  <li className="youtube"><a target="_blank" href="https://www.youtube.com/channel/UC7tvRFsjyYt5Sim47siKDsg/featured"><i className="fa fa-youtube"></i></a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>



            </Fade>
        </footer>
    );
};

export default Footer;