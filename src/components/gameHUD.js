import React from 'react';

import { Avatar, Drawer, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



class GameHUD extends React.Component {
    constructor() {
        super();
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
        return (
            <>
                <React.Fragment key='left'>
                    <Button onClick={this.toggleGameHUD}>

                        <ArrowBackIosIcon />
                        Open HUD
                    </Button>
                    <Drawer open={this.state.open}>
                        <Button onClick={this.toggleGameHUD}>
                            Close HUD
                            <ArrowForwardIosIcon />
                        </Button>



                        <div>
                            <List>
                                {this.state.playerList.map((player, idx) => {
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

export default GameHUD;