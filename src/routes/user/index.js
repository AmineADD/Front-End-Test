import React from 'react';
import { Route } from 'react-router-dom';

import PageConfirmEmail from './routes/confirm-email/'
import PageForgotPassword from './routes/forgot-password/'
import PageLockScreen from './routes/lock-screen/'
import PageLogin from './routes/login/'
import PageSignUp from './routes/sign-up/'
import './styles.scss';


const Page = ({ match }) => (
  <div>
    <Route path={`${match.url}/confirm-email`} component={PageConfirmEmail}/>
    <Route path={`${match.url}/forgot-password`} component={PageForgotPassword}/>
    <Route path={`${match.url}/lock-screen`} component={PageLockScreen}/>
    <Route path={`${match.url}/login`} component={PageLogin}/>
    <Route path={`${match.url}/sign-up`} component={PageSignUp}/>
  </div>
)

export default Page;
