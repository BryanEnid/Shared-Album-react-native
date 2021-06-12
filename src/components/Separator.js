import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../assets/themes';

export const Separator = () => {
    return (
        <View style={styles.Separator} />
    )
}

const styles = StyleSheet.create({
    Separator: {
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        height: 1,
        backgroundColor: theme.colors.gray,
    }
})

