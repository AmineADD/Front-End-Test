import React from 'react';
import { withRouter } from 'react-router-dom';
 
class NavLeftList extends React.Component {

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
   

    return (
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item">
          <div>
          <img   src="assets/images-demo/Logo.png" style={{marginLeft:"250px",width:"250px",height:"60px"}} alt="Logo"/>
           
          </div>
        </li>
      </ul>
    );
  }
}

export default withRouter(NavLeftList);
