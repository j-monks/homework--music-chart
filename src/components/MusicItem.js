import React, { Component } from 'react';

class MusicItem extends Component {
    render() {
        return (
            <>
                <h1>{this.props.title}</h1>
                <p>{this.props.artist}</p>
                <img src={this.props.image} alt=""/>
            </>
        );
    }
}

export default MusicItem;