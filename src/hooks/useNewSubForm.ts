import { useCallback, useReducer } from "react";
import { Sub } from "../types";

interface FormState {
  inputValues: Sub;
}

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

const INITIAL_STATE = {
  nick: "",
  subMonths: 0,
  avatar: "",
  description: "",
};

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear":
      return INITIAL_STATE;

    default:
      return state;
  }
};

const useNewSubForm = () => {
  // return useReducer(formReducer, INITIAL_STATE)
  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const clearForm = useCallback(() => dispatch({ type: "clear" }), []);

  const changeState = useCallback(
    (name: string, value: string) =>
      dispatch({
        type: "change_value",
        payload: {
          inputName: name,
          inputValue: value,
        },
      }),
    []
  );

  return {
    formState: inputValues,
    changeState,
    clearForm,
  };
};

export default useNewSubForm;
