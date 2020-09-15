import React, { Component } from 'react';
import MusicItem from "./MusicItem";

class MusicList extends Component {
    render() {
        const musicNodes = this.props.music.map((song) => {
            return (
                <ul>
                    <li>
                        <MusicItem key={song.id.attributes['im:id']} title={song.title.label} artist={song['im:artist'].label} image={song['im:image'][0].label}></MusicItem>
                    </li>
                </ul>
            );
        });
        return (
            <>
                <h3>MusicList</h3>
                {musicNodes}
            </>
        );
    }
}

export default MusicList;