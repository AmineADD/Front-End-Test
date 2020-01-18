import React from 'react'; 
import Basic from './Basic';
class SliderDistance extends React.Component {
 
  render() {
    return (
      <section>
        <h4 className="section-header">Distance Options</h4>
        <div className="divider" />

        <div className="row m-0 theme-options clearfix">
          <div className="col-12">
            <Basic/>
          </div>
          
        </div>
      </section>
    );
  }
}
 

export default  SliderDistance ;
