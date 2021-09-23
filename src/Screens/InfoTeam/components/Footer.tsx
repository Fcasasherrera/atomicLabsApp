import * as React from 'react';
import styled from 'styled-components/native';
import BaseIcon from 'react-native-vector-icons/Entypo';
import { colors } from 'shared/styles';
interface FooterProps {}

const Footer = (props: FooterProps) => {
  return (
      <>
          <Container style={{ backgroundColor: 'black', marginTop: 48, padding: 20 }}>
            <Label small center>©2020 AtomicLabs. Todos los derechos reservados.</Label>

            <Label style={{marginTop: 12}} small center>Aviso de privacidad</Label>
            <Row style={{marginVertical: 16}}>
                  <Button>
                    <Icon name="linkedin" size={24} disableMargin />
                  </Button>
                  <Button>
                    <Icon name="twitter" size={24} disableMargin />
                  </Button>
            </Row>
          </Container>
      </>
  );
};

export default Footer;
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
const Icon = styled(BaseIcon) <{ isValid: boolean }>`
  color: ${props => (props.isValid ? colors.primary : colors.white)};
  margin-left: 12px;
`;
export const Label = styled.Text<TextProps>`
    ${props => props.center ? 'text-align: center;' : ''}
    ${props => props.small ? '' : 'font-size: 18px;'}
    ${props => props.bold ? 'font-weight: bold;' : ''}
    color: ${props => props.color ? props.color : 'white'};
`
const Container = styled.View<ContainerProps>`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.TouchableOpacity`
`
const Row = styled.View<ContainerProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`