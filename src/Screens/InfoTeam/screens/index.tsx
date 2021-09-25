import React, { useState, useEffect } from 'react';
import { Animated, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Toast from 'react-native-simple-toast';
import { Button } from 'shared/components';
import { colors } from 'shared/styles';
import BaseSimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Carousel from '../components/Carousel';
import ContainerListView from '../components/ContainerListView';
import Footer from '../components/Footer';
import axios from 'axios';

let deviceHeight = Dimensions.get('window').height


export const InfoTeamScreen = ({ navigation }) => {
    const [state, setState] = useState({
        heightLogo: 110,
        heightContain: 50,
        personal:[],
        x: new Animated.Value(0),
    })
    const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0
    const [fadeAnimInput] = useState(new Animated.Value(0));
    const [loading, setLoading] = useState(false);
    const getPersonal = async () => {
        let response;
        try {
            response = await axios.get('https://morning-hamlet-18619.herokuapp.com/api/v1/names')
        } catch (error) {
            Toast.show('Datos no encontrados', Toast.SHORT);
        }
        setState({ ...state, personal: response.data})
    }
    useEffect(() => {
        getPersonal();
        Animated.timing(fadeAnim, {
            toValue: 2,
            duration: 2000,
            useNativeDriver: true
        }).start();
        setTimeout(() => {
            showInputs()
        }, 500);
    }, []);
    const showInputs = () => {
        Animated.timing(fadeAnimInput, {
            toValue: 2,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };
    const [ref, setRef] = useState(null);



    return (
        <Container source={require('../../../assets/bgImages/mobile.jpg')} resizeMode="cover">
            <ContainerScrollA>
                <AnimatedView
                    height={state.heightLogo}                
                    ref={(ref) => {
                        setRef(ref);
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
                    <FormBox style={{
                        opacity: fadeAnimInput,
                    }}>
                        <Title bold>Desarrolla todo</Title>
                        <Title bold color>tu POTENCIAL</Title>
                        <Title bold>dentro del equipo</Title>
                        <Text>
                            <Title bold color>ATOMIC</Title>
                            <Title bold>LABS</Title>
                        </Text>
                        <RoundedButton onPress={() => { 
                            ref.scrollTo({
                                x: 0,
                                y: deviceHeight - 25,
                                animated: true,
                            })
                        }}>
                            <SimpleIcon name="arrow-down" size={16} isValid disableMargin />
                        </RoundedButton>
                        <Label>Quiero saber más</Label>
                        <Image source={require('../../../assets/images/1.png')} />
                        <Row style={{marginTop: 48, paddingHorizontal: 44}}>
                            <Button height={'64'} isLoading={loading} onClick={() => {navigation.push('Form')}}>
                                <Label bold color={colors.accent}>¡Quiero Ser Parte!</Label>
                            </Button>
                        </Row>
                        <>
                            <Title style={{ marginTop: 64 }} small bold>SOMOS EL BRAZO</Title>  
                            <Text>
                                <Title small bold>DERECHO </Title>
                                <Title small bold color>DE LA</Title>
                            </Text>
                            <Title small bold color>TECNOLOGÍA</Title>
                        </>
                        
                        <Carousel />

                        <>
                            <Row style={{ marginTop: 16 }}>
                                <Title small bold>¡TE ENCANTARA</Title>
                            </Row>
                            <Row>
                                <Title small bold>TRABAJAR CON </Title>
                            </Row>
                            <Row>
                                <Title small bold color>NOSOTROS!</Title>
                            </Row>
                        </>
                        <Image source={require('../../../assets/images/5.png')} />
                        <Row style={{ marginTop: 48, paddingHorizontal: 44 }}>
                            <Button height={'64'} isLoading={loading} onClick={() => { navigation.push('Form')}}>
                                <Label bold color={colors.accent}>¡Quiero Ser Parte!</Label>
                            </Button>
                        </Row>

                        
                        <Row style={{ marginTop: 32 }}>
                            <Title small bold>NUESTRO</Title>
                            <Title small bold color> EQUIPO</Title>
                        </Row>
                        
                        <ContainerListView data={state.personal} />
                    </FormBox>
                    <Footer />
                </AnimatedView>
            </ContainerScrollA>
        </Container>
    );
};
type ContainerProps = {
    height?: string;
    center?: boolean;
};
type TextProps = {
    small?: boolean;
    color?: string;
    bold?: boolean;
    center?: boolean;
};
const LogoImage = styled.Image`
  margin-bottom: 20px;
  margin-top: 80px;
  width: 100%;
  height: 60px;
  resize-mode: contain;
`;
const Image = styled.Image`
  margin-top: 20px;
  width: 100%;
  height: 250px;
  resize-mode: contain;
`;

const Container = styled.ImageBackground`
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
export const Title = styled.Text<TextProps>`
    ${props => props.center ? 'text-align: center;' : ''}
    ${props => props.small ? 'font-size: 35px;' : 'font-size: 42px;'}
    ${props => props.bold ? 'font-weight: bold;' : ''}
    color: ${props => props.color ? '#ff4824' : 'white'};
`
export const Label = styled.Text<TextProps>`
    ${props => props.center ? 'text-align: center;' : ''}
    ${props => props.small ? '' : 'font-size: 18px;'}
    ${props => props.bold ? 'font-weight: bold;' : ''}
    color: ${props => props.color ? props.color : 'white'};
`
const FormBox = styled(Animated.View) <ContainerProps>`
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    display: flex;
    justify-content:center;
    align-items: center;
`
const Row = styled.View<ContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const SimpleIcon = styled(BaseSimpleIcon) <{ isValid: boolean, disableMargin: boolean }>`
  color: ${props => (props.isValid ? colors.black : colors.gray)};
  margin-left: ${props => props.disableMargin ? '0' : '12'}px;
`;

const RoundedButton = styled.TouchableOpacity`
    background-color: white;
    padding: 16px;
    margin: 12px;
    border-radius: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`