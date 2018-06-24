import React from 'react';

const HopCard = (props) => (
    <div className="col-12 col-sm-4" style={{ paddingTop: '50px' }}>
        <div className="card">
            <img className="card-img-top" src={props.img} style={{}} title={props.text} />
            <div className="card-body text-center">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">Selecione o tipo desejado de lúpulo:</p>
                <select name="tipo-lupulo" class="custom-select my-1 mr-sm-2" style={{ width: '100%', textAlign: 'center' }}>
                    {props.ingredients}
                    {/* <optgroup label="Lúpulos Alemães e Tchecos">
                        <option value="saphir">Saphir</option>
                        <option value="hallertauer-mittelfruh">Hallertauer Mittelfruh</option>
                        <option value="hallertauer-magnum">Hallertauer Magnum</option>
                        <option value="hallertauer-merkur">Hallertauer Merkur</option>
                        <option value="saaz">Saaz</option>
                        <option value="spalt">Spalt</option>
                        <option value="tettnang">Tettnang</option>
                        <option value="spalt">Spalt</option>
                    </optgroup>
                    <optgroup label="Lúpulos Ingleses">
                        <option value="east-kent-golding">East Kent Golding</option>
                        <option value="target">Target</option>
                        <option value="admiral">Admiral</option>
                        <option value="fuggle">Fuggle</option>
                        <option value="fuggle">Fuggle</option>
                        
                    </optgroup>
                    <optgroup label="Lúpulos Americanos">
                        <option value="amarillo">Amarillo</option>
                        <option value="cascade">Cascade</option>
                        <option value="centennial">Centennial</option>
                        <option value="zeus">Zeus</option>
                        <option value="ahtanum">Ahtanum</option>
                        <option value="mount-hood">Mount Hood</option>
                    </optgroup>     */}
                </select>
                <p></p>
                {/*<p className="card-text" style={{ paddingBottom: '10px' }}>{props.text1}</p>*/}
                <div className="card-footer">
                    {/*<p className="card-text" style={{ paddingTop: '20px' }}>{props.text2}</p>*/}
                    <form>
                        <input type="number" class="form-control" placeholder="Quantidade de lúpulo (g)"></input>
                        <p></p>
                    </form>
                    {/* <form action="GET">
                    <input type="number" name="pct" placeholder="Quantidade desejada, em %" style={{ width: '90%', textAlign: 'center', textAlignLast: 'auto' }} />                    </form><p></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    </div >
);

export default HopCard;