import React from 'react';

import Room from './components/room.js';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header.js';

import Board from './components/board.js';


export default class App extends React.Component {

    render() {
        return (

            <Provider store={store}>
                <Header />
                {/* <Room /> */}
                <Board/>
            </Provider>
        );
    }
}
