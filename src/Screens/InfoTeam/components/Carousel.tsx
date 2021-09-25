import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import styled from 'styled-components/native';

interface CarouselProps {
}

const CarouselComponent = (props: CarouselProps) => {
    const [state, setState] = useState({
        activeIndex: 0,
        carouselItems: [
            {
                title: "IMAGINA",
                img: require('../../../assets/images/2.png'),
            },
            {
                title: "EXPLORA",
                img: require('../../../assets/images/3.png'),
            },
            {
                title: "CONQUISTA",
                img: require('../../../assets/images/4.png'),
            },
        ],
    })
    

    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.card}>
                <Image source={item.img} />
                <View style={styles.line}>

                </View>
                <Text style={styles.title}>{item.title ? item.title : item.name}</Text>
                <>
                    {item.title === 'IMAGINA' ?
                        <>
                            <Text style={styles.dotText}>
                                <Text>{'\u2022'} </Text>
                                <Text style={{ fontWeight: 'bold'}}>Estrategia </Text>
                                Digital
                            </Text>
                            <Text style={styles.dotText}>
                                <Text>{'\u2022'} </Text>
                                Big Data &
                                <Text style={{ fontWeight: 'bold' }}> Analysis</Text>
                            </Text>
                            <Text style={styles.dotText}>
                                <Text>{'\u2022'} </Text>
                                <Text style={{ fontWeight: 'bold' }}>Consultoría </Text>
                                Tecnológica
                            </Text>
                            <Text style={styles.dotText}>
                                <Text>{'\u2022'} </Text>
                                <Text style={{ fontWeight: 'bold' }}>Reducción </Text>
                                de costos TI
                            </Text>
                        </>
                        :
                    item.title === 'EXPLORA' ?
                            <>
                                <Text style={styles.dotText}>
                                    <Text>{'\u2022'}</Text> Innovación 
                                    <Text style={{ fontWeight: 'bold' }}> y creación tecnológica</Text>
                                </Text>
                                <Text style={{ ...styles.dotText, fontWeight: 'bold' }}><Text>{'\u2022'}</Text> UI / UX</Text>
                                <Text style={{ ...styles.dotText, fontWeight: 'bold' }}><Text>{'\u2022'}</Text> Innovación</Text>
                            </>
                        :
                            <>
                                <Text style={styles.dotText}>
                                    <Text>{'\u2022'} </Text>
                                    Desarrollo tecnologico 
                                    <Text style={{fontWeight: 'bold'}}> y creacion tecnológica</Text>
                                </Text>
                                <Text style={{ ...styles.dotText, fontWeight: 'bold' }}><Text>{'\u2022'} </Text>Ciberseguridad</Text>
                                <Text style={{ ...styles.dotText, fontWeight: 'bold' }}><Text>{'\u2022'} </Text>Servicios de la Nube</Text>
                            </>
                    }
                </>
            </View>
        );
    };

    return (
        <>
            <Carousel
                layout={"default"}
                data={state.carouselItems}
                renderItem={_renderItem}
                sliderWidth={300}
                itemWidth={300}
                onSnapToItem={index => setState({ ...state, activeIndex: index })}
            />
            <Pagination
                dotsLength={state.carouselItems.length}
                activeDotIndex={state.activeIndex}
                dotColor={'#ff4824'}
                inactiveDotColor={'white'}/>
            
        </>
    );
};

export default CarouselComponent;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ff4824',
        borderRadius: 5,
        padding: 50,
        marginTop: 32
    },
    line: {
        borderColor: 'white',
        borderBottomWidth: 4,
        borderRadius: 150,
        marginHorizontal: 20,
    },
    title: {
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 8,
        fontSize: 30, 
        color: 'white',
        fontWeight: 'bold',
    },
    dotText: {
        marginTop: 8,
        fontSize: 16, 
        color: 'white',
    }
});

const Image = styled.Image`
  width: 100%;
  margin-bottom: 18px;
  height: 150px;
  resize-mode: contain;
`;