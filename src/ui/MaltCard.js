import React from 'react';

const MaltCard = (props) => (
    <div className="col-12 col-sm-4" style={{ paddingTop: '50px' }}>
        <div className="card">
            <img className="card-img-top" src={props.img} style={{}} title={props.text} />
            <div className="card-body text-center">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">Selecione o tipo desejado de malte:</p>
                <select name="tipo-malte" style={{ width: '100%', textAlign: 'center' }}>
                    <option value="pilsen">Pilsen</option>
                    <option value="munich">Munich</option>
                    <option value="viena">Viena</option>
                    <option value="defumado">Defumado</option>
                    <option value="pale-ale">Pale Ale</option>
                    <option value="trigo-claro">Trigo claro</option>
                    <option value="trigo-escuro">Trigo escuro</option>
                    <option value="malte-de-centeio">Malte de Centeio</option>
                    <option value="carahell">Carahell</option>
                    <option value="carared">Carared</option>
                    <option value="caramunich">Caramunich</option>
                    <option value="caraaroma">Caraaroma</option>
                    <option value="caraamber">Caraamber</option>
                    <option value="carapils">Carapils</option>
                    <option value="carabelge">Carabelge</option>
                    <option value="carabohemian">Carabohemian</option>
                    <option value="carawheat">Carawheat</option>
                    <option value="melanoidina">Melanoidina</option>
                    <option value="acidificado">Acidificado</option>
                    <option value="trigo-torrado">Trigo torrado</option>
                    <option value="carafa">Carafa</option>
                </select>
                <p></p>
                {/*<p className="card-text" style={{ paddingBottom: '10px' }}>{props.text1}</p>*/}
                <div className="card-footer">
                    {/*<p className="card-text" style={{ paddingTop: '20px' }}>{props.text2}</p>*/}
                    <form action="GET">
                    <input type="number" name="pct" placeholder="Quantidade desejada, em %" style={{ width: '90%', textAlign: 'center', textAlignLast: 'auto' }} />                    </form><p></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div >
);

export default MaltCard;