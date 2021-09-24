import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { loginAdmin, registerAdmin } from 'shared/Api/index';
import Toast from 'react-native-simple-toast';
import { Button } from 'shared/components';
import { colors } from 'shared/styles';
import BaseIcon from 'react-native-vector-icons/Octicons';
import BaseSimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Footer from '../components/Footer';

export const FormScreen = ({ navigation }) => {
    const [stateAdmin, setStateAdmin] = useState({
        username: '',
        lastname: '',
        status: false,
        statusLength: false,
        countTimes: 0,
    })
    const [state, setState] = useState({
        heightLogo: 100,
        heightContain: 50,
        x: new Animated.Value(0),
    })
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
    const [fadeAnimInput] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState(false);
    const [register, setRegister] = useState(false);


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

    const login = async () => {
        let response: any = {}
        setLoading(true)
        // try {
        //     response = await loginAdmin(stateAdmin)
        // } catch (error) {
        //     setLoading(false)
        // }

        // if (!response.status) {
        //     Toast.show('Datos no encontrados', Toast.SHORT);
        //     setLoading(false)
        // } else {
        //     setLoading(false)
        // }
        navigation.replace('Start', response)
    }

    return (
        <ImageBg source={require('../../../assets/bgImages/mobile.jpg')} resizeMode="cover">
            <ContainerScrollA>
                <AnimatedView
                    height={state.heightLogo}
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
                        opacity: fadeAnimInput,
                        paddingHorizontal: 20,
                    }}>
                        <Row>
                            <IconImg>
                                <Label bold>1</Label>
                            </IconImg>
                            <IconImg outline>
                                <Label bold outline>2</Label>
                            </IconImg>
                        </Row>
                        <View style={styles.progressBar}>
                            <Animated.View style={[StyleSheet.absoluteFill, { borderRadius: 150, backgroundColor: colors.primary, width: "50%"}]}/>
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
                        <Label>Queremos saber que eres tú por favor ingresa los siguientes datos: </Label>
                    </Animated.View>
                    <Animated.View style={{ opacity: fadeAnimInput, paddingHorizontal: 20,}}>
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
                                />
                            </InputBox>
                    </Animated.View>
                    <FormBox style={{ opacity: fadeAnimInput, marginTop: 12}}>
                        <Button rounded isLoading={loading} height={'44'} isActivated={stateAdmin.status} onClick={login} accent>
                            <Label bold>Enviar</Label>
                        </Button>
                    </FormBox>
                    <Image style={{ opacity: fadeAnimInput, marginBottom: 25}} source={require('../../../assets/images/6.png')} />
                    <Footer />
                </AnimatedView>
            </ContainerScrollA>
        </ImageBg>
    );
};
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
})
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
export const Label = styled(Animated.Text)<TextProps>`
    color: ${props => props.outline ? 'rgba(133, 139, 153, 0.9)' : 'white'};
    margin-top: 5px;
    margin-bottom: 5px;
    ${props => props.center ? 'text-align: center;' : ''}
    ${props => props.small ? '' : 'font-size: 18px;'}
    ${props => props.bold ? 'font-weight: bold;' : ''}
`
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
const Row = styled.View<ContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-vertical: 12px;
    margin-horizontal: 12px;
`
const Icon = styled(BaseIcon) <{ isValid: boolean, onErrorLengh: boolean }>`
  color: ${props => (props.isValid ? colors.primary : props.onErrorLengh ? colors.error : colors.gray)};
  margin-left: 12px;
`;

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