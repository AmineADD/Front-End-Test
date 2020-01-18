
import 'react-leaflet-fullscreen/dist/styles.css'
import React from 'react'
import { Map, TileLayer, Marker, Popup,Circle,CircleMarker  } from 'react-leaflet';
import { connect } from 'react-redux';
import L from 'leaflet'
import {setPosition,setListeResult} from 'actions/requestActions.js'
import FullscreenControl from 'react-leaflet-fullscreen';
import $ from 'jquery';
import axios from 'axios'
import fire from '../../../../../constants/Fire'
import { isMobile } from 'mobile-device-detect';

class MyMap extends React.Component {

  state = {
    lat: 48.855846,
    lng:  2.347395,
    zoom: 17,
    icon:L.icon({ iconUrl: "https://zupimages.net/up/20/03/a515.png", iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -16] }),

  }
 
  
componentWillMount(){
  if (!fire.auth().currentUser) {
    window.location.href="#/"
    } 
}
    
   componentDidMount(){ 
    $(".leaflet-left").css("z-index", 800); 
    if(isMobile){

      $(".container-fluid").css({
        "padding-left": "0px", "padding-right": "0px","margin-left": "0px", "margin-right": "0px"
      });
    }
  }
  

  clickOnMap(e){
     
    const {setPosition} = this.props;
    const lamap = this.map 
    this.setState({
      zoom:$(lamap)[0].leafletElement.getZoom()
    },()=>{
      setPosition(e.latlng); 
    const position=e.latlng;
    const {parkActivation,achatPossible,parkPlus,etatStation,distance} = this.props.data;
    let data={
      parkActivation:parkActivation?"yes":"no",
      achatPossible:achatPossible?"yes":"no",
      parkPlus:parkPlus? "yes":"no",
      etatStation,
      distance,
      position
    }
    axios.post(`https://restapinvibe.herokuapp.com/stations`,data,{headers:{
      "AuthToken":this.state.AuthToken
    }})
      .then((res) => { 
        const {setListeResult}=this.props;
          setListeResult(res.data)  
      });
 
    });   
 
  } 

  render() {

     const {position} = this.props.data; 
     return (   <Map center={position}     zoom={this.state.zoom} maxZoom={19} style={{width:"100%",height:"100%",cursor:"crosshair"}} onclick={(e)=>this.clickOnMap(e)} ref={(ref) => {this.map=ref  }} >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> 
          <FullscreenControl position="topleft" />
 
   
          <CircleMarker
                  center={position}
                  fillColor="#4285F4" 
                  stroke={true}
                  color='white'
                  fillOpacity={1}
                  radius={10}>
                    <Popup>
                      <span>Position selectionée</span>
                    </Popup>
                    </CircleMarker>

    <Circle
                  center={position}
                  fillColor="blue"  
                  stroke={true}
                  radius={this.props.data.distance}/>
     

      {
 this.props.data.ListeResult.map((st,i)=>{ 
   return <Marker key={i} style={{backgroundColor:"red"}} position={st.loc.coordinates}>

       <Popup>
       {st["Description station"].name}
      </Popup>
   </Marker>
 })


      }




      </Map>
      
 
    )
  }
}



const mapStateToProps = state => ({
  data:state.requete
});

const mapDispatchToProps = dispatch => ({
  setPosition: (t) => {
    dispatch(setPosition(t));
  },
  setListeResult:(t)=>{
    dispatch(setListeResult(t))
  }
});

 
export default connect(
  mapStateToProps 
,mapDispatchToProps)(MyMap)