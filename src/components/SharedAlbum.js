import React from 'react';
import { View, Text,StyleSheet, ScrollView } from 'react-native';
import { SharedAlbumTitleCard }  from './SharedAlbumTitleCard';
import { Avatars } from './Avatars';
import { ImageGallery } from './ImageGallery';
import theme from '../../assets/themes';
import backgroundImages from '../../assets/data/backgroundImages';

export const SharedAlbum = ({ route }) => {
    const { album } = route.params;

    return (
        <ScrollView>
            <SharedAlbumTitleCard album={album} />

            <View style={styles.avatarsContainer}>
                <Avatars avatars={album.avatars} />
                <Text style={styles.avatarContainerText}>{ `${album.avatars.length} people` }</Text>
            </View>

            <ImageGallery images={backgroundImages} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    avatarsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.lightGray,
        marginVertical: theme.spacing.l, 
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.m,
    }, 
    avatarContainerText: {
        ...theme.textVariants.body3,
        color: theme.colors.black,
    }
});
