`<Input />` component example:

```js
<Form>
  <Input type="text" name="text" placeholder="Insert text" />
  <Input type="select" name="select">
    <Option>1</Option>
    <Option>2</Option>
    <Option>3</Option>
  </Input>
</Form>
```

Different `<Input />` **type**:

```js
<Form>
  <FormGroup>
    <Label htmlFor="exampleEmail">Static</Label>
    <Input static>Some static value</Input>
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleEmail">Email</Label>
    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="examplePassword">Password</Label>
    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleUrl">Url</Label>
    <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleNumber">Number</Label>
    <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleDatetime">Datetime</Label>
    <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleDate">Date</Label>
    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleTime">Time</Label>
    <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleColor">Color</Label>
    <Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleSearch">Search</Label>
    <Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleSelect">Select</Label>
    <Input type="select" name="select" id="exampleSelect">
      <Option>1</Option>
      <Option>2</Option>
      <Option>3</Option>
      <Option>4</Option>
      <Option>5</Option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleSelectMulti">Select Multiple</Label>
    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
      <Option>1</Option>
      <Option>2</Option>
      <Option>3</Option>
      <Option>4</Option>
      <Option>5</Option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Label htmlFor="example-text">Text Area</Label>
    <Input type="textarea" name="text" id="example-text-1" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="exampleFile">File</Label>
    <Input type="file" name="file" id="exampleFile" />
    <FormText color="muted">
      This is some placeholder block-level help text for the above input.
      It's a bit lighter and easily wraps to a new line.
    </FormText>
  </FormGroup>
  <FormGroup check>
    <Label check>
      <Input type="radio" />{' '}
      Option one is this and that—be sure to include why it's great
    </Label>
  </FormGroup>
  <FormGroup check>
    <Label check>
      <Input type="checkbox" />{' '}
      Check me out
    </Label>
  </FormGroup>
</Form>
```
