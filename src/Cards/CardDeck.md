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
