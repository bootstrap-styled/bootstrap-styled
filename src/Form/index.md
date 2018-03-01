`<Form />` component example:

```js
<Form>
  <FormGroup>
    <Label htmlFor="inlineFormInput">Label</Label>
    <Input type="text" defaultValue="with input default value" />
  </FormGroup>
  <FormGroup>
    <Label hidden htmlFor="inlineFormInputGroup">Username</Label>
    <InputGroup>
      <InputGroupAddon>Addon</InputGroupAddon>
      <Input type="text" className="form-control" defaultValue="with input default " />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleSelect">Option selection</Label>
    <Input type="select" name="select">
      <Option>1</Option>
      <Option>2</Option>
      <Option>3</Option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label check>
      <Input type="checkbox" /> Checkbox
    </Label>
  </FormGroup>
  <Button color="primary" type="submit">Submit</Button>
</Form>
```
