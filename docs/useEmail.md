# 🥟 `useArray`

simple hook used to validate email input

## Arguments

- `state: String`: initial email
- `errHandler : String? optional`: error handler when input is not valid email. return default value when it's not assigned

## Returns

```
{
  value,
  setValue,
  msgError,
}
```

## Usage

```jsx
import { useEmail } from 'react-recipes';

function App {
  const {
    value,
    setValue,
    msgError,
  } = useEmail('mahmud120398@gmail', 'your email is not valid email');

  return (
    <>
      <div>
        <input type="email" onChange={(e) => setValue(e.target.value)}>
          <p>{msgError ? msgError : null}</p>
      </div>
    </>
  )
};
```
