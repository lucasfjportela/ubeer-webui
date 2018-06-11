import React from 'react';

const AdditionalIngredientCard = (props) => (
    <div className="col-12 col-sm-4 center" style={{}}>
        <div className="card" style={{  }}>
            <img className="card-img-top" src={props.img} style={{}} title={props.text1} />
            <div className="card-body text-center">
                <h5 className="card-title">{props.title}</h5>
                
                <div className="card-footer">
                    
                    <form action="GET">
                        <input type="number" name="pct" placeholder="Quantidade desejada, em %" />
                    </form><p></p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div >    
);

export default AdditionalIngredientCard;