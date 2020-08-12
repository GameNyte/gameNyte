import React from 'react';
import { Drawer, Button, Icon } from '@material-ui/core';
import { ArrowForwardIosIcon } from '@material-ui/icons';
import { ArrowBackIosIcon } from '@material-ui/icons';


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
                        <Icon>
                            <ArrowForwardIosIcon/>
                        </Icon>
                    </Button>
                    <Drawer open={this.state.open}>
                        <Button onClick={this.toggleGameHUD}>
                            <Icon>
                                <ArrowBackIosIcon/>
                            </Icon>
                        </Button>
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