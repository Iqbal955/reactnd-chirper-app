import React, {Component} from "react";
import {connect} from "react-redux";
import Tweet from "./Tweet"

class Dashboard extends Component {
    render() {
  
        return (
            <div>
                <h3 className="center">Your TimeLine</h3>
                <ul className="dashboard">
            {this.props.tweetIds.map((id) => (
                <li key={id}>
                <Tweet id={id}/>  
                </li>
            ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({tweets}) {
    return {
        tweetIds: Object.keys(tweets)
        .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)

    }
}

function mapDispatchToProps(dispatch) {
    return {
   
    }
}

export default connect(mapStateToProps)(Dashboard)
