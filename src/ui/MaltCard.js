import React, { Component } from 'react';

class MaltCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.type !== 'number') {
            this.setState({value: event.target.value});
        }
        this.props.handle(event);
    }

    render() {
        return (
            <div className="col-12 col-sm-4" style={{ paddingTop: '50px' }}>
                <div className="card">
                    <img className="card-img-top" src={this.props.img} style={{}} title={this.props.text} />
                    <div className="card-body text-center">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">Selecione o tipo desejado de malte:</p>
                        <select value={this.state.value} onChange={this.handleChange} class="custom-select my-1 mr-sm-2" style={{ width: '100%', textAlign: 'center' }}>
                            <option id="dasd" value="test"></option>
                            {this.props.ingredients}
                        </select>
                        <p></p>
                        <div className="card-footer">
                            <form>
                                <input type="number" onChange={this.handleChange} class="form-control" placeholder="Quantidade de malte (kg)"></input>
                                <p></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default MaltCard;