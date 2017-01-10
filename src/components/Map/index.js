/**
 * Map Component
 *
 */
import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

class Map extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
  }

  render() {
    return (
      <map
        name={this.props.name}
        className={cn(this.props.className, 'map')}
      >
        {this.props.children}
      </map>
    );
  }
}

// eslint-disable-next-line no-class-assign
Map = styled(Map)`
  &.map {
    display: inline;
  }
`;

export default Map;
