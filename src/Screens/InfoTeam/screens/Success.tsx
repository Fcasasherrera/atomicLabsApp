import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { register } from 'shared/Api/index';
import Toast from 'react-native-simple-toast';
import { Button } from 'shared/components';
import { colors } from 'shared/styles';
import BaseIcon from 'react-native-vector-icons/Octicons';
import BaseSimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Footer from '../components/Footer';
import Progress, { Label, Title } from '../components/Progress';

const HEIGHT = 100
export const SuccesScreen = ({ navigation }) => {
    const [state, setState] = useState({
        x: new Animated.Value(0),
    })
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
    const [fadeAnimInput] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 2,
            duration: 2000,
            useNativeDriver: true
        }).start();
        setTimeout(() => {
            slide();
        }, 1500);
    }, []);

    const slide = () => {
        Animated.spring(state.x, {
            toValue: -20,
            useNativeDriver: true
        }).start();
        showInputs()
    };
    const showInputs = () => {
        Animated.timing(fadeAnimInput, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    return (
        <ImageBg source={require('../../../assets/bgImages/mobile.jpg')} resizeMode="cover">
            <ContainerScrollA>
                <AnimatedView
                    height={HEIGHT}
                    contentContainerStyle={{
                        alignItems: 'center',
                    }}
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: state.x
                            }
                        ]
                    }}>
                    <LogoImage source={require('../../../assets/brand/logo.png')} />
                    <Animated.View style={{alignItems: 'center', paddingHorizontal: 12}}>
                        <Title small bold>TUS DATOS</Title>
                        <Text>
                            <Title small bold>HA SIDO </Title>
                            <Title small bold color>ENVIADOS</Title>
                        </Text>
                        <Title small bold color>CON ÉXITO</Title>
                    </Animated.View>
                    <Animated.View style={{
                        opacity: fadeAnimInput,
                        paddingHorizontal: 32,
                    }}>
                        <Label>En breve recibirás un correo de confirmación por parte del equipo de AtomicLabs.</Label>
                        <Label>Recuerda revisar tu bandeja de SPAM</Label>
                        <Label>¡Esperamos verte pronto!</Label>
                    </Animated.View>
                    <Image style={{ opacity: fadeAnimInput, marginBottom: 25, }} source={require('../../../assets/images/8.png')} />
                    <Footer />
                </AnimatedView>
            </ContainerScrollA>
        </ImageBg>
    );
};
type ContainerProps = {
    height?: string;
    center?: boolean;
    onErrorLengh?: boolean;
};
const LogoImage = styled.Image`
  margin-bottom: 20px;
  margin-top: 80px;
  width: 100%;
  height: 60px;
  resize-mode: contain;
`;
const Image = styled(Animated.Image)`
  margin-top: 20px;
  width: 80%;
  height: 450px;
  resize-mode: contain;
`;
const ImageBg = styled.ImageBackground`
    align-items: center;
    justify-content: center;
    height: 100%;
    display: flex;

`
const ContainerScrollA = styled.View`
    height: 100%;
    width: 100%;
    display: flex;
`
const AnimatedView = styled(Animated.ScrollView) <ContainerProps>`
    width: 100%;
    height: 100%;
    height: ${props => props.height}%;
    overflow: hidden;
`;