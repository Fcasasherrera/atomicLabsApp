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
export const FormScreen = ({ navigation }) => {
    const [stateAdmin, setStateAdmin] = useState({
        username: '',
        lastname: '',
        phone: '',
        status: false,
        statusLength: false,
        countTimes: 0,
    })
    const [state, setState] = useState({
        x: new Animated.Value(0),
    })
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
    const [fadeAnimInput] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);

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
        showInputs(2)
    };
    const showInputs = (show) => {
        Animated.timing(fadeAnimInput, {
            toValue: show,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    useEffect(() => {
        if (stateAdmin.username !== '' && stateAdmin.lastname !== '') {
            setStateAdmin({ ...stateAdmin, status: true });
        } else {
            setStateAdmin({ ...stateAdmin, status: false });
        }
    }, [stateAdmin.username, stateAdmin.lastname]);

    useEffect(() => {
        if (stateAdmin.username.length <= 3 && stateAdmin.username !== '') {
            setStateAdmin({ ...stateAdmin, statusLength: true });
        } else {
            setStateAdmin({ ...stateAdmin, statusLength: false });
        }
    }, [stateAdmin.username]);

    useEffect(() => {
        if (step) {
            showInputs(0)
        } else {
            showInputs(2)
        }
    }, [step]);

    const onRegister = async () => {
        let response: any = {}
        setLoading(true)
        let data = {
            firstname: stateAdmin.username,
            lastname: stateAdmin.lastname,
            cellphone: parseInt(stateAdmin.phone)
        }
        try {
            response = await register(data)
        } catch (error) {
            Toast.show('Ocurrio un error intenta de nuevo', Toast.SHORT);
            setLoading(false)
        }
        
        if (!response.success) {   
            Toast.show('Ocurrio un error intenta de nuevo', Toast.SHORT);
            setLoading(false)
        } else {
            navigation.replace('Success', response)
        }
    }

    return (
        <ImageBg source={require('../../../assets/bgImages/mobile.jpg')} resizeMode="cover">
            <ContainerScrollA>
                <AnimatedView
                    keyboardDismissMode='on-drag'
                    keyboardShouldPersistTaps="always"
                    height={HEIGHT}
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: state.x
                            }
                        ]
                    }}>
                    <LogoImage source={require('../../../assets/brand/logo.png')} />
                    <Animated.View style={{
                        opacity: !step ? fadeAnimInput : 2,
                        paddingHorizontal: 20,
                    }}>
                        <Progress step={step}/>
                        {step ? 
                            <>
                                <Label>Necesitamos validar tu número para continuar</Label>
                                <Label>Ingresa tu número a 10 digitos y te enviaremos un codigo SMS.</Label>
                            </>
                        :
                            <Label>Queremos saber que eres tú por favor ingresa los siguientes datos: </Label>
                        }
                    </Animated.View>
                        {
                            !step ? 
                                <>
                                    <Animated.View style={{ opacity: fadeAnimInput, paddingHorizontal: 20, }}>
                                        <Label small>Nombre (s)</Label>
                                        <InputBox onErrorLengh={stateAdmin.statusLength}>
                                            <SimpleIcon
                                                name={stateAdmin.status ? 'user' : 'user'}
                                                size={18}
                                                isValid={stateAdmin.status}
                                                onErrorLengh={stateAdmin.statusLength}
                                            />
                                            <InputText
                                                onChangeText={text => setStateAdmin({ ...stateAdmin, username: text })}
                                                value={stateAdmin.username}
                                                placeholder="Nombre (s)"
                                            />
                                        </InputBox>
                                        {stateAdmin.statusLength &&
                                            <Label small bold style={{ color: 'red' }}>El nombre deberá contener minimo 5 caracteres</Label>
                                        }
                                        <Label small>Apellidos</Label>
                                        <InputBox>
                                            <SimpleIcon
                                                name={stateAdmin.status ? 'lock' : 'lock'}
                                                size={18}
                                                isValid={stateAdmin.status}
                                            />
                                            <InputText
                                                onChangeText={text => {
                                                    setStateAdmin({ ...stateAdmin, lastname: text })
                                                }}
                                                value={stateAdmin.lastname}
                                                placeholder="Apellidos"
                                                keyboardType="number-pad"
                                            />
                                        </InputBox>
                                    </Animated.View>
                                    <FormBox style={{ opacity: fadeAnimInput, marginTop: 12 }}>
                                        <Button rounded isLoading={loading} height={'44'} isActivated={stateAdmin.status && !stateAdmin.statusLength} onClick={() => { setStep(1) }} accent>
                                            <Label bold>Continuar</Label>
                                        </Button>
                                    </FormBox>
                                    <Image style={{ opacity: fadeAnimInput, marginBottom: 25 }} source={require('../../../assets/images/6.png')} />
                                </>
                            :
                                <>
                                    <Animated.View style={{ opacity: 2, paddingHorizontal: 20, }}>
                                        {stateAdmin.statusLength &&
                                            <Label small bold style={{ color: 'red' }}>El nombre deberá contener minimo 5 caracteres</Label>
                                        }
                                        <Label small>Número de Celular</Label>
                                        <InputBox>
                                            <SimpleIcon
                                                name={stateAdmin.status ? 'phone' : 'phone'}
                                                size={18}
                                                isValid={stateAdmin.status}
                                            />
                                            <InputText
                                                onChangeText={text => {
                                                    setStateAdmin({ ...stateAdmin, phone: text })
                                                }}
                                                value={stateAdmin.phone}
                                                placeholder="Número de Celular"
                                            />
                                        </InputBox>
                                    </Animated.View>
                                    <FormBox style={{ opacity: 2, marginTop: 12 }}>
                                        <Button rounded isLoading={loading} height={'44'} isActivated={stateAdmin.status} onClick={onRegister} accent>
                                            <Label bold>Enviar</Label>
                                        </Button>
                                    </FormBox>
                                    <Image style={{ opacity: 2, marginBottom: 25 }} source={require('../../../assets/images/7.png')} />
                                </>
                        }
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
  width: 100%;
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
const InputText = styled.TextInput.attrs((props) => ({
    placeholderTextColor: colors.blackTransparent,
}))`
    height: 40px;
    width: 80%;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: black;
`
const FormBox = styled(Animated.View) <ContainerProps>`
    width: 100%;
    padding-horizontal: 56px;
    display: flex;
    justify-content:center;
    align-items: center;
`
const SimpleIcon = styled(BaseSimpleIcon) <{ isValid: boolean, onErrorLengh: boolean }>`
  color: ${props => (props.isValid ? colors.primary : props.onErrorLengh ? colors.error : colors.gray)};
  margin-left: 12px;
`;

const InputBox = styled.View<ContainerProps>`
    height: 50px;
    width: 100%;
    border-radius: 10px;
    margin-vertical: 10px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    ${props => props.onErrorLengh ? 
        `border-color: ${colors.error};
        border-width: 2px;`
    : ''}
`