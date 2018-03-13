`<ButtonToolbar />` component example:

```js
<ButtonToolbar>
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>5</Button>
    <Button>6</Button>
    <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup>
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>
```

`<ButtonToolbar />` component example with `<InputGroup />`:

```js
<ButtonToolbar>
  <ButtonGroup className="mr-2">
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </ButtonGroup>
  <InputGroup>
    <InputGroupAddon>@</InputGroupAddon>
    <Input placeholder="username" />
  </InputGroup>
</ButtonToolbar>
```

`<ButtonToolbar />` component example with **justified displayed** `<InputGroup />`:

```js
<ButtonToolbar className="justify-content-between">
  <ButtonGroup>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
  </ButtonGroup>
  <InputGroup>
    <InputGroupAddon>@</InputGroupAddon>
    <Input placeholder="username" />
  </InputGroup>
</ButtonToolbar>
```
