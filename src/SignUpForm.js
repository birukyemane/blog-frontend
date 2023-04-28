import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  isSubmitting: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "SUBMIT_FORM_REQUEST":
      return {
        ...state,
        isSubmitting: true,
        isSuccess: false,
        isError: false,
        errorMessage: "",
      };
    case "SUBMIT_FORM_SUCCESS":
      return { ...state, isSubmitting: false, isSuccess: true };
    case "SUBMIT_FORM_FAILURE":
      return {
        ...state,
        isSubmitting: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

const SignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "SUBMIT_FORM_REQUEST" });

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          password: state.password,
          confirmPassword: state.confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SUBMIT_FORM_SUCCESS" });
      } else {
        dispatch({ type: "SUBMIT_FORM_FAILURE", payload: data.message });
      }
    } catch (error) {
      dispatch({ type: "SUBMIT_FORM_FAILURE", payload: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            
        </div>
      <label>
        Name:
        <input
          type="text"
          value={state.name}
          onChange={(event) =>
            dispatch({ type: "SET_NAME", payload: event.target.value })
          }
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={state.email}
          onChange={(event) =>
            dispatch({ type: "SET_EMAIL", payload: event.target.value })
          }
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={state.password}
          onChange={(event) =>
            dispatch({ type: "SET_PASSWORD", payload: event.target.value })
          }
        />
      </label>

      <label>
        Confirm Password:
        <input
          type="password"
          value={state.confirmPassword}
          onChange={(event) =>
            dispatch({
              type: "SET_CONFIRM_PASSWORD",
              payload: event.target.value,
            })
          }
        />
      </label>

      {state.isSubmitting && <p>Submitting form...</p>}
      {state.isSuccess && <p>Form submitted successfully!</p>}
      {state.isError && <p>Error: {state.errorMessage}</p>}

      <button type="submit" disabled={state.isSubmitting}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
