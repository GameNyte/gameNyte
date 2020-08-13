import React from 'react';
import { connect } from 'react-redux';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Slider from '@material-ui/core/Slider';


import Player from './player.js';
import Upload from './upload.js'
import Draggable from 'react-draggable';
// import Token from './token.js'
import Token from './token-two.js'




class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            maps: [],
            playerLocation: {
                activeDrags: 0,
                deltaPosition: {
                    x: 0, y: 0
                },
                controlledPosition: {
                    x: -400, y: 200
                }
            },
            zoomWrapper: {
                panningEnabled: false,
                minScale: 1,
                maxScale: 6,
                step: 1,
                scale: 1,
            },
            slider: {
                value: 1,
                min: 0,
                step: 1,
                max: 6,
            }
        }
        this.handleAwsRes = this.handleAwsRes.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        // this.handleSliderChange = this.handleSliderChange.bind(this);
    }


    handleDrag = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    onStart = () => {
        this.setState({ activeDrags: ++this.state.activeDrags });
    };

    onStop = () => {
        this.setState({ activeDrags: --this.state.activeDrags });
    };

    handleAwsRes = (fileName) => {

        this.setState({ maps: this.state.maps.concat(fileName.locationArray[0]) })

    }

    // handleSliderChange = () => {
    //     this.setState({zoomWrapper.scale: this.state.slider.value})
    // }

    render() {
        const {value, min, step, max} = this.state.slider
        const {panningEnabled, maxScale, minScale} = this.state.zoomWrapper;
        const { deltaPosition, controlledPosition } = this.state.playerLocation;

        return (
            <>
                <div>
                    <Upload
                        maps={this.state.maps}
                        handleAwsRes={this.handleAwsRes}
                    />
                </div>

                <div className="board" style={{ position: 'fixed', height: '500px', width: '500px', position: 'relative', overflow: 'auto', padding: '0' }}>
                    <Slider
                        slider={{
                            value:{value},
                            min:1,
                            step:1,
                            max:6,
                        }}
                        // onChange={this.handleSliderChange(value)}
                    />
                    <TransformWrapper
                        pan={{
                            disabled: !panningEnabled
                        }}
                        step={1}
                    >
                        <TransformComponent>
                            <img onClick={(event) => {
                                console.log(event.button)
                            }} src={this.state.maps[0]} />
                            
                            <Token />

                            {/* <Token
                                playerList = {this.state.playerList}
                            /> */}

                        </TransformComponent>
                    </TransformWrapper>
                </div>
            </>
        );
    }
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
)(Board);