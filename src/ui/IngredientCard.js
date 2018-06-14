import React from 'react';

function isMalte(props, callback) {
    //let malte = false;
    if (this.props.title == "Malte") {
        return (
            <div className="a">
                <p className="card-text">Selecione o tipo de malte desejado:</p>
                <select name="tipo-malte">
                    <option value="pilsen">Pilsen</option>
                    <option value="munich">Munich</option>
                    <option value="viena">Viena</option>
                    <option value="defumado">Defumado</option>
                    <option value="pale-ale">Pale Ale</option>
                    <option value="trigo-claro">Trigo claro</option>
                    <option val10am PTue="trig10am PTo-escuro">Trigo escuro</option>
                    <option value="malte-de-centeio">Malte de Centeio</option>
                    <option value="carahell">Carahell</option>
                    <option value="carared">Carared</option>
                    <option value="caramunich">Caramunich</option>
                    <option value="caraaroma">Caraaroma</option>
                    <option value="caraamber">Caraamber</option>
                    <option value="carapils">Carapils</option>
                    <option value="carabelge">Carabelge</option>
                    <option value="carabohemian">Carabohemian</option>
                </select>
            </div>
        );
    }
}

const IngredientCard = (props) => (
    <div className="col-12 col-sm-4" style={{ paddingTop: '50px' }}>
        <div className="card">
            <img className="card-img-top" src={props.img} style={{}} title={props.text} />
            <div className="card-body text-center">
                <h4 className="card-title">{props.title}</h4>
                isMalte(props,(resp)=>{
                    for (;;) {

                    }
                });
                {/*
                <select name="tipo-malte">
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
                </select>
                <p></p>
                {/*<p className="card-text" style={{ paddingBottom: '10px' }}>{props.text1}</p>*/}                <div className="card-footer">
                    {/*<p className="card-text" style={{ paddingTop: '20px' }}>{props.text2}</p>*/}
                    <form action="GET">
                        <input type="number" style={{ width: '90%' }} name="pct" placeholder="   Quantidade desejada, em %" />
                    </form><p></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div >
);

export default IngredientCard;