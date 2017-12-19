import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CustomHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.headerStyle}>
                <Text style={this.props.fontStyle}> 
                    {this.props.headerName}
                </Text>
            </View>
            
        );
    }
}

export default CustomHeader;