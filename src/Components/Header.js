import React from 'react';
import {Text} from 'react-native'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerName: props.headerName
        }
    }

    render() {
        return (
            <Text> props.headerName </Text>
        )
    }
}