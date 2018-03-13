`<Card />` component example:

```js
<Card width="25%">
  <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
  <CardBlock>
    <CardTitle>Card title</CardTitle>
    <CardSubtitle>Card subtitle</CardSubtitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the Card content.</CardText>
    <Button color="primary">Go somewhere</Button>
  </CardBlock>
</Card>
```

`<Card />` component example with **sizing**:

```js
<Row>
  <Col className="col-sm-6">
    <Card block>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="info">Click Here</Button>
    </Card>
  </Col>
  <Col className="col-sm-6">
    <Card block>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="success">Or Here</Button>
    </Card>
  </Col>
</Row>
```

`<Card />` component example with **grid markup**:

```js
<Row>
  <Col sm={{ size: 6 }}>
    <Card>
      <CardBlock>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="primary">Go somewhere</Button>
      </CardBlock>
    </Card>
  </Col>
  <Col sm={{ size: 6 }}>
    <Card>
      <CardBlock>
        <CardTitle>Special title treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="primary">Go somewhere</Button>
      </CardBlock>
    </Card>
  </Col>
</Row>
```

`<Card />` component example using **utilities**:

```js
<div>
  <Card className="w-75">
    <CardBlock>
      <CardTitle>Special title treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBlock>
  </Card>
  <Card className="w-50">
    <CardBlock>
      <CardTitle>Special title treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBlock>
  </Card>
</div>
```

`<Card />` component example using **custom css**:

```js
<Card width='15rem'>
  <CardBlock>
    <CardTitle>Special title treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="primary">Go somewhere</Button>
  </CardBlock>
</Card>
```

`<Card />` component example using **text alignment**:

```js
<div>
  <Card>
    <CardBlock>
      <CardTitle>Special title treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBlock>
  </Card>
  <Card className="text-center">
    <CardBlock>
      <CardTitle>Special title treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBlock>
  </Card>
  <Card className="text-right">
    <CardBlock>
      <CardTitle>Special title treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBlock>
  </Card>
</div>
```

`<Card />` component example using **navigation**:

```js
<Card className="text-center">
  <CardHeader>
    <Nav className="card-header-tabs" tabs>
      <NavItem>
        <NavLink className="active" href="javascript:;">Active</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="javascript:;">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="disabled" href="javascript:;">Disabled</NavLink>
      </NavItem>
    </Nav>
  </CardHeader>
  <CardBlock>
    <CardTitle>Special title treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="primary">Go somewhere</Button>
  </CardBlock>
</Card>
```

`<Card />` component example using **active navigation**:

```js
<Card className="text-center">
  <CardHeader>
    <Nav className="card-header-pills" pills>
      <NavItem>
        <NavLink className="active" href="javascript:;">Active</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="javascript:;">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="disabled" href="javascript:;">Disabled</NavLink>
      </NavItem>
    </Nav>
  </CardHeader>
  <CardBlock>
    <CardTitle>Special title treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="primary">Go somewhere</Button>
  </CardBlock>
</Card>
```

`<Card />` component example using **background color variant**:

```js
<div>
  <Card block inverse color="primary" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
  <Card block inverse color="success" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
  <Card block inverse color="info" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
  <Card block inverse color="warning" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
  <Card block inverse color="danger" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
</div>
```

**Outline** `<Card />` component example:

```js
<div>
  <Card block outline color="primary" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
  <Card block outline color="success" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
  <Card block outline color="info" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
  <Card block outline color="warning" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
  <Card block outline color="danger" className="text-center">
    <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
  </Card>
</div>
```

`<Card />` component example using **layout**:

```js
<CardGroup>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
      <Button>Button</Button>
    </CardBlock>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Button</Button>
    </CardBlock>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
      <Button>Button</Button>
    </CardBlock>
  </Card>
</CardGroup>
```
