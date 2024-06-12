import { createContext } from 'react';

export function createContextValue(val1, val2){
    return {value1: val1, value2: val2}
};

const myDefaultData = createContextValue("","");
//myDefaultData est la donnée par défaut en dehors du contexte
export const DataContext = createContext(myDefaultData);
DataContext.displayName = "DataContext";