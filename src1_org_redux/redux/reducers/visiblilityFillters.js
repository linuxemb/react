import  { SET_FILTER } from "../actionsTypes";
import  { VISIBILITY_FILTERS } from "../../constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilters = ( state = initialState, action) => {
    switch (action.type )   {
        case SET_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
            }
        }
};

export default visibilityFilters;