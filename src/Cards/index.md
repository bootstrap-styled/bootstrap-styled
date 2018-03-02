`<Card />` component example:

```js
<div className="d-flex flex-row">
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

`<CardDeck />` component example:

```js
<CardDeck>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card decks</CardTitle>
      <CardText>Is also responsive with auto padding for separate cards</CardText>
    </CardBlock>
    <CardFooter>
      <small className="text-muted">automaticaly</small>
    </CardFooter>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card decks</CardTitle>
      <CardText>Can contain any amount of cars inside it too.</CardText>
    </CardBlock>
    <CardFooter>
      <small className="text-muted">It adapt to screen size!</small>
    </CardFooter>
  </Card>
</CardDeck>
```

`<CardColumns />` component example:

```js
<CardColumns>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card column</CardTitle>
      <CardSubtitle>Display automatically cards inside it.</CardSubtitle>
      <CardText>It respect responsive design and adapt itself according to the size of the text used inside.</CardText>
      <Button>Try add or remove text</Button>
    </CardBlock>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
  </Card>
  <Card>
    <CardBlock>
      <CardTitle>Card column</CardTitle>
      <CardSubtitle>Can also be used</CardSubtitle>
      <CardText>without card</CardText>
      <Button>image</Button>
    </CardBlock>
  </Card>
  <Card>
    <CardImg width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666" alt="Card image cap" />
    <CardImgOverlay>
      <CardTitle>Use overlay</CardTitle>
      <CardText>on your</CardText>
      <CardText>
        <Small className="text-muted">Cards</Small>
      </CardText>
    </CardImgOverlay>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card column</CardTitle>
      <CardSubtitle>are easy to use</CardSubtitle>
      <CardText>You can put any amount of cards inside it and it will auto adpt display and layout by respecting responsive design.</CardText>
      <Button>Try add more cards</Button>
    </CardBlock>
  </Card>
  <Card block inverse color="primary">
    <CardTitle>Card column</CardTitle>
    <CardText>can support any customization of cards seen in the first cards example.</CardText>
    <Button color="secondary">Try to customize cards</Button>
  </Card>
</CardColumns>
```


`<CardGroup />` component example:

```js
<CardGroup>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card groups</CardTitle>
      <CardSubtitle>is responsive</CardSubtitle>
      <CardText>and help you fast display cards components.</CardText>
      <Button>Try it</Button>
    </CardBlock>
  </Card>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card groups</CardTitle>
      <CardText>are customizable and could have any amount of card</CardText>
    </CardBlock>
    <CardFooter>
      <Small className="text-muted">inside it</Small>
    </CardFooter>
  </Card>
</CardGroup>
```
