import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from 'shared/styles';
import styled from 'styled-components/native';

interface CarouselProps {
    data?: any,
}

const ContainerListView = (props: CarouselProps) => {

    return (
        <Container>
            {props.data.map((item, index) => {
                return (
                    <CardView key={index}>
                        <ProfileImage source={{ uri: item.photograph }} />

                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                        <Text style={styles.area}>
                            {item.area}
                        </Text>
                    </CardView>
                )
            })}
        </Container>
    );
};

export default ContainerListView;

const styles = StyleSheet.create({
    container: {},
    name: {
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    area: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        textTransform: 'capitalize'
    }
});
const Container = styled.View`
    width: 100%;
    padding-horizontal: 10px;
`
const CardView = styled.View`
    width: 100%;
    background-color: ${colors.accent};
    border-radius: 5px;
    padding: 25px;
    marginTop: 18px;
`
const ProfileImage = styled.Image`
  margin-bottom: 35px;
  width: 100%;
  height: 150px;
  resize-mode: contain;
`;