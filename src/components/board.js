import React from 'react';
import Player from './player.js';

class Board extends React.Component {
    render() {
        return (
            <>
                <div className="board" style={{  
                    backgroundImage: "url(" + "https://www.teachertoolsinc.com/images/detailed/26/ASH91022.jpg" + ")",
                    height:'auto',
                    width:'auto',
                    backgroundPosition: 'absolute',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                    }}>
                    <Player/>
                </div>
            </>
        );
    }
}

export default Board;