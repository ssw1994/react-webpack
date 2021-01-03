import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { steps, activeStep } from "../../store/selectors/stepper.selector";
import { prevStep, nextStep } from "../../store/actions/stepper.action";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import "./stepper.scss";
export default function Stepper() {
  const dispatch = useDispatch();
  const StepperConfig = {
    steps: useSelector(steps),
    activeStep: useSelector(activeStep),
  };
  return (
    <div className="stepper" style={{ marginTop: "15px" }}>
      <Card className="b-shadow">
        {StepperConfig.steps.map((step, index) => {
          return StepperConfig.activeStep === index ? (
            <div key={index}>
              <CardHeader
                title={step.name}
                className="stepper-title"
              ></CardHeader>
              <CardContent className="stepper-content s-scroll">
                <div className="step" key={index}>
                  <div className="step-body">{<step.component />}</div>
                </div>
              </CardContent>
            </div>
          ) : null;
        })}
        {StepperConfig.steps?.length > 1 ? (
          <CardActions className="stepper-actions">
            <div className="step-action">
              {StepperConfig.steps.map((step, index) => {
                return StepperConfig.activeStep === index ? (
                  <div key={index}>
                    <Button
                      className="pre-btn"
                      disabled={StepperConfig.activeStep === 0}
                      onClick={(e) => dispatch(prevStep())}
                    >
                      {step.prevTitle}
                    </Button>
                    <Button
                      className="next-btn"
                      disabled={
                        StepperConfig.activeStep ===
                        StepperConfig.steps.length - 1
                      }
                      onClick={(e) => dispatch(nextStep())}
                    >
                      {step.nextTitle}
                    </Button>
                  </div>
                ) : null;
              })}
            </div>
          </CardActions>
        ) : null}
        ;
      </Card>
    </div>
  );
}
