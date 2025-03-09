# 自定义 Hook

## 内置的 Hook

### useState


### useActionState

### useCallback


### useContext

### useDebugValue



## 自定义 Hook：组件间的共享逻辑

- Hook 的名称必须永远以use开头
- 内部使用了一个 hook 也应该给这个函数加上 `use` 前缀
- 自定义 Hook 共享的是状态逻辑，而不是状态本身，每次调用一个 Hook 都是新的一个状态
- 可以将响应值从一个 Hook 传到另一个 Hook
- 每次组件更行渲染时，所有的 Hook 都会重新运行
- 自定义 Hook 的代码应该和组件代码保持纯粹



> 每当组件更行时，自定义 Hook 的代码就会重新执行。