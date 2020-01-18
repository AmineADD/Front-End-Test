import 'jquery-slimscroll/jquery.slimscroll.min';
import React from 'react';
import classnames from 'classnames';
import DEMO from 'constants/demoData';
import APPCONFIG from 'constants/appConfig'; 
import SliderDistance from './SliderDistance';
import WithFormControlLabel  from "./CbOption";
import Callouts from './Callouts'
import Avatar from '@material-ui/core/Avatar'; 
import {connect} from 'react-redux'
import $ from 'jquery';
import { isMobile } from 'mobile-device-detect';


class Customizer extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: APPCONFIG.showCustomizer
    }
  }

  componentDidMount() {
    const quickviewInner = this.quickview;
    $(quickviewInner).slimscroll({
      height: '100%'
    });
  }

  toggleCustomizer = (e, close) => {
    e.preventDefault();
    if (this.state.isVisible) {
      this.setState({
        isVisible: false
      },()=>{
        if(isMobile){ 
          $("#quickview-customizer").css({
            width: '410px',height:"100%"})}; 

      })
    } else {
      this.setState({
        isVisible: !this.state.isVisible
      },()=>{ if(isMobile){ 
          $("#quickview-customizer").css({
            width: '340px',height:"100%"})}; 
      })
    }
  }

  render() {
    return (
      <section
        id="quickview-customizer" 
        className={classnames('quickview-wrapper customizer  d-lg-block d-xl-block theme-light', {
          'quickview-open-customizer': this.state.isVisible})
        }
      >
        <a className="customizer-close" href={DEMO.link} onClick={(e) => this.toggleCustomizer(e, true)}>
          <span className="material-icons">close</span>
        </a>
        <a className="customizer-toggle" href={DEMO.link} onClick={(e) => this.toggleCustomizer(e)}>
          <span className="material-icons">settings</span>
        </a>

        <div className="quickview-inner" ref={(c) => { this.quickview = c; }}>
          <p className="customizer-header">Systeme de filtrage </p>
          <p className="small m-0"></p>

          <div className="divider my-4 divider-solid" />
         < WithFormControlLabel/>
 
           
 
          <SliderDistance />

          

          <div className="divider my-4 divider-solid" />

          <div  className="divider my-4">
          <p className="customizer-header"  style={{float:"left"}}>Liste Stations </p> 
          <span style={{color:"Brown",float:"right"}} id="ListeStationsCount"  > {this.props.data.ListeResult.length} </span>
          </div>


          <div className="divider my-4 divider-solid" />


          <div className="divider my-4" style={{ clear: "both", display: "flex", flexDirection: "row", alignItems: "center" }} >
            <span>Couleurs concerne Borne Disponible par station </span>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div><Avatar style={{ margin: 10, backgroundColor: '#EF5350' }}>&#61;0</Avatar></div>
              <div><Avatar style={{ margin: 10, color: '#fff', backgroundColor: "#00BCD4" }}>&#62;25 </Avatar></div>
              <div><Avatar style={{ margin: 10, color: '#fff', backgroundColor: "#2196F3" }}>&#60;25</Avatar></div>
            </div>
          </div>


          <Callouts/>











          <div className="text-right">

            
            {
           // eslint-disable-next-line
            <a target="_blank" href={DEMO.productLink}>Contact</a>
            }
          </div>
        </div>
      </section>
    );
  }
}


const mapStateToProps = state => ({
  data:state.requete
});

export default connect(mapStateToProps)(Customizer);
