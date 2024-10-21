import React from 'react'
import withToolTip from './withToolTip';

const Age = ({age}) => {
    return (
        <span data-testid="age_label" className="padding-medium border-dark border">Votre age: {age}</span>
    );
}

export default withToolTip(Age, "Affiche votre âge");