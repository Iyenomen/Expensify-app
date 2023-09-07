import { createStore } from "redux";

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

const countReducer = (state = { count: 10 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }

};

const store = createStore(countReducer);

// if (action.type === 'INCREMENT') {
//   return {
//     count: state.count + 1
//   };
// } else {
//   return state;
// }

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// Reset count equal to zero
store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch({ decrementBy: 10 });

store.dispatch(setCount({ count: -100 }));
// Reset count to zero