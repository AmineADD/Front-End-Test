import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import MyMap from './MyMap'



const Main = (props) => (
  <div className="row" style={{flexWrap:"nowrap", marginTop:'10px'}}>
    <div className="col-xl-12">
      <div className="box box-default">
        <div className="box-body" style={{width:"80wh",height:"87vh"}}>
         <MyMap/>
        </div>
      </div>
    </div>
  </div>
);
 









const Dashboard = (props) =>{
  
  
  var Show ;
   Show = <div className="page-fullscreen container-fluid"> <Main/> </div>

 return Show;
}










const mapStateToProps = state => ({
  headerValue: state.settings.headervalue,
  data:state.requete
});
 

export default connect(
  mapStateToProps 
)(Dashboard);
