import { whileStatement } from '@babel/types';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { colors } from 'shared/styles';
import styled from 'styled-components/native';

interface ProgressProps {
}

const Progress = (props: ProgressProps) => {

    return (
        <>
            <Row>
                <IconImg>
                    <Label bold>1</Label>
                </IconImg>
                <IconImg outline>
                    <Label bold outline>2</Label>
                </IconImg>
            </Row>
            <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill, { borderRadius: 150, backgroundColor: colors.primary, width: "50%" }]} />
            </View>
            <Row>
                <IconImg>
                    <Label bold>1</Label>
                </IconImg>

                <Animated.View>
                    <Title small bold>TE QUEREMOS</Title>
                    <Title small bold color>CONOCER</Title>
                </Animated.View>
            </Row>
        </>
    );
};

export default Progress;

const styles = StyleSheet.create({
    progressBar: {
        height: 12,
        flexDirection: "row",
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderRadius: 150,
        marginBottom: 12,
    }
});
type ContainerProps = {
    height?: string;
    center?: boolean;
    onErrorLengh?: boolean;
};
type TextProps = {
    small?: boolean;
    bold?: boolean;
    center?: boolean;
    outline?: boolean;
};
const IconImg = styled.View<{ outline?: boolean }>`
    background-color: ${props => props.outline ? 'transparent' : colors.primary};
    ${props => props.outline &&
        `border-width: 3px;
        border-color: rgba(133, 139, 153, 0.9);`
    }
    height: 35px;
    width: 35px;
    border-radius: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Title = styled.Text<TextProps>`
    ${props => props.center ? 'text-align: center;' : ''}
    ${props => props.small ? 'font-size: 35px;' : 'font-size: 42px;'}
    ${props => props.bold ? 'font-weight: bold;' : ''}
    color: ${props => props.color ? '#ff4824' : 'white'};
`
export const Label = styled(Animated.Text) <TextProps>`
    color: ${props => props.outline ? 'rgba(133, 139, 153, 0.9)' : 'white'};
    margin-top: 5px;
    margin-bottom: 5px;
    ${props => props.center ? 'text-align: center;' : ''}
    ${props => props.small ? '' : 'font-size: 18px;'}
    ${props => props.bold ? 'font-weight: bold;' : ''}
`
export const Row = styled.View<ContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-vertical: 12px;
    margin-horizontal: 12px;
`