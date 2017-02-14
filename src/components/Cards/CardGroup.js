/**
 * CardGroup Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { borderRightRadius, borderLeftRadius } from '../../styled/mixins/border-radius';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import { ifThen } from '../../styled/mixins/conditional';
import { card } from '../../styled/utilities/card';

const defaultProps = {
  theme: bsTheme,
};
class CardGroup extends React.Component {// eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
  }

  render() {
    const { className, children, theme, ...rest } = this.props;// eslint-disable-line no-unused-vars
    return (
      <div
        className={cn(className, 'card-group')}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
CardGroup = styled(CardGroup)`
  ${(props) => `
    ${card(
      props.theme['$enable-rounded'],
      props.theme['$enable-hover-media-query'],
      props.theme['$card-spacer-y'],
      props.theme['$card-spacer-x'],
      props.theme['$card-bg'],
      props.theme['$card-border-width'],
      props.theme['$card-border-color'],
      props.theme['$card-border-radius'],
      props.theme['$card-margin-y-halved'],
      props.theme['$card-margin-x-halved'],
      props.theme['$card-cap-bg'],
      props.theme['$card-border-radius-inner'],
      props.theme['$brand-primary'],
      props.theme['$brand-success'],
      props.theme['$brand-info'],
      props.theme['$brand-warning'],
      props.theme['$brand-danger'],
      props.theme['$btn-primary-bg'],
      props.theme['$btn-secondary-border'],
      props.theme['$btn-info-bg'],
      props.theme['$btn-success-bg'],
      props.theme['$btn-warning-bg'],
      props.theme['$btn-danger-bg'],
      props.theme['$card-link-hover-color'],
      props.theme['$card-img-overlay-padding'],
      props.theme['$card-inverse-bg-color'],
      props.theme['$card-inverse-border-color'],
    )}
    /*
     Card groups
    */
      ${mediaBreakpointUp(
        'sm',
        props.theme['$grid-breakpoints'],
        `
          &.card-group {
            display: flex;
            flex-flow: row wrap;
        
            .card {
              flex: 1 0 0;
        
              + .card {
                margin-left: 0;
                border-left: 0;
              }
        
            ${ifThen(
              props.theme['$enable-rounded'],
              `
                &:first-child {
                  ${borderRightRadius(
                    props.theme['$enable-rounded'],
                    '0'
                  )}
                  .card-img-top {
                    border-top-right-radius: 0;
                  }
                  
                  .card-img-bottom {
                    border-bottom-right-radius: 0;
                  }
                }
              
                &:last-child {
                  ${borderLeftRadius(
                    props.theme['$enable-rounded'],
                    '0'
                  )}
                  
                  .card-img-top {
                    border-top-left-radius: 0;
                  }
                  
                  .card-img-bottom {
                    border-bottom-left-radius: 0;
                  }
                }
                
                &:not(:first-child):not(:last-child) {
                  border-radius: 0;
        
                  .card-img-top,
                  .card-img-bottom {
                    border-radius: 0;
                  }
                }
              `
            )}  
          }
        }
      `
    )}
  `}
`;

CardGroup.defaultProps = defaultProps;

export default CardGroup;