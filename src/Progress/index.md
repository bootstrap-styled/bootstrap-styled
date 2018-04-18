`<Progress />` component example:

```js
<div>
  <div className="text-center">0%</div>
  <Progress>
    <ProgressBar valueNow={0} valueMax={100} />
  </Progress>
  <div className="text-center">25%</div>
  <Progress>
    <ProgressBar valueNow={25} valueMax={100} height="1px" />
  </Progress>
  <div className="text-center">50%</div>
  <Progress>
    <ProgressBar className="bg-success" valueNow={50} valueMax={100} height="1px" />
  </Progress>
  <div className="text-center">75%</div>
  <Progress>
    <ProgressBar className="bg-info" valueNow={75} valueMax={100} height=".8rem" />
  </Progress>
  <div className="text-center">100%</div>
  <Progress>
    <ProgressBar valueNow={100} className="bg-warning" />
  </Progress>
  <div className="text-center">Grouped, striped or/and animated</div>
  <Progress>
    <ProgressBar valueNow={15} className="bg-danger" />
    <ProgressBar valueNow={30} striped className="bg-success" />
    <ProgressBar valueNow={20} striped animated className="bg-info" />
  </Progress>
</div>
```
