`<Breadcrumb />` component example:

```js
<div>
  <Breadcrumb>
    <BreadcrumbItem active>Home</BreadcrumbItem>
  </Breadcrumb>
  <Breadcrumb>
    <BreadcrumbItem><A href="#">Home</A></BreadcrumbItem>
    <BreadcrumbItem active>Library</BreadcrumbItem>
  </Breadcrumb>
  <Breadcrumb tag="nav">
    <BreadcrumbItem tag={A} href="#">Home</BreadcrumbItem>
    <BreadcrumbItem tag={A} href="#">Library</BreadcrumbItem>
    <BreadcrumbItem active tag="span">Data</BreadcrumbItem>
  </Breadcrumb>
</div>
```
