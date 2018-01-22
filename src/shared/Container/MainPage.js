import React, {Component} from 'react';
import ArtistList from "../Component/ArtistList/index";
import stores from '../Store/index';
import {Provider} from 'mobx-react'

export default class MainPage extends Component{
    render() {
        return (
            <Provider artistStore={stores.artistStore}>
                <ArtistList />
            </Provider>
        )
    }
}