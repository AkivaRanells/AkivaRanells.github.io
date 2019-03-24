import React, { Component } from 'react';
import NavButton from './NavButton'
class Navbar extends Component {
    constructor() {
        //@ts-ignore
        super()
        this.state = {
            navButtons: [{country: "Australia", center: {lat: -22.428225, lng: 134.259568}}, {country: "Israel", center: { lat: 32.110021, lng: 34.837997 }}, {country: "United States", center: { lat: 40.345411, lng: -98.289356 }}, {country:"France", center: { lat: 46.831366, lng: 3.263482}}, {country: "Japan", center: { lat: 35.772139, lng: 138.239953 }}]
        }
    }

    render() {
        return (
            <div className='navbar'>
                <span className='navbar'>{this.state.navButtons.map((country, index)=>{return <NavButton country={country} key={index} changeMapCenter={this.props.changeMapCenter}/>})}</span>
            </div>
        )
    }
}
export default Navbar