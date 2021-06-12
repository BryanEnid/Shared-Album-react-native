import React, { useLayoutEffect, useRef } from 'react';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import { Card } from './Card';
import { Separator } from './Separator';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from '@expo/vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import { BottomSheetContent } from './BottomSheetContent';

const RenderBottomSheetContent = (props) => {
    const closeBottomSheet = () => {
        sheetRef.current.snapTo(1);
    }

    return (
        <BottomSheetContent handleClose={closeBottomSheet} />
    );
}
 
export const Albums = ({ navigation, navigation: { setOptions } }) => {
    const sheetRef = useRef();

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => {
                return (
                    <TouchableOpacity onPress={() => console.log('hello!')}>
                        <View style={styles.openSheetButton}>
                            <Feather name='plus' size={16} color={theme.colors.white} />
                        </View>
                    </TouchableOpacity>
                )
            }
        })
    });

    
    
    

    return (
        <>
            <ScrollView>
                <View style={styles.albumContainer}>
                    {
                        albumPage.map((item, index) =>
                            <View key={index}>
                                <Card item={item} navigation={navigation} />
                                {/* Add separator if the index is 1 */}
                                {index === 1 && <Separator />}
                            </View>
                        )
                    }
                </View>
            </ScrollView>
            <BottomSheet 
                ref={sheetRef}
                snapPoints={[250, 0]}
                initialSnap={0}
                borderRadius={10}
                renderContent={RenderBottomSheetContent}
            />
        </>
    );
};

const styles = StyleSheet.create({
    albumContainer: {
        marginBottom: theme.spacing.l,
    },
    openSheetButton: {
        width: 32,
        height: 32,
        backgroundColor: theme.colors.primary,
        marginRight: theme.spacing.m,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
