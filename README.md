# cmlabs Freelance Test

## Usage/Examples

Run directly from your terminal

```bash
node sraper.js
```

## API Reference

- URL: <https://cmlabs.makira.id>
- Crawl: <https://cmlabs.makira.id/crawler/api?url=https://cmlabs.co>
- Output: <https://stockbit.makira.id/output/cmlabs.co>
- [Postman Collection](https://api.postman.com/collections/6261768-471f1bdd-a492-4b3a-9ec1-bc7db2db01a5?access_key=PMAT-01HNAWS198DKSB86ETXDTVQXB2)

### Start Crawling

```http
  POST /crawler/api?url=https://goole.com
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` | **Required**. |

### View the output

```http
  GET /output/:url
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `string` | **Required**. |