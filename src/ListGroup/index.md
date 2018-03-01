`<ListGroup />` component example:

```js
<ListGroup>
  <ListGroupItem>Cras justo odio</ListGroupItem>
  <ListGroupItem color="success">Cras justo odio</ListGroupItem>
  <ListGroupItem color="warning">Dapibus ac facilisis in <Badge pill>2</Badge></ListGroupItem>
  <ListGroupItem color="danger" active tag={A} href="#" action>Cras justo odio</ListGroupItem>
  <ListGroupItem tag="button" action>Cras justo odio</ListGroupItem>
  <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
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
  <ListGroupItem action tag={A} href="#">
    <div>
      <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
      <Small>3 days ago</Small>
    </div>
    <ListGroupItemText>
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </ListGroupItemText>
    <Small>Donec id elit non mi porta.</Small>
  </ListGroupItem>
  <ListGroupItem action tag={A} href="#">
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


