import React from 'react';
import APPCONFIG from 'constants/appConfig';
import TextField from '@material-ui/core/TextField';
import QueueAnim from 'rc-queue-anim';  
import {connect} from 'react-redux'
import axios from 'axios';
import DEMO from 'constants/demoData';
import {
  choseHeader
} from 'actions/settingsActions';
import fire from '../../../../../constants/Fire';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      brand: APPCONFIG.brand , userE:{},email:'',password:'',logs:{value:'',show:'none'}
    };
  }
  
  UNSAFE_componentWillMount(){
    this.authListener();
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



  authListener(){ 


    fire.auth().onAuthStateChanged((user)=>{ 
      if(user){
          this.setState({
            userE:user
          });
          localStorage.setItem('user',user.uid);
          const client = axios.create({
            baseURL: 'https://restapinvibe.herokuapp.com',
            json: true
          })
          if (fire.auth().currentUser) {
            fire.auth().currentUser.getIdToken(true)
            .then((idToken) => {
              client({
                method: 'get',
                url: '/',
                headers: {
                  'AuthToken': idToken
                }
              }).then((res) => {
                if(res.data==="authorized"){
                  window.location.href = "#/app/dashboard";
                }
              }).catch((error) => {
                console.log(error)
              })
            }).catch((error) => {
              this.response = "Error getting auth token"
            });
          }









 
      }else{
         this.setState({user:null});
         localStorage.removeItem('user');
      }
    });
  }

   
onClickGo=(e)=>{  
e.preventDefault();
fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
}).catch((erro)=>{
  this.setState({
    logs:{value:'No Account found',show:"inline"}
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
                    label="Email"
                    type="email"
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
              </fieldset>
            </form>
          </div>
          <div className="card-action border-0 text-right">

            <a href="#/" className="color-primary" onClick={(e) => this.onClickGo(e)}>Login</a>

          </div>
          <div className="card-action border-0 text-left">

              <div style={{alignItems:"center"}} className="color-primary"> <a href="#/user/sign-up">{this.state.logs.value}</a>  <i style={{display:this.state.logs.show}} className="material-icons">refresh</i>  </div>

          </div>
        </div>
 
        <div className="additional-info" >
          {  <a href={DEMO.signUp}>Sign up</a>  }
          <span className="divider-h" /> Auth Firebase 
        </div>
      </div>
    );
  }
}

const Page = (props) => (
  <div className="page-login">
    <div className="main-body">
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <Login choseHeader={props.choseHeader} />
        </div>
      </QueueAnim>
    </div>
  </div>
);

 
const mapDispatchToProps = dispatch => ({
  choseHeader:(e)=>{
    dispatch(choseHeader(e));
  }
});


export default connect(null,mapDispatchToProps)(Page);
