import React, { useState } from 'react';
import { makeStyles, Modal, TextField, FormLabel, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import Upload from './upload.js';
// import useForm from '../hooks/use-form.js';
import handleAwsRes from '../store/upload.js';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
const SimpleModal = (props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);



    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    // handleAwsRes = (fileName) => {
    //     this.setState({ maps: this.state.maps.concat(fileName.locationArray[0]) })
    // }


    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Board Portal</h2>
            <p id="simple-modal-description">
                Upload A Board to Play On!
            </p>

            <Upload
                maps={props.maps}
                handleAwsRes={props.handleAwsRes}
            />

        </div>
    );
    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Upload A Board!
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        maps: state.maps,
    };
};
const mapDispatchToProps = { handleAwsRes };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SimpleModal);
