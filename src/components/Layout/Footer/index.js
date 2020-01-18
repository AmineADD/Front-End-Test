import React from 'react';
import DEMO from 'constants/demoData';

class Footer extends React.Component {
  render() {
    return (
      <section className="app-footer">
        <div className="container-fluid">
          <span className="float-left"> 
          {
             // eslint-disable-next-line
            <span>Copyright © <a className="brand" target="_blank" href={DEMO.productLink}>ADDAJOU<img alt="icon" src="assets\images-demo\linkedin.png"/></a></span>
          }
          </span>
          {  // eslint-disable-next-line
            <span className="float-right" style={{marginTop:"25px"}}>
            <span>15 JAN 2020<i className="material-icons">favorite_border</i></span>
          </span>
          }
        </div>
      </section>
    );
  }
}

export default Footer;
