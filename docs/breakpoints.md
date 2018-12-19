# Breakpoints

<p class="description">A breakpoint is the range of predetermined screen sizes that have specific layout requirements.</p>

For optimal user experience, $PACKAGE_NAME interfaces need to be able to adapt their layout at various breakpoints.
$PACKAGE_NAME uses a **simplified** implementation of the original [specification](https://material.io/design/layout/responsive-layout-grid.html#breakpoints).

Each breakpoint matches with a *fixed* screen width:

- **xs**, extra-small: 0px or larger
- **sm**, small: 576px or larger
- **md**, medium: 768px or larger
- **lg**, large: 992px or larger
- **xl**, extra-large: 1200px or larger
- **xxl**, extra-extra-large: 1452px or larger


These values can always be customized.
You will find them in the theme, in the `$grid-breakpoints` value.

The breakpoints are used internally in various components to make them responsive.

## Media Queries

CSS media queries is the idiomatic approach to make your UI responsive.
We provide some CSS-in-JS helpers to do so.

```jsx static
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
// bp.up, bp.down, bp.between, bp.only
```

## withWidth()

Sometimes, using CSS isn't enough.
You might want to change the React rendering tree based on the breakpoint value, in JavaScript.
We provide a `withWidth()` higher-order component for this use case.

```jsx static
const { default: withWidth } = require('$PACKAGE_NAME/lib/withWidth');

function MyComponent(props) {
  return <div>{`Current width: ${props.width}`}</div>;
}

const MyComponentWithWidth = withWidth()(MyComponent);
<MyComponentWithWidth />
```

In the following demo, we change the rendered DOM element (*em*, <u>u</u>, ~~del~~ & span) based on the screen width.

⚠️ `withWidth()` server-side rendering support is limited.

### Render Props

In some cases, you could have property name collisions using higher-order components.
To avoid the issue, you can use the [render props](https://reactjs.org/docs/render-props.html) pattern like in the following demo.

```jsx static
import toRenderProps from 'recompose/toRenderProps';

const WithWidth = toRenderProps(withWidth());

export default function MyComponent() {
  return (
    <WithWidth>
      {({ width }) => <div>{`Current width: ${width}`}</div>}
    </WithWidth>
  );
}
```


## API

### `withWidth([options]) => higher-order component`

Inject a `width` property.
It does not modify the component passed to it; instead, it returns a new component.
This `width` breakpoint property match the current screen width.
It can be one of the following breakpoints:

```ts
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
```

Some implementation details that might be interesting to being aware of:

- It forwards *non React static* properties so this HOC is more "transparent".
For instance, it can be used to defined a `getInitialProps()` static method (next.js).

#### Arguments

1. `options` (*Object* [optional]):
  - `options.withTheme` (*Boolean* [optional]): Defaults to `false`. Provide the `theme` object to the component as a property.
  - `options.noSSR` (*Boolean* [optional]): Defaults to `false`.
  In order to perform the server-side rendering reconciliation, we need to render twice.
  A first time with nothing and a second time with the children.
  This double pass rendering cycle comes with a drawback. The UI might blink.
  You can set this flag to `true` if you are not doing server-side rendering.
  - `options.initialWidth` (*Breakpoint* [optional]):
  As `window.innerWidth` is unavailable on the server,
  we default to rendering an empty component during the first mount.
  In some situation, you might want to use an heuristic to approximate
  the screen width of the client browser screen width.
  - `options.resizeInterval` (*Number* [optional]): Defaults to 166, corresponds to 10 frames at 60 Hz. Number of milliseconds to wait before responding to a screen resize event.
  - `options.loggin` (*Boolean* [optional]): Default to `false`, if `true`, it will console.log the breakpoint change.
  
#### Returns

`higher-order component`: Should be used to wrap a component.

#### Examples

```jsx static
import { withTheme } from 'styled-components';
import withWidth, { isWidthUp } from '$PACKAGE_NAME/lib/withWidth';

class MyComponent extends React.Component {
  render () {
    if (isWidthUp('sm', this.props.width)) {
      return <span />
    }

    return <div />;
  }
}

export default withWidth()(withTheme(MyComponent));
```

### `bp.up(theme['$grid-breakpoints'], css) => media query`

#### Arguments

1. `theme['$grid-breakpoints']` (*Object*): The breakpoint variables with key (`xs`, `sm`, etc.) and screen width number values in pixels.
1. `css` (*String* | *Object*): The css class to be used.  

#### Returns

`media query`: A media query string ready to be used with JSS.

#### Examples

```jsx static
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import { css } from 'styled-components';

<div
  css={css`{
    background-color: blue;
    ${(props) => `${bp.up(props.theme['$grid-breakpoints'], `background-color: red;`)}}`
  `}
>
```

### `bp.down(theme['$grid-breakpoints'], css) => media query`

#### Arguments

1. `theme['$grid-breakpoints']` (*Object*): The breakpoint variables with key (`xs`, `sm`, etc.) and screen width number values in pixels.
1. `css` (*String* | *Object*): The css class to be used.  

#### Returns

`media query`: A media query string ready to be used with JSS.

#### Examples

```jsx static
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import { css } from 'styled-components';

<div
  css={css`{
    background-color: blue;
    ${(props) => `${bp.down(props.theme['$grid-breakpoints'], `background-color: red;`)}}`
  `}
>
```

### `bp.only(key, theme['$grid-breakpoints'], css) => media query`

#### Arguments

1. `key` (*String*): A breakpoint key (`xs`, `sm`, etc.).
1. `theme['$grid-breakpoints']` (*Object*): The breakpoint variables with key (`xs`, `sm`, etc.) and screen width number values in pixels.
1. `css` (*String* | *Object*): The css class to be used.  

#### Returns

`media query`: A media query string ready to be used with JSS.

#### Examples

```jsx static
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import { css } from 'styled-components';

<div
  css={css`{
    background-color: blue;
    ${(props) => `${bp.only('md', props.theme['$grid-breakpoints'], `background-color: red;`)}}`
  `}
>
```

### `bp.between(start, end, theme['$grid-breakpoints'], css) => media query`

#### Arguments

1. `start` (*String*): A breakpoint key (`xs`, `sm`, etc.).
1. `end` (*String*): A breakpoint key (`xs`, `sm`, etc.).
1. `theme['$grid-breakpoints']` (*Object*): The breakpoint variables with key (`xs`, `sm`, etc.) and screen width number values in pixels.
1. `css` (*String* | *Object*): The css class to be used.  

#### Returns

`media query`: A media query string ready to be used with JSS.

#### Examples

```jsx static
import bp from '@bootstrap-styled/css-mixins/lib/breakpoints';
import { css } from 'styled-components';

<div
  css={css`{
    background-color: blue;
    ${(props) => `${bp.only('md', props.theme['$grid-breakpoints'], `background-color: red;`)}}`
  `}
>
```
