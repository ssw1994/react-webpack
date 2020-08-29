export const PREV_STEP = "PREV_STEP";
export const NEXT_STEP = "NEXT_STEP";
export const SET_STEPS = "SET_STEPS";
export const CLEAR_STEPPER = "CLEAR_STEPPER";
export function nextStep(payload = null) {
  return {
    type: NEXT_STEP,
    payload: payload,
  };
}

export function prevStep(payload = null) {
  return {
    type: PREV_STEP,
    payload: payload,
  };
}

export function setSteps(payload = []) {
  return {
    type: SET_STEPS,
    payload: payload,
  };
}

export function resetStepper(payload = { activeStep: 0, steps: [] }) {
  return {
    type: CLEAR_STEPPER,
    payload: payload,
  };
}
