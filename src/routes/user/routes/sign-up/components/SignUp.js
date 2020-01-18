import React from 'react';
import APPCONFIG from 'constants/appConfig';
import TextField from '@material-ui/core/TextField';
import QueueAnim from 'rc-queue-anim';
import DEMO from 'constants/demoData';
import fire from '../../../../../constants/Fire';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand,username:'',email:'',password:'',logs:{value:'',display:'none'}
    };
  }
 

  handlechangeEmail=(e)=>{
    this.setState({
      email:e.target.value
    })
}


handlechangePassword=(e)=>{
  this.setState({
  password:e.target.value
})
}


handlechangeUsername=(e)=>{
  this.setState({
    username:e.target.value
})};

handleGo=()=>{
  
fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
  window.location.href="#/"
}).catch((erro)=>{
  this.setState({
    logs:{
      value:erro.code,
      display:"inline"
    }
  })
});

}

  render() {
    return (
      <div className="body-inner">

        <div className="card card-white">
          <div className="card-content">
            <section className="logo text-center">
              <h1><a href="#/">{this.state.brand}</a></h1>
            </section>

            <form className="form-horizontal">
              <fieldset>
                <div className="form-group">
                  <TextField
                    label="Username"
                    fullWidth
                    onChange={(e)=>this.handlechangeUsername(e)}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Email"
                    type="email"
                    className="mt-3"
                    fullWidth
                    onChange={(e)=>this.handlechangeEmail(e)}
                  />
                </div>
                <div className="form-group">
                  <TextField
                    label="Password"
                    type="password"
                    className="mt-3"
                    fullWidth
                    onChange={(e)=>this.handlechangePassword(e)}
                  />
                </div>
                <div className="divider" />
                <div className="form-group">
                  <p className="text-small">By clicking on sign up, you agree to <a href={DEMO.link}><i>terms</i></a> and <a href={DEMO.link}><i>privacy policy</i></a></p>
                </div>
              </fieldset>
            </form>
          </div> 
           <p className="text-small" style={{marginLeft:"15px"}}>  <span style={{color:"red",display:this.state.logs.display}}>{this.state.logs.value}</span></p>
            
          <div className="card-action border-0 text-right">
          <a href="#/user/login" className="color-gray-light"  >Go to Login</a>
          {    
          // eslint-disable-next-line       
          <a  onClick={this.handleGo} style={{color:"#4285F4",cursor:"pointer"}} className="color-primary">Sign Up</a>
        }        
         </div>
        </div>

      </div>
    );
  }
}

const Page = () => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <SignUp />
        </div>
      </QueueAnim>
    </div>
  </div>
);

export default Page;
