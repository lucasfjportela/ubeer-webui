import React, {Component} from 'react';
import TextCard from '../ui/TextCard';
import CheckoutCard from '../ui/CheckoutCard';
import axios from 'axios';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beer: this.props.location.state ? this.props.location.state.data : null,
            ingredients: this.props.location.state ? this.props.location.state.ingredients : null,
        }

        console.log(this.state.ingredients);

        this.createCheckout = this.createCheckout.bind(this);
        this.createBeer = this.createBeer.bind(this);
    }

    createBeer(beers) {
        let data = new FormData();
        const beer = [{
                "ingredient": "ef30ee85-b331-4e6a-9e6d-06f94a819bc0",
                "quantity": 435.34
            },
            {
                "ingredient": "dsadadadsa",
                "quantity": 3444.4, 
            }
        ];

        beer.map(ingredient => {
            data.append("ingredients", JSON.stringify(ingredient));
        });

        return fetch('http://localhost:8000/beer', {
            method: 'POST',
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },  
            body: data,
        }).then(res => {
            return res.json().uuid;
        }).catch(err => err);
    }

    createCheckout() {
        let data = new FormData();
 
        const checkout = {
            beer: "dasdasd",
            user: "j.alexandreeneto@gmail.com",
            price: 435.23,
            paymentMethod: "boleto",
            paymentStatus: false,
        };

        data.append("beer", checkout.beer);
        data.append("user", checkout.user);
        data.append("price", checkout.price);
        data.append("paymentMethod", checkout.paymentMethod);
        data.append("paymentStatus", checkout.paymentStatus);

        return fetch('http://localhost:8000/checkout', {
            method: 'POST',
            mode: "no-cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },  
            body: data,
        }).then(res => {
            console.log(res);
        }).catch(err => err);
    }

    textCard = {
        title: 'Quase lá!',
        text: "Agradecemos a preferência por nosso serviço!\nPara finalizar o pedido, preencha com as informações necessárias de pagamento e de envio e será gerado um código de pedido para você acompanhar o andamento da produção e entrega da sua cerveja."
    }

    checkoutCard = {
        handleCreateBeer: this.createBeer,
        handleCheckout: this.createCheckout,
    }

    render() {
        console.log(this.state.beer);
        this.checkoutCard.beer = this.state.beer;
        this.checkoutCard.ingredients = this.state.ingredients;

        let price = 0;

        for(let elem in this.state.beer) {
            for(let ing of this.state.ingredients) {
                if(this.state.beer[elem].name === ing.name) {
                    price = price + (ing.price*this.state.beer[elem].quantity);
                }
            }
        }

        console.log(price);

        this.checkoutCard.price = price;

        return (
            <div>
            <div className="container container-fluid text-center">
                <div className="row">
                    {/* <TextCard {...this.textCard} /> */}
                    <CheckoutCard {...this.checkoutCard} />
                </div>
            </div>
            {/* <form onSubmit={this.createBeer}>
                <input type="submit" value="Submit" />
            </form> */}
            </div>
        );
    }
}

export default Checkout;