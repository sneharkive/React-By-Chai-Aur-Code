# To use useContext

## Step - 1 : Create Context

``` jsx

import { createContext } from 'react'

const UserContext = createContext() 

```


## Step - 2 : wrap all the child (who want to access data (/ who want to be consumer)) inside a provider

``` jsx
import ChildA from './Components/ChildA'

<UserContext.Provider>  

    <ChildA />

</UserContext.Provider>

```

## Step - 3 : Pass Value 

``` jsx
const [user, setUser] = useState({name: "Sneha"})

<UserContext.Provider value={user}>

  <ChildA />

</UserContext.Provider>
  
```


## Step - 4 : Export

``` jsx

export {UserContext}

```
## Step - 5 : now consume the value at the any child who are wrapped by provider