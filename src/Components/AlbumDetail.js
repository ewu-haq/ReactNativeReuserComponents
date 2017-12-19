import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) =>  {
    const { title, artist, thumbnail_image, image, url } = album;
    const {textContainerStyle, artistTextContainer, thumbnailStyle, imageStyle, thumbnailContainerStyle} = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style= {thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={textContainerStyle}>
                    <Text style={artistTextContainer}> {artist}  </Text>
                    <Text> {title} </Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style= {imageStyle} source={{uri: image}}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
}

const styles = {
    textContainerStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column',

    },
    artistTextContainer: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        marginLeft: 5,
        marginRight: 5,
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    imageStyle: {
        marginLeft: 5,
        marginRight: 5,
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail;