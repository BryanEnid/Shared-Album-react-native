import React from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import theme from '../../assets/themes';
import { Avatars }  from './Avatars';


export const Card = ({ item, navigation }) => {
    return (
        <ImageBackground
            source={item.background}
            style={styles.imageBackground}>
            <Pressable onPress={() => navigation.navigate('Shared Albums', { album: item })}>
                <View style={styles.imageContentContainer}>
                    <View>
                        <Text style={styles.imageTitle}>{item.title}</Text>
                        <Text style={styles.imageSubtitle}>{`Created by ${item.user}`}</Text>
                    </View>

                    <View>
                        {/* Avatar styles goes here */}
                        <Avatars avatars={item.avatars} />
                    </View>
                </View>
            </Pressable>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        resizeMode: 'cover',
        overflow: 'hidden',
        height: theme.imageHeight.s,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
        justifyContent: 'center',
    },
    imageContentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageTitle: {
        ...theme.textVariants.h1,
        color: theme.colors.white,
    },
    imageSubtitle: {
        ...theme.textVariants.body2,
        color: theme.colors.white,
    },
});