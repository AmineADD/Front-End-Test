import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux'
import {setParkActivation,setAchatPossible,setParkPlus,setEtatStation} from 'actions/requestActions'



class SwitchLabels extends React.Component {
  state = {
    checkedA: false,
    checkedB: true,
    checkedC:false,
    etat: 'Operative'
  };

  handleChangeParkActiv = name => event => {
    const {setParkActivation}=this.props.props;
    this.setState({ checkedA: event.target.checked });
   setParkActivation(event.target.checked);
   
  };
 
  handleChangeAchatPoss= name => event => {
    const {setAchatPossible}=this.props.props;
    this.setState({ checkedB: event.target.checked });
    setAchatPossible(event.target.checked);
  };
 
  handleChangeParkPlus = name => event => {
    const {setParkPlus}=this.props.props;
    this.setState({ checkedC: event.target.checked });
    setParkPlus(event.target.checked);
  };
 


 handleOnChangeEtat = event => {
  const {setEtatStation}=this.props.props;
    this.setState({ etat: event.target.value });
    setEtatStation(event.target.value);
  };


  render() {
    return (
      <FormGroup column="true">
        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedA}
              onChange={this.handleChangeParkActiv('checkedA')}
              value="checkedA"
              color="primary"
            />
          }
          label="PARK + activation"
        />

        <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedB}
              onChange={this.handleChangeAchatPoss('checkedB')}
              value="checkedB"
              color="primary"
            />
          }
          label="Achat possible (CB)"
        /> 




     <FormControlLabel
          control={
            <Switch
              checked={this.state.checkedC}
              onChange={this.handleChangeParkPlus('checkedC')}
              value="checkedC"
              color="primary"
            />
          }
          label="PARK +"
        /> 


         <FormControl style={{margin: "5px",minWidth: 120}} >
          <InputLabel htmlFor="age-simple">Etat de station</InputLabel>
          <Select
            value={this.state.etat}
            onChange={this.handleOnChangeEtat}
            inputProps={{
              etat: 'Operative',
            }}
          >
            <MenuItem selected value={"Operative"}>Operative</MenuItem>
            <MenuItem value={"Work in progress"}>Work in progress</MenuItem>
            <MenuItem value={"Close"}>Close</MenuItem>

          </Select>
        </FormControl>

      </FormGroup>
    );
  }
}

const Box = (props) => (
    <section> 
        <div className="divider" />
        <div className="row m-0 theme-options clearfix">
          <div className="col-12">
         <SwitchLabels props={props} />
         </div>
      </div>
      </section>
 
)

const mapStateToProps = state => ({
  data:state.requete
});

const mapDispatchToProps = dispatch => ({
  setParkActivation: (t) => {
    dispatch(setParkActivation(t));
  },
  setAchatPossible:(t)=>{
    dispatch(setAchatPossible(t))
  },
  setParkPlus: (t)=>{
    dispatch(setParkPlus(t));
  },
  setEtatStation : (t) =>{
    dispatch(setEtatStation(t))
  }
});




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Box);
