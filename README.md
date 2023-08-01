### Installation

```bash
# npm
npm install
# or yarn
yarn
```

### Running the code

```bash
# npm
npm run dev
# or yarn
yarn dev
```

### 3rd party libraries
- **vue-router** (router)
- **vue-toastification** ( toast )
- **vue/test-utils** (unit testing utility library)
- **jest** (testing framework)

### Styles
Styles were written in accordance with [BEM](https://getbem.com/) methodology.

### Folder structure

    ├── public                  # Shared files
    ├── src                     # Source files
    │   ├── asseets             # Style files
    |   |   ├── **/*.scss
    │   ├── components          # Reusable components
    |   |   ├── **/*.vue
    │   ├── composables         # Encapsulated and reused stateful logics
    |   |   ├── **/*.ts
    │   ├── entities            # Constants and types   
    |   |   ├── **/*.ts
    │   ├── plugins             # 3rd part library configurations
    |   |   ├── **/*.ts
    │   ├── router              # Routes
    │   ├── services            # Socket and api gateways
    │   ├── views               # Pages
    ├── tests
    │   ├── **/*.spec.ts        # Unit tests


### Glossary

| Term | Definition |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `ISIN` | The 12-digit alphanumeric code that uniquely identifies a specific instrument |
| `instrument` | A tradable asset, or a negotiable item, such as a security, commodity, derivative, or index, or any item that underlies a derivative. |
| `bid` | The highest price a buyer will pay to buy a specified number of shares of an instrument at any given time. |
| `ask` | The lowest price at which a seller will sell the instrument. |


## Socket Reference

The WebSocket server is started when you run `yarn dev`. You can then connect to it at

```URL
ws://localhost:8425/
```

To subcribe to a specific security

```JSON
{
    "subscribe": "${ISIN}"
}
```

To unsubscribe to a specific security

```JSON
{
    "unsubscribe": "${ISIN}"
}
```

#### Example Request

```JSON
{
    "subscribe": "DE000BASF111"
}
```

#### Sample Response

```JSON
{
    "isin": "DE000BASF111",
    "price": 11.316359370403822,
    "bid": 11.306359370403822,
    "ask": 11.326359370403821
}
```
