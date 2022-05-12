Play with React
Play with Vite

- [React Docs](https://reactjs.org/)
- [Vite Docs](https://vitejs.dev/)
- [webgradients](https://webgradients.com/)
- [less](https://lesscss.org/)

Use vite to create react app

```sh
npm create vite@latest
```

Add `less` to support less

```sh
npm i less -D
```

React Component

> state component(render UI by data)
> stateless component

```ts

type PropsType = {}
type StateType = {}

class C extends React.Component<PropsType, StateType> {
  //... TODO
}

```

Component Communication

Parent --> Child (props)
Child --> Parent (callback function)

References

- [The Complete Modern React Developer 2022](https://andrewbaisden.hashnode.dev/the-complete-modern-react-developer-2022)
