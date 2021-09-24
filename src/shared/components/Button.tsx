import React from 'react';
import { DotIndicator } from 'react-native-indicators';
import styled from 'styled-components/native';
import { colors } from '../styles';

type ButtonProps = {
    outline?: boolean;
    secondary?: boolean;
    accent?: boolean;
    isActivated?: boolean;
    rounded?: boolean;
    onClick: any;
    width?: string;
    height?: string;
    margin?: string;
    isLoading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    isLoading = false,
    outline,
    onClick,
    secondary,
    accent,
    width,
    height,
    isActivated = true,
    rounded = false,
    margin,
}) => {
    return !isLoading && isActivated ? (
        <ButtonContainer
            outline={outline}
            rounded={rounded}
            onPress={onClick}
            secondary={secondary}
            width={width}
            height={height}
            accent={accent}
            margin={margin}
            underlayColor={
                outline
                    ? colors.white
                    : accent
                        ? colors.primary
                        : secondary
                            ? colors.primary
                            : colors.accent
            }>
            <Label outline={outline}>{children}</Label>
        </ButtonContainer>
    ) : (
            <ButtonDeactivaded width={width} isActivated={isActivated} margin={margin}>
                {isActivated ? (
                    <DotIndicator color={colors.primary} size={10} count={3} />
                ) : (
                        <Label isActivated={isActivated}>{children}</Label>
                    )}
            </ButtonDeactivaded>
        );
};

type StyleProps = {
    margin?: string;
    width?: string;
    height?: string;
    outline: boolean;
    rounded?: boolean;
    secondary: boolean;
    accent: boolean;
    isActivated: boolean;
};

const Label = styled.Text<StyleProps>`
  color: ${props => (props.accent ? colors.accent : props.isActivated ? colors.whiteLight : colors.white)};
  align-self: center;
  padding: 10px;
`;

const BaseButtonStyles = `
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const ButtonContainer = styled.TouchableOpacity<StyleProps>`
  ${BaseButtonStyles}
  border-radius: ${props => props.rounded ? '150' :'20'}px;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '40')}px;
  background-color: ${props =>
        props.accent
            ? colors.primary
            : props.outline
                ? colors.lightGray
                : props.secondary
                    ? colors.primaryLigth
                    : colors.white};
  ${props => props.margin && `margin: ${props.margin}`};
`;

const ButtonDeactivaded = styled.View<StyleProps>`
  ${BaseButtonStyles}
  border-radius: ${props => props.rounded ? '150' : '20'}px;
  background-color: ${colors.primaryLigth};
  width: ${props => (props.width ? props.width : '100%')};
  ${props => props.isActivated && 'min-height: 40px;'}
`;
