 //const NEW_CALCULATION = 'NEW_CALCULATION';
 const newCalculation = calculationDone => {
    return{
    type: 'NEW_CALCULATION',
    value: calculationDone
  }
};

 //const REMOVE_CALCULATION = 'REMOVE_CALCULATION';
 const removeCalculation = calculationId =>{
     return{
    type:'REMOVE_CALCULATION',
    value: calculationId
  }
};

export {newCalculation, removeCalculation};

