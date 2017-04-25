import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

export default function composePerspective(AbstractAnim, variableName) {
  const Perspective = function Perspective(props) {
    const { perspective, theme, ...rest } = props;

    return (
      <AbstractAnim
        perspective={perspective || theme[variableName]}
        {...rest}
      />
    );
  };

  Perspective.propTypes = {
    theme: PropTypes.object,
    perspective: PropTypes.string,
  };

  return withTheme(Perspective);
}
