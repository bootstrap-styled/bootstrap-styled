`<CardColumns />` component example:

```js
<CardColumns>
  <Card>
    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
    <CardBlock>
      <CardTitle>Card column</CardTitle>
      <CardSubtitle>Display automatically cards inside it.</CardSubtitle>
      <CardText>It respect responsive design and adapt itself according to the size of the text used inside.</CardText>
      <Button>Button</Button>
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
