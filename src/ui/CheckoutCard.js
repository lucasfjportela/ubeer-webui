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
            {/*<div className="row" style={{ paddingTop: '20px', width: '100%' }}>*/}
            <div className="row" style={{paddingBottom: '30px'}}>

                {/*div className="row" style={{ paddingTop: '20px', width: '100%' }}>*/}
                {/*<div className="row">    */}
                {/*<div className="col-md-6 order-md-1">*/}
                <div className="col-sm-6">
                    {/*<hr className="mb-4"></hr>*/}
                    <h2 className="mb-3">Dados de Pagamento</h2>
                    <div className="d-block my-4" style={{}}>
                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" for="credit">Credit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" for="debit">Debit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" for="paypal">Paypal</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="boleto" name="paymentMethod" type="radio" className="custom-control-input" required />
                            <label className="custom-control-label" for="boleto">Boleto</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label for="cc-name">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" required />
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">
                                Name on card is required
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="cc-number">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" required />
                            <div className="invalid-feedback">
                                Credit card number is required
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label for="cc-expiration">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                            <div className="invalid-feedback">
                                Expiration date required
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="cc-expiration">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                            <div className="invalid-feedback">
                                Security code required
                            </div>
                        </div>
                    </div>
                    {/*<hr className="mb-4"></hr>*/}
                </div>


                {/*<div className="col-md-6 order-md-1 col-sm">*/}
                <div className="col-sm-6">
                    <h2 className="mb-3">Dados Pessoais</h2>
                    <form className="needs-validation" novalidate>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="firstName">First name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                                <div className="invalid-feedback">
                                    Valid first name is required.
                            </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="lastName">Last name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                                <div className="invalid-feedback">
                                    Valid last name is required.
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control" id="username" placeholder="Username" required />
                                <div className="invalid-feedback" style={{ width: '100%' }}>
                                    Your username is required.
                            </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label for="email">Email <span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                        </div>
                        </div>

                        <div className="mb-3">
                            <label for="address">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                        </div>
                        </div>

                        <div className="mb-3">
                            <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                        </div>

                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label for="country">Country</label>
                                <select className="custom-select d-block w-100" id="country" required>
                                    <option value="">Choose...</option>
                                    <option>United States</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                            </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="state">State</label>
                                <select className="custom-select d-block w-100" id="state" required>
                                    <option value="">Choose...</option>
                                    <option>California</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                            </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="zip">Zip</label>
                                <input type="text" className="form-control" id="zip" placeholder="" required />
                                <div className="invalid-feedback">
                                    Zip code required.
                            </div>
                            </div>
                        </div>
                        <hr className="mb-4"></hr>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                            <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                            <label className="custom-control-label" for="save-info">Save this information for next time</label>
                        </div>
                        {/*<hr className="mb-4"></hr>*/}
                        {/* aqui começava o payment*/}
                    </form>
                </div>

            </div>
        </div>

        <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>

        <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">&copy; 2018 UBeer</p>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Privacidade</a></li>
                <li className="list-inline-item"><a href="#">Termos</a></li>
                <li className="list-inline-item"><a href="#">Suporte</a></li>
            </ul>
        </footer>
    </div>
);

export default CheckoutCard;