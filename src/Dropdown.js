import React from 'react';
import './Dropdown.scss';


var Dropdown = React.createClass({
  getIntitalState: function() {
    return {
      listVisible: false
    };
  },

  select: function(item) {
    this.props.selected = item;
  },

  show: function() {
    this.setState({ listVisible: true });
    document.addEvenListener("click", this.hide);
  },

  hide: function() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
  },

  render: function(){
    return <div>hello</div>
  }

})

export default Dropdown;
