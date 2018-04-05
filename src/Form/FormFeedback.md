`<FormFeedback />` component example:

```js
<Form>
  <FormGroup color="success">
    <Label>Input with success</Label>
    <Input state="success" />
    <FormFeedback>Success! You did it!</FormFeedback>
    <FormText color="muted">Example help text that remains unchanged.</FormText>
  </FormGroup>
  <FormGroup color="warning">
    <Label>Input with warning</Label>
    <Input state="warning" />
    <FormFeedback>Whoops, check your formatting and try again.</FormFeedback>
    <FormText color="muted">Example help text that remains unchanged.</FormText>
  </FormGroup>
  <FormGroup color="danger">
    <Label>Input with danger</Label>
    <Input state="danger" />
    <FormFeedback>Oh noes! that name is already taken</FormFeedback>
    <FormText color="muted">Example help text that remains unchanged.</FormText>
  </FormGroup>
</Form>
```

`<FormFeedback />` component example with **checkboxes** and **radios**:

```js
<Form>
  <FormGroup color="success">
    <Label check>
      <Input state="success" type="checkbox" className="mr-2" />
      Checkbox with success
    </Label>
  </FormGroup>
  <FormGroup color="warning">
    <Label check>
      <Input state="success" type="checkbox" className="mr-2" />
      Checkbox with warning
    </Label>
  </FormGroup>
  <FormGroup color="danger">
    <Label check>
      <Input state="success" type="checkbox" className="mr-2" />
      Checkbox with danger
    </Label>
  </FormGroup>
</Form>
```
