import React, {Component} from 'react';
import TextCard from '../ui/TextCard';
import CheckoutCard from '../ui/CheckoutCard';

class Checkout extends Component {
    
    textCard = {
        title: 'Quase lá!',
        text: "Agradecemos a preferência por nosso serviço!\nPara finalizar o pedido, preencha com as informações necessárias de pagamento e de envio e será gerado um código de pedido para você acompanhar o andamento da produção e entrega da sua cerveja."
    }

    render() {
        return (
            <div className="container container-fluid text-center" style={{ paddingTop: '20px'}}>
                <div className="row">
                    <TextCard {...this.textCard} />
                    <CheckoutCard {...this.checkoutCard} />
                </div>
            </div>
        );
    }
}

export default Checkout;