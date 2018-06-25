import React, { Component } from 'react';
import MaltCard from '../ui/MaltCard';
import HopCard from '../ui/HopCard';
import YeastCard from '../ui/YeastCard';
import AdditionalIngredientCard from '../ui/AdditionalIngredientCard';
import TextCard from '../ui/TextCard';
import autoBind from 'react-autobind';

class Beer extends Component {

    constructor(props) {
        super(props);
        // Initial ingredients state
        this.state = {
            ingredients: [],
            data: {}
        }

        autoBind(this);
    }

    maltData = (data) => {
        //[...we will use the dataFromChild here...]
        this.setState({ data: data});
    }

    componentDidMount() {
        fetch('http://localhost:8000/ingredients')
        .then(response => response.json())
        .then(data => {
            this.setState({
                ingredients: data,
            });
        });
    }

    // generateOptions = () => {
    //     // return this.state.ingredients.filter((element) => {
    //     //     return element.type === "malt";
    //     // }).map((ingredient) => {
    //     //     return (
    //     //         <option value={ingredient.name}>{ingredient.name}</option>
    //     //     )
    //     // })
    //     this.setState({
    //         ingredients: ['teste']
    //     });
    //     console.log(this.state.ingredients.length);
    // }

    generateCardData(type, data) {
        const ingredients = this.state.ingredients.filter((element) => {
            return element.type === type;
        }).map((ingredient) => {
            return (
                <option value={ingredient.name}>{ingredient.name} (R$ {ingredient.price})</option>
            )
        });

        return {
            title: data.title,
            text: data.text,
            img: data.img,
            ingredients: ingredients,
        }
    }

    textCard = {
        title: 'Monte sua cerveja!',
        text: 'Aqui você mesmo monta sua cerveja favorita escolhendo a quantidade desejada de cada ingrediente preferido!'
    }

    maltCardInfo = {
        title: 'Malte',
        text: 'A composição do malte é responsável pela cor e pelo paladar da bebida, influenciando também na espuma e no corpo da cerveja.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXkm3NpVtToyuEhUIy9FpdPZDmBb142mTzLbr0un384i7JKWUtA',
    }

    hopCardInfo = {
        title: 'Lúpulo',
        text: 'O lúpulo exerce papel essencial por conferir o amargor e o aroma a muitas cervejas.',
        img: 'lupulo.jpg'
    }

    barmCardInfo = {
        title: 'Levedura',
        text: 'A levedura é responsável por aromatizar a bebida, podendo apresentar aspectos florais, frutados ou minerais que caracterizam cada estilo de cerveja.',
        img: 'levedura.jpg'
    }

    additionalCardInfo = {
        title: 'Ingrediente Adicional',
        img: 'ingredientes-adicionais2.jpg'
    }

    getIngredients() {
        
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row red align-items-center justify-content-center bg-dark">
                    <TextCard {...this.textCard} />
                    <MaltCard {...this.generateCardData("Malte", this.maltCardInfo)} />
                    <HopCard {...this.generateCardData("Lupulo", this.hopCardInfo)} />
                    <YeastCard {...this.generateCardData("Levedura", this.barmCardInfo)} />
                    <AdditionalIngredientCard {...this.generateCardData("Adicional", this.additionalCardInfo)} />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Prosseguir com o pagamento</button>
                </div>
            </div>
        );
    }
}

export default Beer; 