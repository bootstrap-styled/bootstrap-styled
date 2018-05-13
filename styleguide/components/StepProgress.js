import React from 'react';
import PropTypes from 'prop-types';
// import { StepProgress, Step } from 'step-progress';
import { StepProgress, Step } from 'step-progress';

console.log(StepProgress)
console.log(Step)

class BasicExample extends React.Component {


  render() {
    return (
      <StepProgress className="mt-3">
        <Step id="step-1" />
        <Step id="step-2" />
      </StepProgress>
    )
  };
};

export default BasicExample
