import React from 'react';

{/*class MaltCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };

        this.test = props;
    }


    getData = () => {
        // [...somewhere in here I define a variable which  
        // I think will be useful as data in other component...]
        var type;

    }

    render() {
        return(
            <div className="col-12 col-sm-4" style={{ paddingTop: '50px' }}>
        <div className="card">
            <img className="card-img-top" src={test.img} style={{}} title={test.text} />
            <div className="card-body text-center">
                <h4 className="card-title">{test.title}</h4>
                <p className="card-text">Selecione o tipo desejado de malte:</p>
                <select name="tipo-malte" class="custom-select my-1 mr-sm-2" style={{ width: '100%', textAlign: 'center' }}>
                    {test.ingredients}
                    {/* <option value="pilsen">Pilsen</option>
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
                {/*<p className="card-text" style={{ paddingBottom: '10px' }}>{props.text1}</p>
                <div className="card-footer">
                    {/*<p className="card-text" style={{ paddingTop: '20px' }}>{props.text2}</p>
                    <form>
                        <input type="number" class="form-control" placeholder="Quantidade de malte (kg)"></input>
                        <p></p>
                    </form>
                </div>
            </div>
        </div>
    </div >
        );
    }
};*/}

const MaltCard = (props) => (
    <div className="col-12 col-sm-4" style={{ paddingTop: '50px' }}>
        <div className="card bg-secondary mb-3">
            <img className="card-img-top" src={props.img} style={{}} title={props.text} />
            <div className="card-body text-center text-white">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">Selecione o tipo desejado de malte:</p>
                <select name="tipo-malte" class="custom-select my-1 mr-sm-2" style={{ width: '100%', textAlign: 'center' }}>
                    {props.ingredients}
                    {/* <option value="pilsen">Pilsen</option>
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
                    <option value="carafa">Carafa</option>*/} 
                </select>
                <p></p>
                {/*<p className="card-text" style={{ paddingBottom: '10px' }}>{props.text1}</p>*/}
                <div className="card-footer">
                    {/*<p className="card-text" style={{ paddingTop: '20px' }}>{props.text2}</p>*/}
                    <form>
                        <input type="number" class="form-control" placeholder="Quantidade de malte (kg)"></input>
                        <p></p>
                    </form>
                </div>
            </div>
        </div>
    </div >
);

export default MaltCard;