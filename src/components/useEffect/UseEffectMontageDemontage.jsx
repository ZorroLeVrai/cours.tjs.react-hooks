import React, { useState, useEffect } from 'react';
import styles from "../Global.module.css";

export const UseEffectMontageDemontage = () => {
  const valeur_initiale = 0;
  const [counter, setCounter] = useState(valeur_initiale);

  const fonctionAppeleeAuDemontage = () => {
    console.log("Fonction appeléé au démontage");
  }

  const fonctionAppeleeAuMontage = () => {
    console.log("Fonction appeléé au montage");

    return fonctionAppeleeAuDemontage;
  }

  useEffect(fonctionAppeleeAuMontage, []);

  const handleClick = () => {
    setCounter(current => current+1);
  };

  return (
    <div className={styles.border}>
      <div>UseSimpleCounterDemo</div>
      <div>compteur: {counter}</div>
      <button onClick={handleClick}>Mise à jour</button>
    </div>
  );
};