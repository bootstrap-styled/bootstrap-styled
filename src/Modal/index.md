`<Modal />` component example:

```js
initialState = {
    modal: false,
};

const handleClose = function() {
  setState({
    modal: !state.modal,
  });
};

;
<div>
  <Button color="danger" onClick={() => handleClose()}>Launch Modal</Button>
  <Modal isOpen={state.modal} toggle={() => handleClose()}>
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

`Nested <Modal />` component example:

```js
initialState = {
    modal: false,
};

const handleClose = function() {
  setState({
    modal: !state.modal,
    nestedModal: false,
  });
};

const handleCloseNested = function() {
  setState({
    nestedModal: !state.nestedModal,
  });
}

;
<div>
  <Button color="danger" onClick={() => handleClose()}>Launch Modal</Button>
  <Modal isOpen={state.modal} toggle={() => handleClose()}>
    <ModalHeader>Modal title</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <br />
      <Button color="success" onClick={() => handleCloseNested()}>Show Nested Model</Button>
      <Modal isOpen={state.nestedModal} toggle={() => handleCloseNested()}>
        <ModalHeader>Nested Modal title</ModalHeader>
        <ModalBody>Stuff and things</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleCloseNested()}>Done</Button>
          <Button color="secondary" onClick={() => handleCloseNested()}>All Done</Button>
        </ModalFooter>
      </Modal>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => handleClose()}>Do Something</Button>
      <Button color="secondary" onClick={() => handleClose()}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>
```
