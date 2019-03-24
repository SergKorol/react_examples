import React from "react";

export default class Header extends React.Component {
    render () {
        return (
            <div className='header'>
                <div>
                    <a></a>
                </div>
                <input type='text' placeholder='Search'/>
                <nav>
                    <a className='explore' href=""></a>
                    <a className='likes' href=""></a>
                    <a className='settings' href=""></a>
                </nav>
            </div>
        );
    }

}