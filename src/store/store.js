

// set initial state
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: ''
}


const reducer = (state = initialState, action) => { // we need to set the state to the initual state unlike useReducer though this is the same concept
    switch (action.type) {
      
      // deposit anount
      case "account/deposit":
        return{
          ...state,
          balance: state.balance + action.payload
        }
        
        // withdraw amount
        case "account/withdraw":
          return{
            ...state,
            balance: state.balance - action.payload
          }
      
          // loan about
          case "account/requestLoan":
           if(state.loan > 0) return state;
           // later
           return{
            ...state,
            loan: action.payload
           }

           //loan payback
           case "account/payLoan":
            return{
              ...state,
              loan: 0,
              purpose: '',
              balance: state.balance - state.loan
            }
         
    
      default:
       return state; // always return state like this ESPECIALLY for redux
    }
}


