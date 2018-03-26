`<ListGroup />` component example:

```js
<ListGroup>
  <ListGroupItem>Cras justo odio</ListGroupItem>
  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem>Morbi leo risus</ListGroupItem>
  <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
  <ListGroupItem>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

`<ListGroup />` component example with **active** item:

```js
<ListGroup>
  <ListGroupItem className="justify-content-between">Cras justo odio <Badge pill>14</Badge></ListGroupItem>
  <ListGroupItem className="justify-content-between">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
  <ListGroupItem className="justify-content-between">Morbi leo risus <Badge pill>1</Badge></ListGroupItem>
</ListGroup>
```

`<ListGroup />` component example with **disabled** item:

```js
<ListGroup>
  <ListGroupItem disabled tag={A} href="javascript:;">Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem tag={A} href="javascript:;">Cras justo odio</ListGroupItem>
  <ListGroupItem tag={A} href="javascript:;">Morbi leo risus</ListGroupItem>
  <ListGroupItem tag={A} href="javascript:;">Porta ac consectetur acn</ListGroupItem>
</ListGroup>
```

`<ListGroup />` component example with **link**:

```js
<ListGroup>
  <ListGroupItem active tag={A} href="javascript:;" action>Cras justo odio</ListGroupItem>
  <ListGroupItem tag={A} href="javascript:;" action>Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem tag={A} href="javascript:;" action>Morbi leo risus</ListGroupItem>
  <ListGroupItem tag={A} href="javascript:;" action>Porta ac consectetur ac</ListGroupItem>
  <ListGroupItem disabled tag={A} href="javascript:;" action>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

`<ListGroup />` component example with **button**:

```js
<ListGroup>
  <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
  <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
  <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
  <ListGroupItem disabled action>Vestibulum at eros</ListGroupItem>
</ListGroup>
```

`<ListGroup />` component example with **contextual** classes:

```js
<ListGroup>
  <ListGroupItem color="success">Cras justo odio</ListGroupItem>
  <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
  <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
</ListGroup>
```

`<ListGroup />` component example with **contextual** classes and **buttons**:

```js
<ListGroup>
  <ListGroupItem color="success" action tag={A} href="javascript:;">Cras justo odio</ListGroupItem>
  <ListGroupItem color="info" action tag={A} href="javascript:;">Dapibus ac facilisis in</ListGroupItem>
  <ListGroupItem color="warning" action tag={A} href="javascript:;">Morbi leo risus</ListGroupItem>
  <ListGroupItem color="danger" action tag={A} href="javascript:;">Porta ac consectetur ac</ListGroupItem>
</ListGroup>
```

`<ListGroup />` component example with `<ListGroupItemHeading />` and `<ListGroupItemText />`:

```js
<ListGroup>
  <ListGroupItem active>
    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
    <ListGroupItemText>
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </ListGroupItemText>
  </ListGroupItem>
  <ListGroupItem action tag={A} href="javascript:;">
    <div>
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <Small>3 days ago</Small>
    </div>
    <ListGroupItemText>
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </ListGroupItemText>
    <Small>Donec id elit non mi porta.</Small>
  </ListGroupItem>
  <ListGroupItem action tag={A} href="javascript:;">
    <div>
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <Small>3 days ago</Small>
    </div>
    <ListGroupItemText>
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </ListGroupItemText>
    <Small>Donec id elit non mi porta.</Small>
  </ListGroupItem>
</ListGroup>
```

`<ListGroup />` component example with **custom content**:

```js
<ListGroup>
  <ListGroupItem active>
    <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
    <ListGroupItemText>
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </ListGroupItemText>
  </ListGroupItem>
  <ListGroupItem action tag={A} href="javascript:;">
    <div className="w-100 d-flex justify-content-between">
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <Small className="text-muted">3 days ago</Small>
    </div>
    <ListGroupItemText className="mb-0">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </ListGroupItemText>
    <Small className="text-muted">Donec id elit non mi porta.</Small>
  </ListGroupItem>
  <ListGroupItem action tag={A} href="javascript:;">
    <div className="w-100 d-flex justify-content-between">
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <Small className="text-muted">3 days ago</Small>
    </div>
    <ListGroupItemText className="mb-0">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </ListGroupItemText>
    <Small className="text-muted">Donec id elit non mi porta.</Small>
  </ListGroupItem>
</ListGroup>
```
