import React from 'react';

const CheckoutCard = () => (
    <div className="container-fluid text-center">
        {/*<div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
        </div>*/}

        {/*<div className="col-md-4 order-md-2 mb-4 text-center" style={{ paddingTop: '20px', width: '100%'}}>*/}
        <div className="text-center" style={{ paddingTop: '20px', width: '100%' }}>
            <h4 className="d-flex justify-content-center align-items-center mb-3">
                <span className="text-muted">Sua cerveja</span>
                <span className="badge badge-secondary badge-pill"></span>
            </h4>
            <ul className="card-body list-group mb-3 text-center" style={{ paddingTop: '10px' }}>
                {/*<li className="list-group-item d-flex justify-content-between lh-condensed">*/}
                <li className="list-group-item  lh-condensed">
                    <div>
                        <h6 className="my-0" style={{ textAlign: 'center' }}>Resumo da cerveja</h6>
                        <small className="text-muted">Tipo e quantidade de malte aqui</small>
                    </div>
                    <span className="text-muted">$12</span>
                </li>
                {/*<li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 className="my-0">Second product</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$8</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between lh-condensed">
                        <div>
                            <h6 className="my-0">Third item</h6>
                            <small className="text-muted">Brief description</small>
                        </div>
                        <span className="text-muted">$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between bg-light">
                        <div className="text-success">
                            <h6 className="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span className="text-success">-$5</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>$20</strong>
                    </li>*/}
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
                    <h2 className="mb-3">Pagamento</h2>
                    <div className="d-block my-4" style={{}}>
                        <div>
                            <figure class="figure col-sm-6">
                                <img src="boleto.png" width="120px" height="50px" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img>
                                <figcaption class="figure-caption">Gerar boleto</figcaption>
                            </figure> 
                            <figure class="figure col-sm-6">
                                <img src="paypal.png" width="160px" height="50px" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."></img>
                                <figcaption class="figure-caption">Mais praticidade</figcaption>
                            </figure>  
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <h2 className="mb-3">Dados Pessoais</h2>
                    <form className="needs-validation" novalidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="firstName">Primeiro nome</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Harry" value="" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                            </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="lastName">Último nome</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Potter" value="" required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>
                        
                        <div className="mb-3">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="custom@ubeer.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                        </div>
                        </div>

                        <div className="mb-3">
                            <label for="address">Endereço</label>
                            <input type="text" className="form-control" id="address" placeholder="Beco Diagonal, 1234 A" required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                        </div>
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label for="country">País</label>
                                <select className="custom-select d-block w-100" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                            </div>
                            </div>
                            <div className="col-md-4 mb-3">
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
                            <div className="col-md-3 mb-3">
                                <label for="zip">CEP</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required />
                                <div className="invalid-feedback">
                                    Zip code required.
                            </div>
                            </div>
                        </div>
                        <hr className="mb-4"></hr>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" for="same-address">Usar o endereço fornecido no boleto</label>
                        </div>
                        {/* <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" for="save-info">Save this information for next time</label>
                        </div> */}
                        {/*<hr className="mb-4"></hr>*/}
                        {/* aqui começava o payment*/}
                    </form>
                </div>

            </div>
        </div>

        <button className="btn btn-success btn-lg btn-block" type="submit">Finalizar pedido</button>
    </div>
);

export default CheckoutCard;