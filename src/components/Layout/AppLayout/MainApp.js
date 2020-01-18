import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';
import Header from 'components/Layout/Header';
//import Sidenav from 'components/Layout/Sidenav';
import Footer from 'components/Layout/Footer';
import Customizer from 'components/Customizer';
import LoadingComponent from 'components/Loading';


let Dashboard = loadable({
  loader: () => import('routes/app/routes/dashboard/'),
  loading: LoadingComponent
}) 

class MainApp extends React.Component {


  render() {
    const { match } = this.props;
 
    return (
      <div className="main-app-container">
        {/* <Sidenav /> */}

        <section id="page-container" className="app-page-container">
           <Header /> 

          <div className="app-content-wrapper">
            <div className="app-content">
              <div className="h-100">
                <Route path={`${match.url}/dashboard`} component={Dashboard} />
              </div>
            </div>

            {<Footer /> }
          </div>
        </section>

      <Customizer /> 
      </div>
    );
  }
}

export default MainApp;
