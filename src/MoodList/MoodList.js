import React, { Component } from 'react';

class MoodList extends Component {

    componentDidMount(){
        console.log('MoodList Mounted');
        
    }
    render() {
        return (
            <h2>in ML: {JSON.stringify(this.props.listOfMoods)}</h2>//made the prop in MoodRing.js


        )// end return
    }//end render
}//end class

export default MoodList;