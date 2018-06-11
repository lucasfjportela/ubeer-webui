import React, { Component } from 'react';
import TextCard from '../ui/TextCard';

class Home extends Component {
    textCard = {
        title: 'UBeer',
        text: 'Você gosta de cerveja? Aqui preenche com coisas fotos blabla'
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <TextCard {...this.textCard} />
                </div>
            </div>
        );
    }
}

export default Home;