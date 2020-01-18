import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
import 'jquery-slimscroll/jquery.slimscroll.min';
// import DEMO from 'constants/demoData';

import {connect} from 'react-redux'
import {
  choseHeader
} from 'actions/settingsActions';

class SidebarContent extends React.Component {

  componentDidMount() {
    const { history } = this.props;
    const nav = this.nav;
    const $nav = $(nav);

    // scroll
    $nav.slimscroll({
      height: '100%'
    });


    // Append icon to submenu
    $nav.find('.prepend-icon').prepend('<i class="material-icons">keyboard_arrow_right</i>');


    // AccordionNav
    const slideTime = 250;
    const $lists = $nav.find('ul').parent('li');
    $lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>');
    const $As = $lists.children('a');

    // Disable A link that has ul
    $As.on('click', event => event.preventDefault());

    // Accordion nav
    $nav.on('click', (e) => {

      const target = e.target;
      const $parentLi = $(target).closest('li'); // closest, insead of parent, so it still works when click on i icons
      if (!$parentLi.length) return; // return if doesn't click on li
      const $subUl = $parentLi.children('ul');


      // let depth = $subUl.parents().length; // but some li has no sub ul, so...
      const depth = $parentLi.parents().length + 1;

      // filter out all elements (except target) at current depth or greater
      const allAtDepth = $nav.find('ul').filter(function () {
        if ($(this).parents().length >= depth && this !== $subUl.get(0)) {
          return true;
        }
        return false;
      });
      allAtDepth.slideUp(slideTime).closest('li').removeClass('open');

      // Toggle target
      if ($parentLi.has('ul').length) {
        $parentLi.toggleClass('open');
      }
      $subUl.stop().slideToggle(slideTime);

    });


    // HighlightActiveItems
    const $links = $nav.find('a');
    const currentLocation = history.location;
    function highlightActive(pathname) {
      const path = `#${pathname}`;

      $links.each((i, link) => {
        const $link = $(link);
        const $li = $link.parent('li');
        const href = $link.attr('href');
        // console.log(href);

        if ($li.hasClass('active')) {
          $li.removeClass('active');
        }
        if (path.indexOf(href) === 0) {
          $li.addClass('active');
        }
      });
    }
    highlightActive(currentLocation.pathname);
    history.listen((location) => {
      highlightActive(location.pathname);
    });
  }

  onChoseHeader(e){ 
    const {choseHeader}=this.props;
    choseHeader(e);
 }
  render() {

    return (
      <ul className="nav" ref={(c) => { this.nav = c; }}> 
        <li className="nav-header"><span>Navigation</span></li>
        <li><Button href="#/app/dashboard"   onClick={(e)=>this.onChoseHeader("1")}  ><i className="nav-icon material-icons" style={{fontSize:"35px"}}>account_circle</i><span className="nav-text">Mes Informations</span></Button></li>
        <li><Button href="#/app/dashboard"   onClick={(e)=>this.onChoseHeader("2")}  ><i className="nav-icon material-icons" style={{fontSize:"35px"}}>work</i><span className="nav-text">Mes Projets</span></Button></li>
        <li><Button href="#/app/dashboard"   onClick={(e)=>this.onChoseHeader("3")}  ><i className="nav-icon material-icons" style={{fontSize:"35px"}}>group_work</i><span className="nav-text">TP's</span></Button></li>
        <li><Button href="#/app/dashboard"   onClick={(e)=>this.onChoseHeader("4")}  ><i className="nav-icon material-icons" style={{fontSize:"35px"}}>find_in_page</i><span className="nav-text">CV</span></Button></li>
        <li><Button href="#/app/dashboard"   onClick={(e)=>this.onChoseHeader("6")}  ><i className="nav-icon material-icons" style={{fontSize:"35px"}}>bookmarks</i><span className="nav-text">Loisirs</span></Button></li>
        <li><Button href="#/app/dashboard"   onClick={(e)=>this.onChoseHeader("5")}  ><i className="nav-icon material-icons" style={{fontSize:"35px"}}>photo_camera</i><span className="nav-text">Mes Meilleurs Momment</span></Button></li>
  </ul>
    );
  }
}

 
const mapDispatchToProps = dispatch => ({
  choseHeader:(e)=>{
    dispatch(choseHeader(e));
  }
});


export default withRouter(connect(null,mapDispatchToProps)(SidebarContent));
