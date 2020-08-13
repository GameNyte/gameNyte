import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Draggable from 'react-draggable';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple, lightBlue, red } from '@material-ui/core/colors';

// import '../scss/tokens.scss'
// eventLogger = (e: MouseEvent, data: Object) => {
//     console.log('Event: ', e);
//     console.log('Data: ', data);
// };


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    blue: {
        color: theme.palette.getContrastText(lightBlue[500]),
        backgroundColor: lightBlue[500],
    },
    redd: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
    },
}));









// TODO: defaultPosition property should contain a function that ties the player token to state and our turn-taking functionality || disabled property is a boolean so we can toggle it by state.
// TODO: When a player's turn ends, we need set the property "axis" to the string of 'none', which stops the piece from moving.

const Token = (props, idx) => {



    const [onStart, onStop] = useState(0);
    const dragHandlers = { onStart: onStart, onStop: onStop };

    
    // const handleDrag = (e, ui) => {
    //     const { x, y } = this.state.deltaPosition;
    //     this.setState({
    //         deltaPosition: {
    //             x: x + ui.deltaX,
    //             y: y + ui.deltaY,
    //         }
    //     });
    // };

    // onStart = () => {
    //     setState({ activeDrags: ++this.state.activeDrags });
    // };

    // onStop = () => {
    //     setState({ activeDrags: --this.state.activeDrags });
    // };





    const classes = useStyles();
    const playerColor = (idx) => {
        switch (idx) {
            case '1': return classes.orange;
            case '2': return classes.purple;
            case '3': return classes.blue;
            case '4': return classes.red;
        }
    }
    return (
        <>
            {props.playerList.length > 0 && props.playerList.map((player, idx) => {
                return (
                    <Draggable bounds="parent" className={classes.root} {...dragHandlers}>
                        <Avatar key={idx} className={playerColor(idx)}> {props.playerList[idx].name.split('')[0]} </Avatar>
                    </Draggable>
                )
            })
            }
        </>
    );
}

const mapStateToProps = state => {

    return {
        playerList: state.players,
    };
};

const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Token);