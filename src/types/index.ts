// V1 types
export type { PrintfulResponse, PaginationParams, Address } from "./v1/common.js";
export type { OAuthScope } from "./v1/oauth.js";
export type {
  SyncProduct, SyncProductDetail, SyncVariant, SyncFile,
  ProductVariantInfo, ProductSizeGuide, ProductSize, Category,
} from "./v1/catalog.js";
export type { ProductTemplate } from "./v1/product-templates.js";
export type {
  Order, OrderStatus, OrderItem, OrderCosts, SyncFile as OrderSyncFile,
  CreateOrderPayload, CreateOrderItem, EstimateCostsPayload,
} from "./v1/orders.js";
export type { FileItem, UploadFilePayload, ThreadColor } from "./v1/file-library.js";
export type { ShippingRateRequest, ShippingRateItem, ShippingRate } from "./v1/shipping.js";
export type { Country, State } from "./v1/countries.js";
export type { TaxCountryInfo, TaxStateInfo } from "./v1/tax.js";
export type { Webhook as WebhookV1, CreateWebhookPayload as CreateWebhookPayloadV1 } from "./v1/webhooks.js";
export type { Store, PackingSlipPayload } from "./v1/stores.js";
export type {
  MockupTemplate, MockupOrientation, MockupPosition,
  MockupTask, MockupResult, CreateMockupTaskPayload,
} from "./v1/mockup-generator.js";
export type { WarehouseProduct, WarehouseProductVariant } from "./v1/warehouse.js";
export type { StatisticsReport } from "./v1/reports.js";
export type { ApprovalSheet, ApprovalSheetItem, CreateApprovalSheetPayload } from "./v1/approval-sheets.js";

// V2 types
export type { PaginationParams as PaginationParamsV2 } from "./v2/common.js";
export type { OAuthScopeV2 } from "./v2/oauth.js";
export type {
  CatalogProductV2, CatalogProductImageV2, CatalogVariantV2,
  CatalogCategoryV2, ProductSizeV2, PriceInfoV2, ProductImageV2,
  ShippingCountryV2, MockupStyleV2, MockupTemplateV2, AvailabilityV2,
} from "./v2/catalog.js";
export type {
  OrderV2, OrderCostsV2, OrderRecipientV2, OrderItemV2, OrderFileV2,
  CreateOrderPayloadV2, CreateOrderItemV2, OrderShipmentV2, OrderInvoiceV2,
  OrderEstimationTaskPayloadV2,
} from "./v2/orders.js";
export type { FileV2, UploadFilePayloadV2 } from "./v2/files.js";
export type { CountryV2 } from "./v2/countries.js";
export type { ShippingRateRequestV2, ShippingRateV2 } from "./v2/shipping.js";
export type { WarehouseProductV2 } from "./v2/warehouse.js";
export type {
  CreateMockupTaskPayloadV2, MockupTaskV2, MockupResultV2,
} from "./v2/mockup-generator.js";
export type { WebhookV2, CreateWebhookPayloadV2 } from "./v2/webhooks.js";
export type { StoreV2, StoreStatisticsV2 } from "./v2/stores.js";
