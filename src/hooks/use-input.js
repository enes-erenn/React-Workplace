import { useReducer } from "react";

const initialInputState = { value: "", isTouched: false };

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
};

const useInput = (validation) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validation(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
