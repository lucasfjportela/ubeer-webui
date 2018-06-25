import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class AdditionalIngredientCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.additionalIngredientCard = props;
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.type !== 'number') {
            this.setState({value: event.target.value});
        }
        this.props.handle(event);
    }

    handleClick() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {
        return (
            <div className="col-12 col-sm-12" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <button onClick={() => this.handleClick()} type="button" style={{ width: 'auto', height: 'auto' }} className="btn btn-secondary btn-lg center-block">Ingrediente Adicional</button>

                <ToggleDisplay show={this.state.show}>
                    <div className="row red align-items-center justify-content-center">
                        <div className="col col-4" style={{ paddingTop: '50px', paddingBottom: '50px', width: '100%' }}>
                            <div className="card bg-secondary mb-3">
                                <img className="card-img-top" src={this.additionalIngredientCard.img} style={{}} title={this.additionalIngredientCard.title} />
                                <div className="card-body text-center text-white">
                                    <h4 className="card-title">Ingrediente Adicional</h4>
                                    <p className="card-text">Selecione o ingrediente adicional desejado:</p>
                                    <select value={this.state.value} onChange={this.handleChange} class="custom-select my-1 mr-sm-2" style={{ width: '100%', textAlign: 'center' }}>
                                        <option id="dasd" value="test"></option>
                                        {this.props.ingredients}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </ToggleDisplay>
            </div>
        );
    }
}

export default AdditionalIngredientCard;