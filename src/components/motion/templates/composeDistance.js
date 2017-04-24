import React, { PropTypes } from 'react';
import { withTheme } from 'styled-components';

export default function composeDistance(AbstractAnim, variableName) {
  const Distance = function Distance(props) {
    const { distance, theme, ...rest } = props;

    return (
      <AbstractAnim
        distance={distance || theme[variableName]}
        {...rest}
      />
    );
  };

  Distance.propTypes = {
    theme: PropTypes.object,
    distance: PropTypes.string,
  };

  return withTheme(Distance);
}
