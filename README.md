# @penguin-101/printful-api

Unofficial [Printful API](https://developers.printful.com/) client library — TypeScript, zero runtime dependencies, covers **79 endpoints** (40 V1 + 39 V2).

```
npm install @penguin-101/printful-api
```

```ts
import { Printful } from "@penguin-101/printful-api";

const pf = new Printful({
  token: "your-api-token",
  storeId: "123", // default store ID
});

// V1
const { result: orders } = await pf.v1.orders.list();

// V2
const { result: products } = await pf.v2.catalog.listProducts();
```

---

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [API Reference — V1](#api-reference--v1)
  - [OAuth](#1-oauth)
  - [Catalog](#2-catalog)
  - [Product Templates](#3-product-templates)
  - [Orders](#4-orders)
  - [File Library](#5-file-library)
  - [Shipping Rate](#6-shipping-rate)
  - [Country/State Code](#7-countrystate-code)
  - [Tax Rate](#8-tax-rate)
  - [Webhook](#9-webhook)
  - [Store Information](#10-store-information)
  - [Mockup Generator](#11-mockup-generator)
  - [Warehouse Products](#12-warehouse-products)
  - [Reports](#13-reports)
  - [Approval Sheets](#14-approval-sheets)
- [API Reference — V2](#api-reference--v2)
  - [OAuth Scopes](#1-oauth-scopes-v2)
  - [Catalog](#2-catalog-v2)
  - [Orders](#3-orders-v2)
  - [Files](#4-files-v2)
  - [Countries](#5-countries-v2)
  - [Shipping Rates](#6-shipping-rates-v2)
  - [Warehouse Products](#7-warehouse-products-v2)
  - [Mockup Generator](#8-mockup-generator-v2)
  - [Webhooks](#9-webhooks-v2)
  - [Stores](#10-stores-v2)

---

## Installation

```sh
npm install @penguin-101/printful-api
```

Requires Node.js 18+ (native `fetch`). TypeScript types included.

---

## Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `token` | `string` | — | Bearer token (required). |
| `storeId` | `string` | — | Default `X-PF-Store-ID` header. Overridable per-method. |
| `baseUrl` | `string` | `https://api.printful.com` | API base URL. |

```ts
const pf = new Printful({
  token: "your-bearer-token",
  storeId: "123",
});
```

---

## Usage

### Response format

All methods return a `PrintfulResponse<T>`:

```ts
{
  code: number;   // HTTP status
  result: T;      // Typed response data
  extra?: Record<string, unknown>;
}
```

Raw response from Printful — no auto-unwrapping.

### Store ID

Each method accepts an optional `storeIdOverride` parameter:

```ts
// Use default store ID from config
await pf.v1.orders.list();

// Override for this request
await pf.v1.orders.list({}, "other-store-id");

// Skip X-PF-Store-ID header entirely
await pf.v2.catalog.listProducts({}, null);
```

### Pagination

V1/V2 list endpoints accept optional `{ limit?, offset? }`:

```ts
await pf.v1.orders.list({ limit: 50, offset: 0 });
```

---

## Error Handling

All non-2xx responses throw `PrintfulApiError`:

```ts
import { Printful, PrintfulApiError } from "@penguin-101/printful-api";

try {
  await pf.v1.orders.get(999999);
} catch (err) {
  if (err instanceof PrintfulApiError) {
    console.error(err.status, err.message);
  }
}
```

- `err.status` — HTTP status code
- `err.code` — HTTP status code
- `err.message` — `"Printful API {status}: {body}"`

---

## API Reference — V1

### 1. OAuth

```ts
pf.v1.oauth.scopes(storeIdOverride?): Promise<PrintfulResponse<OAuthScope[]>>
```

| Method | Path |
|--------|------|
| `scopes()` | `GET /oauth/scopes` |

### 2. Catalog

```ts
pf.v1.catalog.list(params?, storeIdOverride?)       // GET /products
pf.v1.catalog.variant(variantId, storeIdOverride?)   // GET /products/variant/:id
pf.v1.catalog.get(productId, storeIdOverride?)       // GET /products/:id
pf.v1.catalog.sizes(productId, storeIdOverride?)     // GET /products/:id/sizes
pf.v1.catalog.categories(storeIdOverride?)           // GET /categories
pf.v1.catalog.category(categoryId, storeIdOverride?) // GET /categories/:id
```

| Method | Path | Notes |
|--------|------|-------|
| `list` | `GET /products` | Optional `category_id` query param |
| `variant` | `GET /products/variant/:id` | |
| `get` | `GET /products/:id` | |
| `sizes` | `GET /products/:id/sizes` | Size guide |
| `categories` | `GET /categories` | |
| `category` | `GET /categories/:id` | |

### 3. Product Templates

```ts
pf.v1.productTemplates.list(params?, storeIdOverride?)     // GET /product-templates
pf.v1.productTemplates.get(templateId, storeIdOverride?)   // GET /product-templates/:id
pf.v1.productTemplates.delete(templateId, storeIdOverride?)// DELETE /product-templates/:id
```

| Method | Path |
|--------|------|
| `list` | `GET /product-templates` |
| `get` | `GET /product-templates/:id` |
| `delete` | `DELETE /product-templates/:id` |

### 4. Orders

```ts
pf.v1.orders.list(params?, storeIdOverride?)           // GET /orders
pf.v1.orders.create(data, storeIdOverride?)             // POST /orders
pf.v1.orders.get(orderId, storeIdOverride?)             // GET /orders/:id
pf.v1.orders.update(orderId, data, storeIdOverride?)    // PUT /orders/:id
pf.v1.orders.delete(orderId, storeIdOverride?)          // DELETE /orders/:id
pf.v1.orders.confirm(orderId, storeIdOverride?)         // POST /orders/:id/confirm
pf.v1.orders.estimateCosts(data, storeIdOverride?)      // POST /orders/estimate-costs
```

| Method | Path |
|--------|------|
| `list` | `GET /orders` |
| `create` | `POST /orders` |
| `get` | `GET /orders/:id` |
| `update` | `PUT /orders/:id` |
| `delete` | `DELETE /orders/:id` |
| `confirm` | `POST /orders/:id/confirm` |
| `estimateCosts` | `POST /orders/estimate-costs` |

### 5. File Library

```ts
pf.v1.fileLibrary.upload(data, storeIdOverride?)      // POST /files
pf.v1.fileLibrary.get(fileId, storeIdOverride?)        // GET /files/:id
pf.v1.fileLibrary.threadColors(storeIdOverride?)       // POST /files/thread-colors
```

| Method | Path |
|--------|------|
| `upload` | `POST /files` |
| `get` | `GET /files/:id` |
| `threadColors` | `POST /files/thread-colors` |

### 6. Shipping Rate

```ts
pf.v1.shipping.rates(data, storeIdOverride?)  // POST /shipping/rates
```

### 7. Country/State Code

```ts
pf.v1.countries.list(storeIdOverride?)  // GET /countries
```

### 8. Tax Rate

```ts
pf.v1.tax.countries(storeIdOverride?)  // GET /tax/countries
```

### 9. Webhook

```ts
pf.v1.webhooks.list(storeIdOverride?)    // GET /webhooks
pf.v1.webhooks.create(data, storeIdOverride?)  // POST /webhooks
pf.v1.webhooks.delete(storeIdOverride?)  // DELETE /webhooks
```

| Method | Path |
|--------|------|
| `list` | `GET /webhooks` |
| `create` | `POST /webhooks` |
| `delete` | `DELETE /webhooks` |

### 10. Store Information

```ts
pf.v1.stores.list(storeIdOverride?)                 // GET /stores
pf.v1.stores.get(storeId, storeIdOverride?)          // GET /stores/:id
pf.v1.stores.updatePackingSlip(data, storeIdOverride?) // POST /store/packing-slip
```

| Method | Path |
|--------|------|
| `list` | `GET /stores` |
| `get` | `GET /stores/:id` |
| `updatePackingSlip` | `POST /store/packing-slip` |

### 11. Mockup Generator

```ts
pf.v1.mockupGenerator.templates(productId, params?, storeIdOverride?)     // GET /mockup-generator/templates/:product_id
pf.v1.mockupGenerator.task(taskKey, storeIdOverride?)                      // GET /mockup-generator/task
pf.v1.mockupGenerator.createTask(productId, data, storeIdOverride?)        // POST /mockup-generator/create-task/:product_id
```

| Method | Path | Notes |
|--------|------|-------|
| `templates` | `GET /mockup-generator/templates/:product_id` | Optional `orientation`, `technique` |
| `task` | `GET /mockup-generator/task` | Query `task_key` |
| `createTask` | `POST /mockup-generator/create-task/:product_id` | |

### 12. Warehouse Products

```ts
pf.v1.warehouse.list(storeIdOverride?)          // GET /warehouse/products
pf.v1.warehouse.get(productId, storeIdOverride?) // GET /warehouse/products/:id
```

| Method | Path |
|--------|------|
| `list` | `GET /warehouse/products` |
| `get` | `GET /warehouse/products/:id` |

### 13. Reports

```ts
pf.v1.reports.statistics(params?, storeIdOverride?)  // GET /reports/statistics
```

Query params: `date_from`, `date_to`, `report_types`, `currency`.

### 14. Approval Sheets

```ts
pf.v1.approvalSheets.list(storeIdOverride?)                       // GET /approval-sheets
pf.v1.approvalSheets.create(data, confirmHash?, storeIdOverride?)  // POST /approval-sheets
pf.v1.approvalSheets.submitChanges(confirmHash, storeIdOverride?)  // POST /approval-sheets/changes
```

| Method | Path |
|--------|------|
| `list` | `GET /approval-sheets` |
| `create` | `POST /approval-sheets` |
| `submitChanges` | `POST /approval-sheets/changes` |

---

## API Reference — V2

### 1. OAuth Scopes v2

```ts
pf.v2.oauth.scopes(storeIdOverride?)  // GET /v2/oauth-scopes
```

### 2. Catalog v2

```ts
pf.v2.catalog.listProducts(params?, storeIdOverride?)                   // GET /v2/catalog-products
pf.v2.catalog.getProduct(productId, params?, storeIdOverride?)           // GET /v2/catalog-products/:id
pf.v2.catalog.getVariant(variantId, storeIdOverride?)                    // GET /v2/catalog-variants/:id
pf.v2.catalog.listVariants(productId, storeIdOverride?)                  // GET /v2/catalog-products/:id/catalog-variants
pf.v2.catalog.listCategories(storeIdOverride?)                           // GET /v2/catalog-categories
pf.v2.catalog.getCategory(categoryId, storeIdOverride?)                  // GET /v2/catalog-categories/:id
pf.v2.catalog.listProductCategories(productId, storeIdOverride?)         // GET /v2/catalog-products/:id/catalog-categories
pf.v2.catalog.sizes(productId, params?, storeIdOverride?)                // GET /v2/catalog-products/:id/sizes
pf.v2.catalog.productPrices(productId, params?, storeIdOverride?)        // GET /v2/catalog-products/:id/prices
pf.v2.catalog.variantPrices(variantId, params?, storeIdOverride?)        // GET /v2/catalog-variants/:id/prices
pf.v2.catalog.productImages(productId, storeIdOverride?)                 // GET /v2/catalog-products/:id/images
pf.v2.catalog.shippingCountries(productId, storeIdOverride?)             // GET /v2/catalog-products/:id/shipping-countries
pf.v2.catalog.variantImages(variantId, params?, storeIdOverride?)        // GET /v2/catalog-variants/:id/images
pf.v2.catalog.mockupStyles(productId, params?, storeIdOverride?)         // GET /v2/catalog-products/:id/mockup-styles
pf.v2.catalog.mockupTemplates(productId, params?, storeIdOverride?)      // GET /v2/catalog-products/:id/mockup-templates
pf.v2.catalog.productAvailability(productId, params?, storeIdOverride?)  // GET /v2/catalog-products/:id/availability
pf.v2.catalog.variantAvailability(variantId, params?, storeIdOverride?)  // GET /v2/catalog-variants/:id/availability
```

| Method | Path |
|--------|------|
| `listProducts` | `GET /v2/catalog-products` |
| `getProduct` | `GET /v2/catalog-products/:id` |
| `getVariant` | `GET /v2/catalog-variants/:id` |
| `listVariants` | `GET /v2/catalog-products/:id/catalog-variants` |
| `listCategories` | `GET /v2/catalog-categories` |
| `getCategory` | `GET /v2/catalog-categories/:id` |
| `listProductCategories` | `GET /v2/catalog-products/:id/catalog-categories` |
| `sizes` | `GET /v2/catalog-products/:id/sizes` |
| `productPrices` | `GET /v2/catalog-products/:id/prices` |
| `variantPrices` | `GET /v2/catalog-variants/:id/prices` |
| `productImages` | `GET /v2/catalog-products/:id/images` |
| `shippingCountries` | `GET /v2/catalog-products/:id/shipping-countries` |
| `variantImages` | `GET /v2/catalog-variants/:id/images` |
| `mockupStyles` | `GET /v2/catalog-products/:id/mockup-styles` |
| `mockupTemplates` | `GET /v2/catalog-products/:id/mockup-templates` |
| `productAvailability` | `GET /v2/catalog-products/:id/availability` |
| `variantAvailability` | `GET /v2/catalog-variants/:id/availability` |

### 3. Orders v2

```ts
pf.v2.orders.list(params?, storeIdOverride?)                             // GET /v2/orders
pf.v2.orders.create(data, storeIdOverride?)                               // POST /v2/orders
pf.v2.orders.get(orderId, storeIdOverride?)                               // GET /v2/orders/:id
pf.v2.orders.update(orderId, data, storeIdOverride?)                      // PATCH /v2/orders/:id
pf.v2.orders.confirm(orderId, storeIdOverride?)                           // POST /v2/orders/:id/confirmation
pf.v2.orders.delete(orderId, storeIdOverride?)                            // DELETE /v2/orders/:id
pf.v2.orders.listItems(orderId, params?, storeIdOverride?)                // GET /v2/orders/:id/order-items
pf.v2.orders.addItem(orderId, data, storeIdOverride?)                     // POST /v2/orders/:id/order-items
pf.v2.orders.getItem(orderId, itemId, storeIdOverride?)                   // GET /v2/orders/:id/order-items/:item_id
pf.v2.orders.updateItem(orderId, itemId, data, storeIdOverride?)          // PATCH /v2/orders/:id/order-items/:item_id
pf.v2.orders.deleteItem(orderId, itemId, storeIdOverride?)                // DELETE /v2/orders/:id/order-items/:item_id
pf.v2.orders.shipments(orderId, params?, storeIdOverride?)                // GET /v2/orders/:id/shipments
pf.v2.orders.invoices(orderId, storeIdOverride?)                          // GET /v2/orders/:id/invoices
pf.v2.orders.listEstimationTasks(params?, storeIdOverride?)               // GET /v2/order-estimation-tasks
pf.v2.orders.createEstimationTask(data, storeIdOverride?)                 // POST /v2/order-estimation-tasks
```

| Method | Path |
|--------|------|
| `list` | `GET /v2/orders` |
| `create` | `POST /v2/orders` |
| `get` | `GET /v2/orders/:id` |
| `update` | `PATCH /v2/orders/:id` |
| `confirm` | `POST /v2/orders/:id/confirmation` |
| `delete` | `DELETE /v2/orders/:id` |
| `listItems` | `GET /v2/orders/:id/order-items` |
| `addItem` | `POST /v2/orders/:id/order-items` |
| `getItem` | `GET /v2/orders/:id/order-items/:item_id` |
| `updateItem` | `PATCH /v2/orders/:id/order-items/:item_id` |
| `deleteItem` | `DELETE /v2/orders/:id/order-items/:item_id` |
| `shipments` | `GET /v2/orders/:id/shipments` |
| `invoices` | `GET /v2/orders/:id/invoices` |
| `listEstimationTasks` | `GET /v2/order-estimation-tasks` |
| `createEstimationTask` | `POST /v2/order-estimation-tasks` |

### 4. Files v2

```ts
pf.v2.files.upload(data, storeIdOverride?)  // POST /v2/files
pf.v2.files.get(fileId, storeIdOverride?)    // GET /v2/files/:id
```

| Method | Path |
|--------|------|
| `upload` | `POST /v2/files` |
| `get` | `GET /v2/files/:id` |

### 5. Countries v2

```ts
pf.v2.countries.list(storeIdOverride?)  // GET /v2/countries
```

### 6. Shipping Rates v2

```ts
pf.v2.shipping.rates(data, storeIdOverride?)  // POST /v2/shipping-rates
```

### 7. Warehouse Products v2

```ts
pf.v2.warehouse.list(params?, storeIdOverride?)   // GET /v2/warehouse-products
pf.v2.warehouse.get(productId, storeIdOverride?)   // GET /v2/warehouse-products/:id
```

| Method | Path |
|--------|------|
| `list` | `GET /v2/warehouse-products` |
| `get` | `GET /v2/warehouse-products/:id` |

### 8. Mockup Generator v2

```ts
pf.v2.mockupGenerator.createTask(data, storeIdOverride?)  // POST /v2/mockup-tasks
pf.v2.mockupGenerator.tasks(params?, storeIdOverride?)     // GET /v2/mockup-tasks
```

| Method | Path |
|--------|------|
| `createTask` | `POST /v2/mockup-tasks` |
| `tasks` | `GET /v2/mockup-tasks` |

### 9. Webhooks v2

```ts
pf.v2.webhooks.list(storeIdOverride?)           // GET /v2/webhooks
pf.v2.webhooks.create(data, storeIdOverride?)    // POST /v2/webhooks
pf.v2.webhooks.get(eventType, storeIdOverride?) // GET /v2/webhooks/:event_type
pf.v2.webhooks.deleteAll(storeIdOverride?)       // DELETE /v2/webhooks
pf.v2.webhooks.delete(eventType, storeIdOverride?) // DELETE /v2/webhooks/:event_type
```

| Method | Path |
|--------|------|
| `list` | `GET /v2/webhooks` |
| `create` | `POST /v2/webhooks` |
| `get` | `GET /v2/webhooks/:event_type` |
| `deleteAll` | `DELETE /v2/webhooks` |
| `delete` | `DELETE /v2/webhooks/:event_type` |

### 10. Stores v2

```ts
pf.v2.stores.list(storeIdOverride?)                     // GET /v2/stores
pf.v2.stores.get(storeId, storeIdOverride?)              // GET /v2/stores/:id
pf.v2.stores.statistics(storeId, params?, storeIdOverride?) // GET /v2/stores/:id/statistics
```

| Method | Path |
|--------|------|
| `list` | `GET /v2/stores` |
| `get` | `GET /v2/stores/:id` |
| `statistics` | `GET /v2/stores/:id/statistics` |

---

## Examples

### Create order (V1)

```ts
const { result: order } = await pf.v1.orders.create({
  shipping: "STANDARD",
  recipient: {
    first_name: "John",
    last_name: "Doe",
    address1: "123 Main St",
    city: "Los Angeles",
    state_code: "CA",
    country_code: "US",
    zip: "90001",
    email: "john@example.com",
    phone: "555-0100",
  },
  items: [
    {
      sync_variant_id: 12345,
      quantity: 2,
      retail_price: "39.99",
    },
  ],
});
```

### Confirm order (V1)

```ts
await pf.v1.orders.confirm(orderId);
```

### List catalog products with filters (V2)

```ts
const { result: products } = await pf.v2.catalog.listProducts({
  category_ids: "10",
  limit: 20,
  selling_region_name: "US",
});
```

### Get product prices & availability (V2)

```ts
const { result: prices } = await pf.v2.catalog.productPrices(71, {
  selling_region_name: "US",
  currency: "USD",
});

const { result: availability } = await pf.v2.catalog.productAvailability(71, {
  selling_region_name: "US",
});
```

### Upload file

```ts
// V1
const { result: file } = await pf.v1.fileLibrary.upload({ url: "https://..." });

// V2
const { result: file } = await pf.v2.files.upload({ url: "https://..." });
```

### Get shipping rates

```ts
// V1
const { result: rates } = await pf.v1.shipping.rates({
  recipient: { /* address */ },
  items: [{ variant_id: 4011, quantity: 1 }],
});

// V2
const { result: rates } = await pf.v2.shipping.rates({
  shipping_method: "STANDARD",
  recipient: { country_code: "US", state_code: "CA" },
  items: [{ catalog_variant_id: 4011, quantity: 1 }],
});
```

---

## Build

```sh
npm run build  # tsc → dist/
```

## Publish

```sh
npm publish --access public
```

---

## License

MIT
