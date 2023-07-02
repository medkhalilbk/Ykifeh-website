  
# IKifeh-v1 website


Ykifeh is a user-friendly mobile application that helps people find their best plan to hangout.
We aim to help our user choose their place based on : either their mood , location or catogory.
We are also aiming to have a financial income from this web app that could be based on either : 
Ads , sponsors or  premium features in the app 

## Authors

- [@medkhalilbk](https://www.github.com/medkhalilbk)
- [@Baltii](https://www.github.com/Baltii)
- [@zouinekh](https://www.github.com/zouinekh)
- [@TNshadow159](https://www.github.com/TNshadow159) 


## API Reference

#### Get all items
 `API-X-KEY`  **Required**
```http
  POST /api/subscribe
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Your username |
| `phone` | `number` | **Required**. Your number |
| `email` | `string` |  Your email | 

```http
  GET /api/property/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

 
## Contributing

Contributions are always welcome!
 


## Demo

⌛⌛⌛


## Deployment

To deploy this project run

```bash
  npm run deploy
```

