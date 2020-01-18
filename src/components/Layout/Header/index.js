import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames'; 
import NavLeftList from './NavLeftList'; 
import NavRightList from './NavRightList';
import $ from 'jquery'; 


class Header extends React.Component {
  componentDidMount() {
    const sidebarToggler = this.sidebarBtn;
    const $sidebarToggler = $(sidebarToggler);
    const $body = $('#body');

    $sidebarToggler.on('click', (e) => {
      // _sidebar.scss, _page-container.scss
      $body.toggleClass('sidebar-mobile-open');
    });
  }

  render() {
    const { colorOption } = this.props;

    return (
      <section className="app-header" >
        <div
          className={classnames('app-header-inner', {
            'bg-color-light': ['11', '12', '13', '14', '15', '16', '21'].indexOf(colorOption) >= 0,
            'bg-color-dark': colorOption === '31',
            'bg-color-primary': ['22', '32'].indexOf(colorOption) >= 0,
            'bg-color-success': ['23', '33'].indexOf(colorOption) >= 0,
            'bg-color-info': ['24', '34'].indexOf(colorOption) >= 0,
            'bg-color-warning': ['25', '35'].indexOf(colorOption) >= 0,
            'bg-color-danger': ['26', '36'].indexOf(colorOption) >= 0 })}
        >
         

          <div className="brand d-none d-lg-inline-block d-xl-inline-block">
          </div>

          <div className="top-nav-left d-none d-lg-none d-xl-inline-block">
            <NavLeftList />
          </div>

          <div className="top-nav-right">
          <NavRightList />
           </div>
        </div>
      </section>
    );
  }
}


const mapStateToProps = state => ({
  colorOption: state.settings.colorOption,
});

export default connect(
  mapStateToProps
)(Header);

