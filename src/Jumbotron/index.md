`<Jumbotron />` component example:

```js
<div>
  <Jumbotron>
    <H1 className="display-3">Hello, world!</H1>
    <P lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</P>
    <Hr className="my-4" />
    <P>It uses utility classes for typography and spacing to space content out within the larger container.</P>
    <P lead>
      <Button color="primary" size="lg" role="button">Learn more</Button>
    </P>
  </Jumbotron>
  <Jumbotron fluid>
    <Container>
      <H1 className="display-3">Fluid jumbotron</H1>
      <P className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</P>
    </Container>
  </Jumbotron>
</div>
```
