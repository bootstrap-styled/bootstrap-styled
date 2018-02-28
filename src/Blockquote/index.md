`<Blockquote />` component example:

Quoting blocks of content:

```js
<Blockquote>
  <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</P>
  <P className="blockquote-footer">Someone famous in something</P>
</Blockquote>
```

Also work using centering `className` like `text-center` (or even `mx-auto`):

```js
<Blockquote className="text-center">
  <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</P>
  <P className="blockquote-footer">Someone famous in something</P>
</Blockquote>
```


Or with `reverse` props:

```js
<Blockquote reverse>
  <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</P>
  <P className="blockquote-footer">Someone famous in something</P>
</Blockquote>
```

