import React from 'react';
import { connect } from 'react-redux';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import Slider from '@material-ui/core/Slider';
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
        
        this.handleSliderChange = this.handleSliderChange.bind(this);
    }




    handleSliderChange = (newValue) => {
        this.setState({zoomWrapper: {...this.state.zoomWrapper, scale: newValue}})
        this.setState({slider: {...this.state.slider, value: newValue}})
    }

    render() {
        
        const {panningEnabled} = this.state.zoomWrapper;
        

        return (
            <>

                <div className="board">
                    <Slider
                        
                            value={this.state.zoomWrapper.scale}
                            min={1}
                            step={1}
                            max={6}
                        
                        onChange={(event, value) => {
                            this.handleSliderChange(value)}}
                    />
                    <TransformWrapper
                        pan={{
                            disabled: !panningEnabled
                        }}
                        step={1}
                        scale={this.state.zoomWrapper.scale}
                    >
                        <TransformComponent>

                            <img alt="board" src={this.props.upload[0]} />

                            
                            <Token />


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
        upload: state.upload,
    };
};

const mapDispatchToProps = null;

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Board);