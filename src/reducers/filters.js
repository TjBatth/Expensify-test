import moment from 'moment';

const filterReducerDefaultSate={
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
     endDate: moment().endOf('month')
};
export default (state=filterReducerDefaultSate,action)=>{ 
    switch(action.type){
        case 'EXPENSE_TEXT_FILTER':
        return {
            ...state,
            text:action.text
        }
        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy:'amount'
        }
        break;
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy:'date'
        }
        case 'FILTER_START_DATE':
        return {
            ...state,
            startDate:action.date
        }
        case 'FILTER_END_DATE':
        return {
            ...state,
            endDate:action.date
        }
        default:
        return state;
    }
}
