import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from 'react-router-dom'; 
import DEMO from 'constants/demoData';
import fire from '../../../constants/Fire';
import axios from 'axios'; 
import AlgoliaPlaces from 'algolia-places-react';
import {connect} from 'react-redux'
import {setPosition,setListeResult} from 'actions/requestActions.js'
import { isMobile } from 'mobile-device-detect';

class NavRightList extends React.Component {

  state = {
    anchorEl: null,position:this.props.data.position
  };

  handleClick = event => {
    // console.log( event)
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
 
    this.setState({ anchorEl: null },()=>{
      localStorage.removeItem('user');
      fire.auth().signOut();
      axios.get(`https://restapinvibe.herokuapp.com/c`).then((res)=>{
        console.log(res)
      })
    });
  };

  handleClickSend=()=>{
    
    const {setPosition} = this.props; 
    setPosition(this.state.position); 
    const position=this.state.position;
    const {parkActivation,achatPossible,parkPlus,etatStation,distance} = this.props.data;
    let data={
      parkActivation:parkActivation?"yes":"no",
      achatPossible:achatPossible?"yes":"no",
      parkPlus:parkPlus? "yes":"no",
      etatStation,
      distance,
      position
    }
    axios.post(`https://restapinvibe.herokuapp.com/stations`,data)
      .then((res) => { 
        const {setListeResult}=this.props;
          setListeResult(res.data)  
      });
  }


  handleScriptLoad() { 
    // Declare Options For Autocomplete 
    var options = { types: [`(cities)`] }; 
    
    // Initialize Google Autocomplete 
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
                          document.getElementById(`autocomplete`),
                          options ); 
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener(`place_changed`,this.handlePlaceSelect); 
  }

  render() {
    const { anchorEl } = this.state;
    const styleli={display:'flex',flexDirection:'row',justifyContent:'flex-end'};
//search-box-inner className="" style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}
    return (
      <ul className="list-unstyled float-right"   style={isMobile ? styleli : null} >
        <li className="list-inline-item my-2 d-md-inline-block " style={{width:isMobile ? '' : '80vh'}}>
          <div style={{display:"flex",flexDirection:"row",alignItems:"flex-start"}}>
          <div style={{cursor:"pointer"}} onClick={this.handleClickSend}> <Avatar style={{color: '#fff', backgroundColor: "#00BCD4",marginRight:"2px"}}><i className="material-icons">send</i></Avatar></div>
       <div style={{width:"100%"}}><AlgoliaPlaces   
            placeholder='adresse' 
            options={{appId: 'plU5W0V1C86L',apiKey: '19a8b187327a432595f5890bc8bdfb8b',language: 'fr',countries: ['fr'],}}
            onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>{
              // eslint-disable-next-line
              this.state.position=suggestion.latlng }}
            onLimit={({ message }) => console.log('Fired when you reached your current rate limit.')}
          /></div> 
            <span className="input-bar"></span>
          </div>
        </li>
        <li style={{marginRight: '10px'}}>
          <IconButton
            className="header-btn"
            aria-owns={anchorEl ? 'app-header-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <Avatar alt="avatar" src="https://img.icons8.com/plasticine/100/000000/menu.png" className="rounded-circle header-avatar" />
          </IconButton>

          <Menu
            id="app-header-menu"
            className="app-header-dropdown"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem > <a href="#/app/dashboard"> <i className="material-icons">home</i> <span>La Map</span> </a> </MenuItem>
            <div className="divider divider-solid my-1"></div>
            <MenuItem onClick={this.handleClose}> <a href={DEMO.login}> <i className="material-icons">forward</i> <span>Log Out</span> </a> </MenuItem>
          </Menu>
        </li>
      </ul>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setPosition: (t) => {
    dispatch(setPosition(t));
  },
  setListeResult:(t)=>{
    dispatch(setListeResult(t))
  }
});

const mapStateToProps = state => ({
  data:state.requete
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavRightList));
