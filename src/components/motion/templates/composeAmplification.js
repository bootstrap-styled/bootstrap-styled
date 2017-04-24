import React, { PropTypes } from 'react';
import { withTheme } from 'styled-components';

export default function composeAmplification(AbstractAnim, variableName) {
  const Amplification = function Amplification(props) {
    const { amplification, theme, ...rest } = props;

    return (
      <AbstractAnim
        amplification={amplification || theme[variableName]}
        {...rest}
      />
    );
  };

  Amplification.propTypes = {
    theme: PropTypes.object,
    amplification: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  };

  return withTheme(Amplification);
}
