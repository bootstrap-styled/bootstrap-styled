`<Media />` component example:

```js
<Media>
  <Media href="javascript:;" className="text-center">
    <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
  </Media>
  <Media body>
    <Media heading>
      Media heading
    </Media>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </Media>
</Media>
```

`<Media />` component example **centered**:

```js
<Media>
  <Media middle href="javascript:;">
    <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
  </Media>
  <Media body>
    <Media heading>
      Media heading
    </Media>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </Media>
</Media>
```

`<Media />` component example with **right** display:

```js
<div>
  <Media>
    <Media right href="javascript:;">
      <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
    </Media>
    <Media body>
      <Media heading>
        Media heading
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </Media>
  </Media>
</div>
```

`<Media />` component example with **nested** `<Media />`:

```js
<Media>
  <Media middle href="javascript:;">
    <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
  </Media>
  <Media body>
    <Media heading>
      Media heading
    </Media>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    <Media>
      <Media middle href="javascript:;">
        <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
      </Media>
      <Media body>
        <Media heading>
          Nested media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  </Media>
</Media>
```

`<Media />` component example with specific **alignment**:

```js
<div>
  <Media>
    <Media left top href="#">
      <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
    </Media>
    <Media body>
      <Media heading>
        Top aligned media
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </Media>
  </Media>
  <Media className="mt-1">
    <Media left middle href="#">
      <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
    </Media>
    <Media body>
      <Media heading>
        Middle aligned media
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </Media>
  </Media>
  <Media className="mt-1">
    <Media left bottom href="#">
      <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
    </Media>
    <Media body>
      <Media heading>
        Bottom aligned media
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </Media>
  </Media>
</div>
```

`<Media />` component example with specific **alignment** and **nested** `<Media />`:

```js
<Media list>
  <Media tag="li">
    <Media left href="#">
      <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
    </Media>
    <Media body>
      <Media heading>
        Media heading
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      <Media>
        <Media left href="#">
          <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
        </Media>
        <Media body>
          <Media heading>
            Nested media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <Media>
            <Media left href="#">
              <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
            </Media>
            <Media body>
              <Media heading>
                Nested media heading
              </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
        </Media>
      </Media>
      <Media>
        <Media left href="#">
          <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
        </Media>
        <Media body>
          <Media heading>
            Nested media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </Media>
  </Media>
  <Media tag="li">
    <Media body>
      <Media heading>
        Media heading
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    </Media>
    <Media right href="#">
       <Media fluid object src="../../styleguide/favicon.ico" className="w-50" alt="64x64" />
    </Media>
  </Media>
</Media>
```
