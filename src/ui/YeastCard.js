import React from 'react';

const YeastCard = (props) => (
    <div className="col-12 col-sm-4" style={{ paddingTop: '50px' }}>
        <div className="card bg-secondary mb-3">
            <img className="card-img-top" src={props.img} style={{}} title={props.text} />
            <div className="card-body text-center text-white">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">Selecione o tipo desejado de levedura:</p>
                <select name="tipo-levedura" class="custom-select my-1 mr-sm-2" style={{ width: '100%', textAlign: 'center' }}>
                    {props.ingredients}
                    {/* <optgroup label="Lager">
                        <option value="s-calbergensis">Saccharomyces calbergensis</option>
                    </optgroup>
                    <optgroup label="Ale">
                        <option value="s-cerevisiae">Saccharomyces cerevisiae</option>
                    </optgroup>
                    <optgroup label="Lambic">
                        <option value="brettanomyces">Brettanomyces</option>
                    </optgroup> */}
                </select>
                <p></p>
                {/*<p className="card-text" style={{ paddingBottom: '10px' }}>{props.text1}</p>*/}
                <div className="card-footer">
                    {/*<p className="card-text" style={{ paddingTop: '20px' }}>{props.text2}</p>*/}
                    <div class="form-group">
                        <select class="form-control" id="exampleFormControlSelect2">
                            <option selected>Quantidade de sachês</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    {/* <form action="GET">
                    <input type="number" name="pct" placeholder="Quantidade desejada, em %" style={{ width: '90%', textAlign: 'center', textAlignLast: 'auto' }} />                    </form><p></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    </div>
);

export default YeastCard;