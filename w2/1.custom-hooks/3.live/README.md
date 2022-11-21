# [Custom Hooks](https://www.canva.com/design/DAFRQK1zIbg/wkxICQR28RsWOZ89u3fyTw/view?utm_content=DAFRQK1zIbg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

Creating our own hooks to common-out the logic.

### Getting started

- Go to `boiler` folder
- `npm i`
- `npm start`

### Goal

- Create custom hook for Stopwatch

```js
const { time, start, stop, pause } = useStopwatch();
```

- Create custom hook for Fetch API

```js
const { loading, error, data, refetch } = useFetch(apiFn);
```

- Create custom hook for Delayed Fetch API

```js
const { loading, data, error, execute } = useDelayedFetch(apiFn);
// Here execute is used to execute the apiFn with params
execute(params);
```
