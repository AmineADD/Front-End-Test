import React from 'react';
import {connect} from 'react-redux'



    const BoxColors = (props) =>(
      <article className="article"> 
        <div className="row">

          {
             props.data.ListeResult.map((el,i)=>{

              return(<div key={i} className="col-xl-12">
              <div className="box">
             <div className={"box-header bg-color-"+(el["Nombre de bornes disponibles"]===0 ? "danger" : el["Nombre de bornes disponibles"]<25 ? "primary" : "info")}>{el["Description station"].name}</div>
                <div className="box-body bg-color-white">
                  Nb borne disp : {el["Nombre de bornes disponibles"]} <br/>
                  Nombre de vélo en PARK+  : {el["Nombre vélo en PARK+"]} <br/>
                  densityLevel : {el["densityLevel"]} <br/>
                  nbDock : {el["nbDock"]} <br/>
                  nbFreeDock : {el["nbFreeDock"]} <br/>
                  Code de la station : {el["Code de la station"]} <br/>
                  duedate : {el["duedate"]}
                </div>
              </div>
              </div>) 

             })
          }

         
 




</div>


     
      </article>
    )


    const mapStateToProps = state => ({
      data:state.requete
    });
    
    export default connect(mapStateToProps)(BoxColors);
