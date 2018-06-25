import React from 'react';

const TextCard = (props) => (
    <div class="card container-fluid bg-dark text-white">
        <div class="card-header">
            <h2>{props.title}</h2>
        </div>
        <div class="card-body bg-secondary">
            <p class="card-text">{props.text}</p>
        </div>
    </div>
)

export default TextCard;