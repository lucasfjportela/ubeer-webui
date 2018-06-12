import React, { Component } from 'react';
import MaltCard from '../ui/MaltCard';
import HopCard from '../ui/HopCard';
import YeastCard from '../ui/YeastCard';
import AdditionalCard from '../ui/AdditionalCard';
import TextCard from '../ui/TextCard';

class Beer extends Component {

    textCard = {
        title: 'Monte sua cerveja!',
        text: 'Aqui você mesmo monta sua cerveja favorita escolhendo a quantidade desejada de cada ingrediente preferido!'
    }

    malte = {
        title: 'Malte',
        text: 'A composição do malte é responsável pela cor e pelo paladar da bebida, influenciando também na espuma e no corpo da cerveja.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXkm3NpVtToyuEhUIy9FpdPZDmBb142mTzLbr0un384i7JKWUtA'
    }

    lupulo = {
        title: 'Lúpulo',
        text: 'O lúpulo exerce papel essencial por conferir o amargor e o aroma a muitas cervejas.',
        img: 'http://cervejaemalte.com.br/blog/wp-content/uploads/2014/08/l%C3%BApulo-640x340.jpg'
    }

    levedura = {
        title: 'Levedura',
        text: 'A levedura é responsável por aromatizar a bebida, podendo apresentar aspectos florais, frutados ou minerais que caracterizam cada estilo de cerveja.',
        img: 'http://www.mundoboaforma.com.br/wp-content/uploads/2015/05/levedo-de-cerveja.jpg'
    }

    additionalCard = {
        title: 'Ingrediente Adicional'
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <TextCard {...this.textCard} />
                    <MaltCard {...this.malte} />
                    <HopCard {...this.lupulo} />
                    <YeastCard {...this.levedura} />
                    <AdditionalCard {...this.additional} />
                </div>
            </div>
        );
    }
}

export default Beer; 