import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import Slider from '@material-ui/lab/Slider';
import { connect } from 'react-redux'
import {setDistance} from 'actions/requestActions'
import { isMobile } from 'mobile-device-detect';

const styles = {
  root: {
    width: 300,
    display:'flex',
    flexWrap:'noWrap',
    alignItems: "center"
  },
};

class SimpleSlider extends React.Component {
  state = {
    value: 250,
  };

  handleChange = (event, value) => {
    const {setDistance}=this.props.props
    this.setState({ value });
    setDistance(value)
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div > 
      <div className={classes.root}> 
      <Slider value={value} aria-labelledby="label" min={0} max={3000} step={250} onChange={this.handleChange} /><span style={{display:isMobile?"none":''}}>{this.state.value}m</span>
     </div>
       <span style={{display:isMobile?"block":'none'}}>{this.state.value}m</span>
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleSlider1 = withStyles(styles)(SimpleSlider);

const Box = (props) => {
  return(
    <SimpleSlider1 props={props}/>
  )
}


const mapStateToProps = state => ({
  data:state.requete
});

const mapDispatchToProps = dispatch => ({
  setDistance: (t) => {
    dispatch(setDistance(t));
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Box);