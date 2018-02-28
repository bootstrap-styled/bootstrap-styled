`<Card />` component example:

```js
<div>
  <Card width="25%">
    <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the Card content.</CardText>
      <Button color="primary">Go somewhere</Button>
    </CardBlock>
  </Card>
  <Card width="25%">
    <CardBlock>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
    </CardBlock>
    <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
    <CardBlock>
      <CardText>Some quick example text to build on the card title and make up the bulk of the Card content.</CardText>
      <CardLink href="#">Card Link</CardLink>
      <CardLink href="#">Another Link</CardLink>
    </CardBlock>
  </Card>
  <Card width="25%">
    <CardBlock>
      <CardTitle>Card title</CardTitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the cardʼs content.</CardText>
    </CardBlock>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <CardBlock>
      <CardLink href="#">Card Link</CardLink>
      <CardLink href="#">Link</CardLink>
    </CardBlock>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
  </Card>
</div>
```
