# Getting Started

1. Create a React Project
2. Create a `useFetch` Hook

- Signature:

```js
const { loading, data, error, refetch } = useFetch(apiFn, initialData);
// Here refetch is used to re-execute the apiFn.
```

3. Create a `useDelayedFetch` Hook

- Signature:

```js
const { loading, data, error, execute } = useDelayedFetch(apiFn);
// Here execute is used to execute the apiFn with params
execute(params);
```
