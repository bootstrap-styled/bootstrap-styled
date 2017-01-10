/**
 * A Area
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

class Area extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    alt: PropTypes.string,
    coords: PropTypes.string,
    download: PropTypes.string,
    href: PropTypes.string,
    media: PropTypes.string,
    rel: PropTypes.string,
    shape: PropTypes.string,
    target: PropTypes.string,
    type: PropTypes.string,
  }

  render() {
    const { alt, coords, download, href, media, rel, shape, target, type } = this.props;

    return (
      <area
        shape={shape}
        coords={coords}
        alt={alt}
        href={href}
        download={download}
        media={media}
        rel={rel}
        target={target}
        type={type}
        className={this.props.className}
      />
    );
  }
}

// eslint-disable-next-line no-class-assign
Area = styled(Area)`
  display: inline;
  cursor: pointer;
`;

export default Area;
