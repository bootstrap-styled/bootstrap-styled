`<Table />` component example:

```js
<Table>
  <Thead>
    <Tr>
      <Th>#</Th>
      <Th>First Name</Th>
      <Th>Last Name</Th>
      <Th>Username</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Th scope="row">1</Th>
      <Td>Mark</Td>
      <Td>Otto</Td>
      <Td>@mdo</Td>
    </Tr>
    <Tr>
      <Th scope="row">2</Th>
      <Td>Jacob</Td>
      <Td>Thornton</Td>
      <Td>@fat</Td>
    </Tr>
    <Tr>
      <Th scope="row">3</Th>
      <Td>Larry</Td>
      <Td>the Bird</Td>
      <Td>@twitter</Td>
    </Tr>
  </Tbody>
</Table>
```

`<Table />` component example using `inverse` props:
__You can also add color using props `color`__

```js
<Table inverse>
  <Thead>
    <Tr>
      <Th>#</Th>
      <Th>First Name</Th>
      <Th>Last Name</Th>
      <Th>Username</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Th scope="row">1</Th>
      <Td>Mark</Td>
      <Td>Otto</Td>
      <Td>>@mdo</Td>
    </Tr>
    <Tr>
      <Th scope="row">2</Th>
      <Td>Jacob</Td>
      <Td>Thornton</Td>
      <Td>@fat</Td>
    </Tr>
    <Tr>
      <Th scope="row">3</Th>
      <Td>Larry</Td>
      <Td>the Bird</Td>
      <Td>@twitter</Td>
    </Tr>
  </Tbody>
</Table>
```

`<Table />` component example using `striped` props:
__You can also add color using props `color`__

```js
<Table striped>
  <Thead>
    <Tr>
      <Th>#</Th>
      <Th>First Name</Th>
      <Th>Last Name</Th>
      <Th>Username</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Th scope="row">1</Th>
      <Td>Mark</Td>
      <Td color="active">Otto</Td>
      <Td>@mdo</Td>
    </Tr>
    <Tr>
      <Th scope="row">2</Th>
      <Td color="danger">Jacob</Td>
      <Td>Thornton</Td>
      <Td>@fat</Td>
    </Tr>
    <Tr>
      <Th scope="row">3</Th>
      <Td>Larry</Td>
      <Td>the Bird</Td>
      <Td color="success">@twitter</Td>
    </Tr>
  </Tbody>
</Table>
```

`<Table />` component example using `bordered` props:
__You can also add background using className `bg-` such as `bg-success`__

```js
<Table bordered>
  <Thead>
    <Tr>
      <Th>#</Th>
      <Th>First Name</Th>
      <Th>Last Name</Th>
      <Th>Username</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Th scope="row">1</Th>
      <Td>Mark</Td>
      <Td>Otto</Td>
      <Td>@mdo</Td>
    </Tr>
    <Tr className="bg-primary">
      <Th scope="row">2</Th>
      <Td>Mark</Td>
      <Td>Otto</Td>
      <Td>@TwBootstrap</Td>
    </Tr>
    <Tr>
      <Th scope="row">3</Th>
      <Td>Jacob</Td>
      <Td>Thornton</Td>
      <Td>@fat</Td>
    </Tr>
    <Tr className="bg-success">
      <Th scope="row">4</Th>
      <Td colSpan="2">Larry the Bird</Td>
      <Td>@twitter</Td>
    </Tr>
  </Tbody>
</Table>
```

`<Table />` component example using `hover` props:

```js
<Table hover>
  <Thead>
    <Tr color="active">
      <Th>#</Th>
      <Th>First Name</Th>
      <Th>Last Name</Th>
      <Th>Username</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Th scope="row">1</Th>
      <Td>Mark</Td>
      <Td>Otto</Td>
      <Td>@mdo</Td>
    </Tr>
    <Tr>
      <Th scope="row">2</Th>
      <Td>Jacob</Td>
      <Td>Thornton</Td>
      <Td>@fat</Td>
    </Tr>
    <Tr>
      <Th scope="row">3</Th>
      <Td colSpan="2">Larry the Bird</Td>
      <Td>@twitter</Td>
    </Tr>
  </Tbody>
</Table>
```

Small `<Table />` component example using `size` props with `sm` string value:

```js
<Table size="sm">
  <Thead>
    <Tr color="info">
      <Th>#</Th>
      <Th>First Name</Th>
      <Th>Last Name</Th>
      <Th>Username</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Th scope="row">1</Th>
      <Td>Mark</Td>
      <Td>Otto</Td>
      <Td>@mdo</Td>
    </Tr>
    <Tr>
      <Th scope="row">2</Th>
      <Td>Jacob</Td>
      <Td>Thornton</Td>
      <Td>@fat</Td>
    </Tr>
    <Tr>
      <Th scope="row">3</Th>
      <Td colSpan="2">Larry the Bird</Td>
      <Td>@twitter</Td>
    </Tr>
  </Tbody>
</Table>
```
