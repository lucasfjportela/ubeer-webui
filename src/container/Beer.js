import React, { Component } from 'react';
import { Link } from 'react-router';
import MaltCard from '../ui/MaltCard';
import HopCard from '../ui/HopCard';
import YeastCard from '../ui/YeastCard';
import AdditionalIngredientCard from '../ui/AdditionalIngredientCard';
import TextCard from '../ui/TextCard';
import autoBind from 'react-autobind';
import Checkout from '../container/Checkout';
import PropTypes from 'prop-types'


class Beer extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);
        // Initial ingredients state
        this.state = {
            ingredients: [],
            data: {},
            beer: {
                malt: {
                    name: "",
                    quantity: 0
                },
                hop: {
                    name: "",
                    quantity: 0
                },
                yeast: {
                    name: "",
                    quantity: 0
                },
                addt: {
                    name: "",
                    quantity: 0
                },
            },
            price: 0,
            isNextClicked: false,
        };

        this.maltHandleChange = this.maltHandleChange.bind(this);
        this.hopHandleChange = this.hopHandleChange.bind(this);
        this.yeastHandleChange = this.yeastHandleChange.bind(this);
        this.addtHandleChange = this.addtHandleChange.bind(this);
    }

    redirectToTarget = () => {
        this.context.router.push({
            pathname: `/checkout`,
            state: {data: this.state.beer, ingredients: this.state.ingredients},
        });
    }

    maltHandleChange(event) {
        let actualBeer = Object.assign({}, this.state.beer);
        if(event.target.type === 'number') {
            actualBeer.malt.quantity = event.target.value;
            this.setState({beer: actualBeer});
        } else {
            actualBeer.malt.name = event.target.value;
            this.setState({beer: actualBeer});
        }

        console.log(actualBeer);
    }

    hopHandleChange(event) {
        let actualBeer = Object.assign({}, this.state.beer);
        if(event.target.type === 'number') {
            actualBeer.hop.quantity = event.target.value;
            this.setState({beer: actualBeer});
        } else {
            actualBeer.hop.name = event.target.value;
            this.setState({beer: actualBeer});
        }

        console.log(actualBeer);
    }

    yeastHandleChange(event) {
        let actualBeer = Object.assign({}, this.state.beer);
        if(event.target.type === 'number') {
            actualBeer.yeast.quantity = event.target.value;
            this.setState({beer: actualBeer});
        } else {
            actualBeer.yeast.name = event.target.value;
            this.setState({beer: actualBeer});
        }

        console.log(actualBeer);
    }

    addtHandleChange(event) {
        let actualBeer = Object.assign({}, this.state.beer);
        if(event.target.type === 'number') {
            actualBeer.addt.quantity = event.target.value;
            this.setState({beer: actualBeer});
        } else {
            actualBeer.addt.name = event.target.value;
            this.setState({beer: actualBeer});
        }

        console.log(actualBeer);
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

    generateCardData(type, data) {
        const ingredients = this.state.ingredients.filter((element) => {
            return element.type === type;
        }).map((ingredient) => {
            return (
                <option value={ingredient.name} name={ingredient.type}>{ingredient.name} (R$ {ingredient.price})</option>
            )
        });

        return {
            title: data.title,
            text: data.text,
            img: data.img,
            ingredients: ingredients,
            handle: data.handle,
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
        handle: this.maltHandleChange.bind(this),
    }

    hopCardInfo = {
        title: 'Lúpulo',
        text: 'O lúpulo exerce papel essencial por conferir o amargor e o aroma a muitas cervejas.',
        img: 'lupulo.jpg',
        handle: this.hopHandleChange.bind(this),
    }

    barmCardInfo = {
        title: 'Levedura',
        text: 'A levedura é responsável por aromatizar a bebida, podendo apresentar aspectos florais, frutados ou minerais que caracterizam cada estilo de cerveja.',
        img: 'levedura.jpg',
        handle: this.yeastHandleChange.bind(this),
    }

    additionalCardInfo = {
        title: 'Ingrediente Adicional',
        img: 'ingredientes-adicionais2.jpg',
        handle: this.addtHandleChange.bind(this),
    }

    getTotalPrice() {
        let totalPrice = 0;
        for(let ing in this.state.beer) {
            totalPrice += this.state.ingredients.filter((element) => {
                return element.name === ing.name;
            }).map((value) => {
                console.log(value.quantity*ing.price);
                return value.quantity*ing.price;
            });
        }
        return totalPrice;
    }

    render() {
        console.log(this.state.price);

        return (
            <div className="container text-center" style={{ paddingTop: '20px'}}>
                <div className="row red align-items-center justify-content-center bg-dark">
                    <TextCard {...this.textCard} />
                    <MaltCard {...this.generateCardData("Malte", this.maltCardInfo)} />
                    <HopCard {...this.generateCardData("Lupulo", this.hopCardInfo)} />
                    <YeastCard {...this.generateCardData("Levedura", this.barmCardInfo)} />
                    <AdditionalIngredientCard {...this.generateCardData("Adicional", this.additionalCardInfo)} />
                    
                    {/* <Link to='/checkout' params={{ data: this.state.options }} className="btn btn-primary btn-lg btn-block" onClick={() => this.setState({isNextClicked: true})} type="submit">Prosseguir com o pagamento</Link> */}
                    <button onClick={this.redirectToTarget} className="btn btn-primary btn-lg btn-block" type="submit">Prosseguir com o pagamento</button>
                
                </div>
                { this.state.isNextClicked ? null : null }
            </div>
        );
    }

}

export default Beer; 