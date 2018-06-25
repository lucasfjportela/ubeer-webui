import React, {Component} from 'react';
import TextCard from '../ui/TextCard';
import CheckoutCard from '../ui/CheckoutCard';
import axios from 'axios';
import ReactDOM from 'react-dom';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beer: this.props.location.state ? this.props.location.state.data : null,
            ingredients: this.props.location.state ? this.props.location.state.ingredients : null,
            user: {
                firstName: "",
                lastName: "",
                email: "",
                address: "",
            }
        }

        console.log(this.state.ingredients);

        this.createCheckout = this.createCheckout.bind(this);
        this.createBeer = this.createBeer.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    createBeer(event) {
        event.preventDefault();
        let data = new FormData();
        let beerData = [];

        for(let elem in this.state.beer) {
            beerData.push(this.state.beer[elem]);            
        }

        return fetch('http://localhost:8000/beer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data,
        }).then(res => {
            console.log(res);
            return res.json();
        }).then(data => {
            console.log(data);
        })
        .catch(err => err);
    }

    createCheckout(event) {
        event.preventDefault();
        // let data = new FormData();
 
        // this.createBeer(event).then(res => {
        //     // console.log(JSON.stringify(res));
        // });

        // data.append("beer", checkout.beer);
        // data.append("user", checkout.user);
        // data.append("price", checkout.price);
        // data.append("paymentMethod", checkout.paymentMethod);
        // data.append("paymentStatus", checkout.paymentStatus);

        // return fetch('http://localhost:8000/checkout', {
        //     method: 'POST',
        //     mode: "no-cors",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },  
        //     body: data,
        // }).then(res => {
        //     console.log(res);
        // }).catch(err => err);
    }

    handleForm(event) {
        event.preventDefault();

        const user = Object.assign({}, this.state.user);

        user[event.target.name] = event.target.value;

        this.setState({user: user});

        console.log(this.state.user);
    }

    textCard = {
        title: 'Quase lá!',
        text: "Agradecemos a preferência por nosso serviço!\nPara finalizar o pedido, preencha com as informações necessárias de pagamento e de envio e será gerado um código de pedido para você acompanhar o andamento da produção e entrega da sua cerveja."
    }

    checkoutCard = {
        handleCreateBeer: this.createBeer.bind(this),
        handleCheckout: this.createCheckout.bind(this),
        handleUserForm: this.handleForm.bind(this),
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
            <div className="container container-fluid text-center" style={{ paddingTop: '20px'}}>
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