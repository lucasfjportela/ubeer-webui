import React, { Component } from 'react';
import { Link } from 'react-router';
import TextCard from '../ui/TextCard';

class Home extends Component {
    textCard = {
        title: 'UBeer',
        text: 'Você gosta de cerveja? Aqui preenche com coisas fotos blabla'
    }

    render() {
        return (
            <div className="container-fluid text-black" style={{ paddingTop: '20px'}}>
                <div className="row">
                    {/* <TextCard {...this.textCard} /> */}
                    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark text-white">
                        <div class="col-md-5 p-lg-5 mx-auto my-5">
                            <h1 class="display-4 font-weight-normal">Personalize sua cerveja!!</h1>
                            <p class="lead font-weight-normal">Você é cervejeiro e tem vontade de criar uma cerveja personalizada sem precisar montar uma fábrica em casa? Está no lugar certo!!</p>
                            <Link to='/beer' className='btn btn-outline-secondary'>Experimente</Link>
                        </div>
                        <div class="product-device box-shadow d-none d-md-block"></div>
                        <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Home;