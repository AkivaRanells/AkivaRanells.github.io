import React, { Component } from 'react';
class NavButton extends Component {
    changeMapCenter=()=>{
        return this.props.changeMapCenter(this.props.country.center);
    }
    render() {
        return (
            <button onClick={this.changeMapCenter}>{this.props.country.country}</button>
        )
    }
}
export default NavButton