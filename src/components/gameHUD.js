import React from 'react';
import { connect } from 'react-redux';

import { Avatar, Drawer, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import UploadModal from './upload-portal.js';



class GameHUD extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
            //game stuff, such as this session player, all players, all tokens etc
        }
    }

    toggleGameHUD = () => {
        if (this.state.open) {
            this.setState({ open: false });
        }
        if (!this.state.open) {
            this.setState({ open: true });
        }
    }

    render() {
        console.log('this.props from gameHUD', this.props);
        return (
            <>

                <React.Fragment key='left'>
                    <Button onClick={this.toggleGameHUD}>
                        <NightsStayIcon fontSize="large" />
                    </Button>
                    <Drawer open={this.state.open}>
                        <Button onClick={this.toggleGameHUD}>
                            <ArrowForwardIosIcon />
                        </Button>

                        <UploadModal/>


                        <div>
                            <List>
                                {this.props.playerList.length > 0 && this.props.playerList.map((player, idx) => {
                                    return (
                                        <ListItem id={idx} backgroundColor="red">
                                            <ListItemAvatar>
                                                <Avatar color="orange">
                                                    {player.name[0]}
                                                </Avatar>
                                                <Typography>{player.name}</Typography>
                                                <Typography>Score: {player.score}</Typography>
                                                <ArrowDropUpIcon />

                                                <ArrowDropDownIcon />
                                            </ListItemAvatar>
                                            <ListItemText />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </div>



                    </Drawer>
                </React.Fragment>
            </>
        );
    }
}

// const HUD = (props) => {
//     //TODO: design the actual HUD interface according to our UML.
//     // logic to control prop "open" for MatUI component "Drawer" goes here?
// }

const mapStateToProps = state => {

    return {
        playerList: state.players,
    };
};

const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GameHUD);