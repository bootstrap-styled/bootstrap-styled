`<Form />` component example:

```js
<Form>
  <FormGroup>
    <Label htmlFor="inline-form-input">Label</Label>
    <Input type="text" defaultValue="with input default value" />
  </FormGroup>
  <FormGroup>
    <Label hidden htmlFor="inline-form-input-group">Username</Label>
    <InputGroup>
      <InputGroupAddon>Addon</InputGroupAddon>
      <Input type="text" className="form-control" defaultValue="with input default " />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <Label htmlFor="example-select">Option selection</Label>
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

`<Form />` component example with **grids**:

```js
<Form>
  <FormGroup row>
    <Label htmlFor="example-email-form" sm={2}>Email</Label>
    <Col sm={10}>
      <Input type="email" name="email" id="example-email-form" placeholder="with a placeholder" />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label htmlFor="example-password-form" sm={2}>Password</Label>
    <Col sm={10}>
      <Input type="password" name="password" id="example-password-form" placeholder="password placeholder" />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label htmlFor="example-select-form" sm={2}>Select</Label>
    <Col sm={10}>
      <Input type="select" name="select" id="example-select-form" />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label htmlFor="example-select-multi-form" sm={2}>Select Multiple</Label>
    <Col sm={10}>
      <Input type="select" name="selectMulti" id="example-select-multi-form" multiple />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label htmlFor="example-text-form" sm={2}>Text Area</Label>
    <Col sm={10}>
      <Input type="textarea" name="text" id="example-text-form" />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label htmlFor="example-file-form" sm={2}>File</Label>
    <Col sm={10}>
      <Input type="file" name="file" id="example-file-form" />
      <FormText color="muted">
        This is some placeholder block-level help text for the above input.
        Its a bit lighter and easily wraps to a new line.
      </FormText>
    </Col>
  </FormGroup>
  <FormGroup tag={Fieldset} row>
    <Legend className="col-form-legend col-sm-2">Radio Buttons</Legend>
    <Col sm={10}>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio1-form" />{' '}
          Option one is this and that—be sure to include why its great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="radio" name="radio2-form" />{' '}
          Option two can be something else and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup check disabled>
        <Label check>
          <Input type="radio" name="radio3-form" disabled />{' '}
          Option three is disabled
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label htmlFor="checkbox2-form" sm={2}>Checkbox</Label>
    <Col sm={{ size: 10 }}>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" id="checkbox2-form" />{' '}
          Check me out
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup check row>
    <Col sm={{ size: 10, offset: 2 }}>
      <Button>Submit</Button>
    </Col>
  </FormGroup>
</Form>
```

**Inline** `<Form />` component example:

```js
<Form inline className="justify-content-between">
  <FormGroup>
    <Label hidden for="inlineFormInput">Name</Label>
    <Input type="text" id="inlineFormInput" defaultValue="Jane Doe" />
  </FormGroup>
  <FormGroup>
    <Label hidden for="inline-form-input-group-form">Username</Label>
    <InputGroup>
      <InputGroupAddon>@</InputGroupAddon>
      <Input type="text" className="form-control" id="inline-form-input-group-addon-form" defaultValue="Username" />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <Label check>
      <Input className="form-check-input" type="checkbox" /> Remember me
    </Label>
  </FormGroup>
  <Button color="primary" type="submit">Submit</Button>
</Form>
```

**Inline** `<Form />` component example with dropdown:

```js
<Form inline>
  <Label htmlFor="inlineFormCustomSelect" className="mr-3">Preference</Label>
  <Select id="inlineFormCustomSelect" defaultValue="Default Select">
    <Option defaultValue="1">One</Option>
    <Option defaultValue="2">Two</Option>
    <Option defaultValue="3">Three</Option>
  </Select>
  <FormGroup>
    <FormCustom >Check this custom checkbox</FormCustom>
  </FormGroup>
  <Button type="submit" color="primary">Submit</Button>
</Form>
```


`<Form />` component example with specific **sizing** label:

```js
<Form>
  <Input placeholder="lg" size="lg" />
  <Input placeholder="default" />
  <Input placeholder="sm" size="sm" />
  <Input placeholder="readOnly" readOnly/>
  <FormGroup>
    <Input type="select" size="lg">
      <Option>Large Select</Option>
    </Input>
  </FormGroup>
  <FormGroup>
    <Input type="select">
      <Option>Default Select</Option>
    </Input>
  </FormGroup>
  <FormGroup>
  <Input type="select" size="sm">
    <Option>Small Select</Option>
  </Input>
    </FormGroup>
</Form>
```

`<Form />` component example with **grid** **sizing** label:

```js
<Form>
  <FormGroup row>
    <Label htmlFor="example-email-input-form" sm={2} size="lg">Email</Label>
    <Col sm={10}>
      <Input type="email" name="email" id="example-email-input-form" placeholder="lg" size="lg" />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label htmlFor="example-email-input-2-form" sm={2}>Email</Label>
    <Col sm={10}>
      <Input type="email" name="email" id="example-email-input-2-form" placeholder="default" />
    </Col>
  </FormGroup>
</Form>
```

`<Form />` component example with **hidden** label:

```js
<Form inline>
  <FormGroup className="mr-2">
    <Label htmlFor="example-email-input-hidden" hidden>Email</Label>
    <Input type="email" name="email" id="example-email-input-hidden" placeholder="Email" />
  </FormGroup>
  <FormGroup className="mr-2">
    <Label htmlFor="examplePassword" hidden>Password</Label>
    <Input type="password" name="password" id="example-password-input" placeholder="Password" />
  </FormGroup>
  <Button>Submit</Button>
</Form>
```

`<Form />` component example with **checkboxes** and **radio** :

```js
<Form>
  <FormGroup check>
    <Label check>
      <Input type="checkbox" className="mr-2" />
      Option one is this and that—be sure to include why it's great
    </Label>
  </FormGroup>
  <FormGroup check>
    <Label check>
      <Input type="checkbox" className="mr-2" />
      Option two
    </Label>
  </FormGroup>
  <FormGroup check disabled>
    <Label check>
      <Input type="checkbox" className="mr-2" disabled />
      Option three disabled
    </Label>
  </FormGroup>
  
  <FormGroup check>
    <Label check>
      <Input type="radio" name="example-radio-1" className="mr-2" />
      Option one is this and that—be sure to include why it's great
    </Label>
  </FormGroup>
  <FormGroup check>
    <Label check>
      <Input type="radio" name="example-radio-2" className="mr-2" />
      Option two
    </Label>
  </FormGroup>
  <FormGroup check disabled>
    <Label check>
      <Input type="radio" name="example-radio-3" className="mr-2" disabled />
      Option three disabled
    </Label>
  </FormGroup>
</Form>
```

`<Form />` component example with **inline** **checkboxes** and **radio** :

```js
<Form>
  <FormGroup check inline>
    <Label check>
      <Input type="checkbox" className="mr-2"/>
      1
    </Label>
  </FormGroup>
  <FormGroup check inline>
    <Label check>
      <Input type="checkbox" className="mr-2"/>
      2
    </Label>
  </FormGroup>
  <FormGroup check inline disabled>
    <Label check>
      <Input type="checkbox" className="mr-2" disabled />
      3
    </Label>
  </FormGroup>
  
  <FormGroup check inline>
    <Label check>
      <Input type="radio" name="example-radio-1-form" className="mr-2" />
      1
    </Label>
  </FormGroup>
  <FormGroup check inline>
    <Label check>
      <Input type="radio" name="example-radio-2-form" className="mr-2"/>
      2
    </Label>
  </FormGroup>
  <FormGroup check inline disabled>
    <Label check>
      <Input type="radio" name="example-radio-3-form" className="mr-2" disabled />
      3
    </Label>
  </FormGroup>
</Form>
```

`<Form />` component example with **column sizing** :

```js
<Form>
  <FormGroup row>
    <Col sm={2}>
      <Input placeholder=".col" />
    </Col>
    <Col sm={3}>
      <Input placeholder=".col-3" />
    </Col>
    <Col sm={4}>
      <Input placeholder=".col-4" />
    </Col>
  </FormGroup>
</Form>
```


**Stacked** `<Form />` component example:

```js
<Form>
  <FormGroup>
    <FormCustom radio={{ id: 'id-1', name: 'name'}}>Check this custom radio</FormCustom>
  </FormGroup>
  <FormGroup>
    <FormCustom radio={{ id: 'id-2', name: 'name'}}>Check this custom radio</FormCustom>
  </FormGroup>
  <FormGroup>
    <FormCustom radio={{ id: 'id-3', name: 'name'}}>Check this custom radio</FormCustom>
  </FormGroup>
</Form>
```


`<Form />` component example with custom variations:

```js
<Form>
  <FormGroup color="success">
    <FormCustom >Check this custom checkbox</FormCustom>
  </FormGroup>
  <FormGroup color="warning">
    <FormCustom >Check this custom checkbox</FormCustom>
  </FormGroup>
  <FormGroup color="danger">
    <FormCustom >Check this custom checkbox</FormCustom>
  </FormGroup>
</Form>
```
