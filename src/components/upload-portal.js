import React, { useState } from 'react';
import { makeStyles, Modal, TextField, FormLabel, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { createAccount, login } from '../store/login.js';
import Upload from './upload.js';
// import useForm from '../hooks/use-form.js';
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
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Board Portal</h2>
            <p id="simple-modal-description">
                Upload A Board to Play On!
            </p>
            <Upload/>
        </div>
    );
    return (
        <div>
            <button type="button" onClick={handleOpen}>
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
        userInfo: state.login,
    };
};
const mapDispatchToProps = { createAccount, login };
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SimpleModal);
