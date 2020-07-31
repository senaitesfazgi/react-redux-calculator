import {v4 as uuidv4} from 'uuid';

const calculationReducer = (state = [], action) => {
    switch(action.type)
    {
        case 'NEW_CALCULATION':
            const newTask = {
                uniqueId: uuidv4(),
                value: action.value
            };

            const updatedState = state.slice();
            updatedState.push(newTask);
            return updatedState;
            
        case 'REMOVE_CALCULATION':
            state = state.filter(calculation => calculation.uniqueId !== action.value);
            return;
    }
}

export default calculationReducer;

