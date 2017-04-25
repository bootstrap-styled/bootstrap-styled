import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

export default function composeRotation(AbstractAnim, variableName) {
  const Rotation = function Rotation(props) {
    const { rotation, theme, ...rest } = props;

    let degree = rotation || theme[variableName];
    if (!isNaN(rotation) || degree.indexOf('deg') === -1) {
      degree = `${parseInt(degree, 10).toString()}deg`;
    }

    return (
      <AbstractAnim
        rotation={degree}
        {...rest}
      />
    );
  };

  Rotation.propTypes = {
    theme: PropTypes.object,
    rotation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  return withTheme(Rotation);
}
