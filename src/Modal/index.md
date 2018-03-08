`<Dropdown />` component example:

```js
initialState = {
    modal: false,
    backdrop: true,
    isLocked: false,
};
let isLocked = false;

const handleUnlock = function() {
  isLocked = false;
};

const handleClose = function() {
  if (!isLocked) {
    isLocked = true;
    setState({
      modal: !state.modal,
    });
  }
};

const changeBackdrop = function(e) {
  let value = e.target.value;
  if (value !== 'static') {
    value = JSON.parse(value);
  }
  setState({ backdrop: value });
};
;
<div>
  <Form inline onSubmit={(e) => e.preventDefault()}>
    <FormGroup>
      <Label for="backdrop">Backdrop value</Label>
      <Input type="select" name="backdrop" id="backdrop" onChange={() => changeBackdrop()} className="mx-3">
        <Option value="true">true</Option>
        <Option value="false">false</Option>
        <Option value="static">static</Option>
      </Input>
    </FormGroup>
    <Button color="danger" onClick={() => handleClose()}>Launch Modal</Button>
  </Form>
  <Modal isLocked={state.isLocked} onUnlock={() => handleUnlock()} isOpen={state.modal} backdrop={state.backdrop} onBackdrop={() => handleClose()}>
    <ModalHeader toggle={() => handleClose()}>Modal title</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => handleClose()}>Do Something</Button>
      <Button color="secondary" onClick={() => handleClose()}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>
```
