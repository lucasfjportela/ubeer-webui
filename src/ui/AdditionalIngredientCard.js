import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class AdditionalIngredientCard extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };

        this.additionalIngredientCard = props;
    }

    handleClick() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <div className="col-12 col-sm-12" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <button onClick={() => this.handleClick()} type="button" style={{ width: 'auto', height: 'auto' }} className="btn btn-primary btn-lg center-block">Ingrediente Adicional</button>

                <ToggleDisplay show={this.state.show}>
                    <div className="row red align-items-center justify-content-center">
                        <div className="col col-4" style={{ paddingTop: '50px', paddingBottom: '50px', width: '100%' }}>
                            <div className="card">
                                <img className="card-img-top" src={this.additionalIngredientCard.img} style={{}} title={this.additionalIngredientCard.title} />
                                <div className="card-body text-center">
                                    <h4 className="card-title">Ingrediente Adicional</h4>
                                    <p className="card-text">Selecione o ingrediente adicional desejado:</p>
                                    <select name="ingrediente-adicional" class="custom-select my-1 mr-sm-2" style={{ width: '100%', textAlign: 'center' }}>
                                        <option value="raiz-de-angelica">Raiz de Angélica</option>
                                        <option value="anis">Anis</option>
                                        <option value="casca-de-laranja-amarga">Casca de Laranja amarga</option>
                                        <option value="cardamomo">Cardamomo</option>
                                        <option value="canela">Canela</option>
                                        <option value="cravo-da-india">Cravo da Índia</option>
                                        <option value="coentro">Coentro</option>
                                        <option value="semente-de-cominho">Semente de Cominho</option>
                                        <option value="inula-helenium">Inula Helenium</option>
                                        <option value="gengibre">Gengibre</option>
                                        <option value="graos-do-paraiso">Grãos-do-paraíso</option>
                                        <option value="urze">Urze</option>
                                        <option value="flor-de-hibiscus">Flor de Hibiscus</option>
                                        <option value="musgo-irlandes">Musgo Irlandês</option>
                                        <option value="flor-de-jasmin">Flor de Jasmin</option>
                                        <option value="frutos-de-junipero">Frutos de Junípero</option>
                                        <option value="casca-de-limao">Casca de Limão</option>
                                        <option value="casca-de-laranja">Casca de Laranja</option>
                                        <option value="folha-de-limonete">Folha de Limonete</option>
                                        <option value="Camomila">Camomila</option>
                                        <option value="erva-doce">Erva-doce</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Prosseguir com o pagamento</button>
                </ToggleDisplay>
            </div>
        );
    }
}

export default AdditionalIngredientCard;