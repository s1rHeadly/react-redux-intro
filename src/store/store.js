import { createStore } from "redux"


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
            loan: action.payload.amount,
            loanPurpose: action.payload.purpose,
            balance: state.balance + action.payload.amount
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


const store = createStore(reducer);


// use our dispatch our actions here
// store.dispatch({
//   type: 'account/deposit',
//   payload: 500,
// })


// store.dispatch({
//   type: 'withdraw',
//   payload: 300,
// })

function deposit(amount){
  return{
      type: 'account/deposit',
      payload: amount,
  }
}



function withdraw(amount){
  return{
    type: 'withdraw',
    payload: amount,
  }
}


function requestLoan(amount, reason){
  return{
    type: 'account/requestLoan',
    payload: {
      amount: amount,
      purpose: reason
      }
    }
}


function payLoan(){
  return{
    type: 'account/payLoan'
  }
}



//test the file renders when we have it imported in the index.js file
// 1. console.log('store rendered')


// 2. log the store to get all state values
console.log(store.getState())


// 3. add action creators to the store
store.dispatch(deposit(500)) // dispatch the deposit function to the store like this...
store.dispatch(withdraw(200)) // same for withdraw function etc ....
store.dispatch(requestLoan(3000, 'To buy a car'))

console.log(store.getState()) // then test it works again

store.dispatch(payLoan());


console.log(store.getState()) // then test it works again
