import React, { Component } from 'react';
import MusicItem from "./MusicItem";

class MusicList extends Component {
    render() {
        const musicNodes = this.props.music.map((song) => {
            return (
                    <li>
                        <MusicItem key={song.id.attributes['im:id']} title={song.title.label} artist={song['im:artist'].label} image={song['im:image'][0].label}></MusicItem>
                    </li>
            );
        });
        return (
            <>
                <h3>Top 20 Charts</h3>
                <ol>
                  {musicNodes}
                </ol>
            </>
        );
    }
}

export default MusicList;