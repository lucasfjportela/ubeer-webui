import React from 'react';
// import Boleto from 'node-boleto';

// const boletoGenerate = () => {
//     const boleto = new Boleto({
//         'banco': "santander", // nome do banco dentro da pasta 'banks'
//         'data_emissao': new Date(),
//         'data_vencimento': new Date(new Date().getTime() + 5 * 24 * 3600 * 1000), // 5 dias futuramente
//         'valor': 1500, // R$ 15,00 (valor em centavos)
//         'nosso_numero': "1234567",
//         'numero_documento': "123123",
//         'cedente': "Pagar.me Pagamentos S/A",
//         'cedente_cnpj': "18727053000174", // sem pontos e traços
//         'agencia': "3978",
//         'codigo_cedente': "6404154", // PSK (código da carteira)
//         'carteira': "102"
//     });

//     console.log("Linha digitável: " + boleto['linha_digitavel'])

//     boleto.renderHTML(function(html){
//         console.log(html);
//     });
// };

const createBeer = (data) => {
    return fetch('http://localhost:8000/beer', {
        method: 'POST',
        mode: 'CORS',
        body: JSON.stringify(this.beerTest),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res);
        return res;
    }).catch(err => err);
};

const CheckoutCard = (props) => (
    <div className="container-fluid text-center">
        <div className="text-center" style={{ paddingTop: '20px', width: '100%' }}>
            <h4 className="d-flex justify-content-center align-items-center mb-3">
                <span className="text-muted">Sua cerveja está pronta para ser produzida</span>
                <span className="badge badge-secondary badge-pill"></span>
            </h4>
            <ul className="card-body list-group mb-3 text-center" style={{ paddingTop: '10px', alignItems: 'center', paddingLeft: '20px' }}>
                {/*<li className="list-group-item d-flex justify-content-between lh-condensed">*/}
                <li className="list-group-item lh-condensed bg-secondary text-center" style={{ alignItems: 'center', width: '800px', height: 'auto', textAlign: 'center'}}>
                    <div>
                        <h4 className="my-0" style={{ textAlign: 'center' }}>Resumo</h4>
                            { props.beer ?
                            <div>
                                    <small className="text-muted"><b>Malte: </b>{props.beer.malt.name} - {props.beer.malt.quantity}kg</small><br></br>
                                    <small className="text-muted"><b>Lúpulo: </b>{props.beer.hop.name} - {props.beer.hop.quantity}kg</small><br></br>
                                    <small className="text-muted"><b>Levedura: </b>{props.beer.yeast.name} - {props.beer.yeast.quantity}g</small><br></br>
                                    <small className="text-muted"><b>Adicional: </b>{props.beer.addt.name}</small><br></br>
                                    <span className="text-muted"><b>Total: R$ {props.price}</b></span>
                            </div>
                                 :
                            <p>Nenhum pedido realizado ainda....</p>
                            }
                    </div>
                </li>
            </ul>

            {/*<form className="card p-2" action="POST">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Promo code" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary">Validar</button>
                        </div>
                    </div>
                </form>*/}
        </div>

        <div className="container">
            <div className="row" style={{paddingBottom: '30px'}}>
                <div className="col-sm-6">
                    <h2 className="mb-3 text-white">Pagamento</h2>
                    <div className="d-block my-4" style={{}}>
                        <div>
                            <figure class="figure col-sm-6">
                                <a href="#">
                                    <img src="boleto.png" width="120px" height="50px" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img>
                                </a>
                                <figcaption class="figure-caption">Gerar boleto</figcaption>
                            </figure> 
                            <figure class="figure col-sm-6">
                                <img src="paypal.png" width="160px" height="50px" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img>
                                <figcaption class="figure-caption text-white">Mais praticidade</figcaption>
                            </figure>  
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <h2 className="mb-3 text-white">Dados Pessoais</h2>
                    <form className="needs-validation" novalidate>
                        <div className="row">
                            <div className="col-md-6 mb-3 text-white">
                                <label for="firstName">Primeiro nome</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Harry" value="" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                            </div>
                            </div>
                            <div className="col-md-6 mb-3 text-white">
                                <label for="lastName">Último nome</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Potter" value="" required />
                                <div className="invalid-feedback text-white">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-3 text-white">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="custom@ubeer.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                        </div>
                        </div>

                        <div className="mb-3 text-white">
                            <label for="address">Endereço</label>
                            <input type="text" className="form-control" id="address" placeholder="Beco Diagonal, 1234 A" required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                        </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3 text-white">
                                <label for="country">País</label>
                                <select className="custom-select d-block w-100" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                            </div>
                            </div>
                            <div className="col-md-4 mb-3 text-white">
                                <label for="state">Estado</label>
                                {/*<select className="custom-select d-block w-100" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>*/}
                                <select className="custom-select d-block w-100" id="estados-brasil" required>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                            </div>
                            </div>
                            <div className="col-md-3 mb-3 text-white">
                                <label for="zip">CEP</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required />
                                <div className="invalid-feedback">
                                    Zip code required.
                            </div>
                            </div>
                        </div>
                        <hr className="mb-4"></hr>
                        <div className="custom-control custom-checkbox text-white">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" for="same-address">Usar o endereço fornecido no boleto</label>
                        </div>
                    </form>
                </div>

            </div>
        </div>

        <form onSubmit={props.handleCheckout} action="#">
            <button className="btn btn-success btn-lg btn-block" value="Submit" type="submit">Finalizar pedido</button>            
        </form>

    </div>
);

export default CheckoutCard;