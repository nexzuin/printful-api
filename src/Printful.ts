import type { PrintfulConfig } from "./config.js";
import {
  // V1 resources
  OAuthResource,
  CatalogResource,
  ProductTemplatesResource,
  OrdersResource,
  FileLibraryResource,
  ShippingResource,
  CountriesResource,
  TaxResource,
  WebhooksResource,
  StoresResource,
  MockupGeneratorResource,
  WarehouseResource,
  ReportsResource,
  ApprovalSheetsResource,
  // V2 resources
  OAuthV2Resource,
  CatalogV2Resource,
  OrdersV2Resource,
  FilesV2Resource,
  CountriesV2Resource,
  ShippingV2Resource,
  WarehouseV2Resource,
  MockupGeneratorV2Resource,
  WebhooksV2Resource,
  StoresV2Resource,
} from "./resources/index.js";

/**
 * Printful API client.
 *
 * Usage:
 * ```ts
 * const pf = new Printful({ token: "your-api-token", storeId: "123" });
 * const orders = await pf.v1.orders.list();
 * const products = await pf.v2.catalog.listProducts();
 * ```
 */
export class Printful {
  /** V1 API endpoints. */
  readonly v1: V1Namespace;

  /** V2 API endpoints. */
  readonly v2: V2Namespace;

  constructor(config: PrintfulConfig) {
    this.v1 = new V1Namespace(config);
    this.v2 = new V2Namespace(config);
  }
}

// ─── V1 Namespace ───────────────────────────────────────────────────────────

class V1Namespace {
  readonly oauth: OAuthResource;
  readonly catalog: CatalogResource;
  readonly productTemplates: ProductTemplatesResource;
  readonly orders: OrdersResource;
  readonly fileLibrary: FileLibraryResource;
  readonly shipping: ShippingResource;
  readonly countries: CountriesResource;
  readonly tax: TaxResource;
  readonly webhooks: WebhooksResource;
  readonly stores: StoresResource;
  readonly mockupGenerator: MockupGeneratorResource;
  readonly warehouse: WarehouseResource;
  readonly reports: ReportsResource;
  readonly approvalSheets: ApprovalSheetsResource;

  constructor(config: PrintfulConfig) {
    this.oauth = new OAuthResource(config);
    this.catalog = new CatalogResource(config);
    this.productTemplates = new ProductTemplatesResource(config);
    this.orders = new OrdersResource(config);
    this.fileLibrary = new FileLibraryResource(config);
    this.shipping = new ShippingResource(config);
    this.countries = new CountriesResource(config);
    this.tax = new TaxResource(config);
    this.webhooks = new WebhooksResource(config);
    this.stores = new StoresResource(config);
    this.mockupGenerator = new MockupGeneratorResource(config);
    this.warehouse = new WarehouseResource(config);
    this.reports = new ReportsResource(config);
    this.approvalSheets = new ApprovalSheetsResource(config);
  }
}

// ─── V2 Namespace ───────────────────────────────────────────────────────────

class V2Namespace {
  readonly oauth: OAuthV2Resource;
  readonly catalog: CatalogV2Resource;
  readonly orders: OrdersV2Resource;
  readonly files: FilesV2Resource;
  readonly countries: CountriesV2Resource;
  readonly shipping: ShippingV2Resource;
  readonly warehouse: WarehouseV2Resource;
  readonly mockupGenerator: MockupGeneratorV2Resource;
  readonly webhooks: WebhooksV2Resource;
  readonly stores: StoresV2Resource;

  constructor(config: PrintfulConfig) {
    this.oauth = new OAuthV2Resource(config);
    this.catalog = new CatalogV2Resource(config);
    this.orders = new OrdersV2Resource(config);
    this.files = new FilesV2Resource(config);
    this.countries = new CountriesV2Resource(config);
    this.shipping = new ShippingV2Resource(config);
    this.warehouse = new WarehouseV2Resource(config);
    this.mockupGenerator = new MockupGeneratorV2Resource(config);
    this.webhooks = new WebhooksV2Resource(config);
    this.stores = new StoresV2Resource(config);
  }
}

export { PrintfulApiError } from "./request.js";
export type { PrintfulConfig } from "./config.js";
