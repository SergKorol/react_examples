// Core
import React, { Component } from 'react';
import Profile from "./profile";
import Photos from "./photos";


export default class Content extends Component {
    render () {
        return (
            <div className = 'content'>
                <Profile/>
                <Photos/>
            </div>
        );
    }
}
