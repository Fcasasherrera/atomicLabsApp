import { whileStatement } from '@babel/types';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { colors } from 'shared/styles';
import styled from 'styled-components/native';

interface CarouselProps {
    data?: any,
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
        carouselTwo: [
            {
                name: "juan miguel garcía",
                area: "Front-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "luis felipe ibarra",
                area: "Back-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "laura susana tsutsumi",
                area: "Front-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/3.png"
            },
            {
                name: "álvaro becker",
                area: "Back-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "carlos alberto abreu",
                area: "UX Designer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/2.png"
            },
            {
                name: "josé álvaro chico",
                area: "UX Designer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/2.png"
            },
            {
                name: "maría lucinda lópez",
                area: "UX Designer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/3.png"
            },
            {
                name: "jesús gonzález",
                area: "Front-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "héctor gerardo gaspar",
                area: "Front-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "josefina maría torre",
                area: "Back-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/3.png"
            },
            {
                name: "maría dolores calleja",
                area: "Back-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/3.png"
            },
            {
                name: "manuel loredo",
                area: "Back-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "jorge san juan",
                area: "UX Designer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/2.png"
            },
            {
                name: "erick vázquez",
                area: "Front-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "paloma beltrán",
                area: "Front-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/3.png"
            },
            {
                name: "mario arturo maulén",
                area: "Back-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "josé álvaro león",
                area: "Back-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "patricia said",
                area: "UX Designer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/3.png"
            },
            {
                name: "celia mercedes urrutia",
                area: "UX Designer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/3.png"
            },
            {
                name: "carlos alfonso gómez",
                area: "Back-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            },
            {
                name: "maría isabel gonzález",
                area: "Back-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/3.png"
            },
            {
                name: "rafael nesbitt",
                area: "Front-end developer",
                photograph: "https://morning-hamlet-18619.herokuapp.com/images/1.png"
            }
        ]
    })
    

    const _renderItem = ({ item, index }) => {
        return (
            <View style={{
                backgroundColor: '#ff4824',
                borderRadius: 5,
                padding: 50,
                marginTop: 32
            }}>
                <Image source={item.img} />
                <View style={{
                    borderColor: 'white',
                    borderBottomWidth: 4,
                    borderRadius: 150,
                    marginHorizontal: 20,
                }}>

                </View>
                <Text style={styles.title}>{item.title ? item.title : item.name}</Text>
                <>
                    {item.title === 'IMAGINA' ?
                        <>
                            <Text style={styles.dotText}>
                                <Text style={{ fontWeight: 'bold' }}>Estrategia </Text>
                                Digital
                            </Text>
                            <Text style={styles.dotText}>
                                Big Data &
                                <Text style={{ fontWeight: 'bold' }}> Analysis</Text>
                            </Text>
                            <Text style={styles.dotText}>
                                <Text style={{ fontWeight: 'bold' }}>Consultoría </Text>
                                Tecnológica
                            </Text>
                            <Text style={styles.dotText}>
                                <Text style={{ fontWeight: 'bold' }}>Reducción </Text>
                                de costos TI
                            </Text>
                        </>
                        :
                    item.title === 'EXPLORA' ?
                            <>
                                <Text style={styles.dotText}>Innovación 
                                    <Text style={{ fontWeight: 'bold' }}> y creación tecnológica</Text>
                                </Text>
                                <Text style={{ ...styles.dotText, fontWeight: 'bold'}}>UI / UX</Text>
                                <Text style={{ ...styles.dotText, fontWeight: 'bold'}}>Innovación</Text>
                            </>
                        :
                            <>
                                <Text style={styles.dotText}>
                                    Desarrollo tecnologico 
                                    <Text style={{fontWeight: 'bold'}}> y creacion tecnológica</Text>
                                </Text>
                                <Text style={{ ...styles.dotText, fontWeight: 'bold'}}>Ciberseguridad</Text>
                                <Text style={{ ...styles.dotText, fontWeight: 'bold' }}>Servicios de la Nube</Text>
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
                data={props.data ? state.carouselTwo : state.carouselItems}
                renderItem={_renderItem}
                sliderWidth={300}
                itemWidth={300}
                onSnapToItem={index => setState({ ...state, activeIndex: index })}
            />
            {!props.data &&
                <Pagination
                    dotsLength={state.carouselItems.length}
                    activeDotIndex={state.activeIndex}
                    dotColor={'#ff4824'}
                    inactiveDotColor={'white'}/>
            }
        </>
    );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  container: {},
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