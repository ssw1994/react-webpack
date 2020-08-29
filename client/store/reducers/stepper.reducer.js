import {
  PREV_STEP,
  NEXT_STEP,
  SET_STEPS,
  CLEAR_STEPPER,
} from "../actions/stepper.action";
const initialState = {
  activeStep: 0,
  steps: [],
};

export default function stepReducer(state = initialState, action) {
  switch (action.type) {
    case PREV_STEP:
      if (state.activeStep == initialState.activeStep) return { ...state };
      return { ...state, activeStep: state.activeStep - 1 };
    case NEXT_STEP:
      if (state.activeStep === state.steps.length - 1) return { ...state };
      return { ...state, activeStep: state.activeStep + 1 };
    case SET_STEPS:
      if (action.payload && action.payload instanceof Array)
        return { ...state, steps: action.payload };
      else return { ...state };
    case CLEAR_STEPPER:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}
