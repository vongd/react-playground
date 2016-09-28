import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Dropdown from './Dropdown';

class Page extends Component {
  render(){
    return (
      <div>
      <HeaderBar/>
      <BodyText/>
      <FooterBar/>
      </div>
    );
  }
}

// var Page = React.createClass({
//   render: function() {
//     return (
//       <div>
//       <HeaderBar/>
//       <BodyText/>
//       <FooterBar/>
//       </div>
//     );
//   }
// });

var HeaderBar = React.createClass({
  render: function() {
    return (
      <div className="headerBar">
      HEADER THIS STUFF
        <ul className="left-side">
  				<li><a href="#">BRAND</a></li>
  				<li><a href="/Services">SERVICES</a></li>
  				<ul className="dropdown">
  					<li><a href="#">Weddings</a></li>
  					<li><a href="#">Portraits</a></li>
  				</ul>
  				<ul className="sub-menu2">
  					<li><a href="#">School</a></li>
  					<li><a href="#">Family</a></li>
  				</ul>
  			</ul>
  			<ul className="right-side">
  				<li><a href="#">SIGN UP</a></li>
  				<li><a href="#">CONTACT</a></li>
  				<li><a href="#">LOG IN</a></li>
  			</ul>
      </div>
    );
  }
});

var BodyText = React.createClass({
  render: function() {
    return (
      <div className="bodyText">
      TALKING BODY!
      </div>
    );
  }
});

var FooterBar = React.createClass({
  render: function() {
    return (
      <div className="footerBar">
        <div className="footerText">
          COPYRIGHT © 2016 DAVID VONG | ALL RIGHTS RESERVED | UNITED STATES
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Page/>,
  document.getElementById('content')
);
