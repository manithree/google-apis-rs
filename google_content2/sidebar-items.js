initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Account","Account data."],["AccountAdwordsLink","There is no detailed description."],["AccountAuthinfoCall","Returns information about the authenticated user."],["AccountCustombatchCall","Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request."],["AccountDeleteCall","Deletes a Merchant Center sub-account."],["AccountGetCall","Retrieves a Merchant Center account."],["AccountIdentifier","There is no detailed description."],["AccountInsertCall","Creates a Merchant Center sub-account."],["AccountListCall","Lists the sub-accounts in your Merchant Center account."],["AccountMethods","A builder providing access to all methods supported on *account* resources. It is not used directly, but through the `ShoppingContent` hub."],["AccountPatchCall","Updates a Merchant Center account. This method supports patch semantics."],["AccountShipping","The shipping settings of a merchant account."],["AccountShippingCarrierRate","A carrier-calculated shipping rate."],["AccountShippingCondition","There is no detailed description."],["AccountShippingLocationGroup","A user-defined locations group in a given country. All the locations of the group must be of the same type."],["AccountShippingPostalCodeRange","A postal code range, that can be either: - A range of postal codes (e.g., start=12340, end=12359) - A range of postal codes prefixes (e.g., start=1234* end=1235*). Prefixes must be of the same length (e.g., start=12* end=2* is invalid)."],["AccountShippingRateTable","A single or bi-dimensional table of shipping rates. Each dimension is defined in terms of consecutive price/weight ranges, delivery locations, or shipping labels."],["AccountShippingRateTableCell","There is no detailed description."],["AccountShippingShippingService","Shipping services provided in a country."],["AccountShippingShippingServiceCalculationMethod","Shipping cost calculation method. Exactly one of the field is set."],["AccountShippingShippingServiceCostRule","Building block of the cost calculation decision tree. - The tree root should have no condition and no calculation method. - All the children must have a condition on the same dimension. The first child matching a condition is entered, therefore, price and weight conditions form contiguous intervals. - The last child of an element must have no condition and matches all elements not previously matched. - Children and calculation method are mutually exclusive, and exactly one of them must be defined; the root must only have children."],["AccountStatus","The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time."],["AccountStatusDataQualityIssue","There is no detailed description."],["AccountStatusExampleItem","An example of an item that has poor data quality. An item value on the landing page differs from what is submitted, or conflicts with a policy."],["AccountTax","The tax settings of a merchant account."],["AccountTaxTaxRule","Tax calculation rule to apply in a state or province (USA only)."],["AccountUpdateCall","Updates a Merchant Center account."],["AccountUser","There is no detailed description."],["AccountsAuthInfoResponse","There is no detailed description."],["AccountsCustomBatchRequest","There is no detailed description."],["AccountsCustomBatchRequestEntry","A batch entry encoding a single non-batch accounts request."],["AccountsCustomBatchResponse","There is no detailed description."],["AccountsCustomBatchResponseEntry","A batch entry encoding a single non-batch accounts response."],["AccountsListResponse","There is no detailed description."],["AccountshippingCustomBatchRequest","There is no detailed description."],["AccountshippingCustomBatchRequestEntry","A batch entry encoding a single non-batch accountshipping request."],["AccountshippingCustomBatchResponse","There is no detailed description."],["AccountshippingCustomBatchResponseEntry","A batch entry encoding a single non-batch accountshipping response."],["AccountshippingCustombatchCall","Retrieves and updates the shipping settings of multiple accounts in a single request."],["AccountshippingGetCall","Retrieves the shipping settings of the account."],["AccountshippingListCall","Lists the shipping settings of the sub-accounts in your Merchant Center account."],["AccountshippingListResponse","There is no detailed description."],["AccountshippingMethods","A builder providing access to all methods supported on *accountshipping* resources. It is not used directly, but through the `ShoppingContent` hub."],["AccountshippingPatchCall","Updates the shipping settings of the account. This method supports patch semantics."],["AccountshippingUpdateCall","Updates the shipping settings of the account."],["AccountstatuseCustombatchCall","A builder for the *custombatch* method supported by a *accountstatuse* resource. It is not used directly, but through a `AccountstatuseMethods` instance."],["AccountstatuseGetCall","Retrieves the status of a Merchant Center account."],["AccountstatuseListCall","Lists the statuses of the sub-accounts in your Merchant Center account."],["AccountstatuseMethods","A builder providing access to all methods supported on *accountstatuse* resources. It is not used directly, but through the `ShoppingContent` hub."],["AccountstatusesCustomBatchRequest","There is no detailed description."],["AccountstatusesCustomBatchRequestEntry","A batch entry encoding a single non-batch accountstatuses request."],["AccountstatusesCustomBatchResponse","There is no detailed description."],["AccountstatusesCustomBatchResponseEntry","A batch entry encoding a single non-batch accountstatuses response."],["AccountstatusesListResponse","There is no detailed description."],["AccounttaxCustomBatchRequest","There is no detailed description."],["AccounttaxCustomBatchRequestEntry","A batch entry encoding a single non-batch accounttax request."],["AccounttaxCustomBatchResponse","There is no detailed description."],["AccounttaxCustomBatchResponseEntry","A batch entry encoding a single non-batch accounttax response."],["AccounttaxCustombatchCall","Retrieves and updates tax settings of multiple accounts in a single request."],["AccounttaxGetCall","Retrieves the tax settings of the account."],["AccounttaxListCall","Lists the tax settings of the sub-accounts in your Merchant Center account."],["AccounttaxListResponse","There is no detailed description."],["AccounttaxMethods","A builder providing access to all methods supported on *accounttax* resources. It is not used directly, but through the `ShoppingContent` hub."],["AccounttaxPatchCall","Updates the tax settings of the account. This method supports patch semantics."],["AccounttaxUpdateCall","Updates the tax settings of the account."],["Datafeed","Datafeed data."],["DatafeedCustombatchCall","A builder for the *custombatch* method supported by a *datafeed* resource. It is not used directly, but through a `DatafeedMethods` instance."],["DatafeedDeleteCall","Deletes a datafeed from your Merchant Center account."],["DatafeedFetchSchedule","The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required."],["DatafeedFormat","There is no detailed description."],["DatafeedGetCall","Retrieves a datafeed from your Merchant Center account."],["DatafeedInsertCall","Registers a datafeed with your Merchant Center account."],["DatafeedListCall","Lists the datafeeds in your Merchant Center account."],["DatafeedMethods","A builder providing access to all methods supported on *datafeed* resources. It is not used directly, but through the `ShoppingContent` hub."],["DatafeedPatchCall","Updates a datafeed of your Merchant Center account. This method supports patch semantics."],["DatafeedStatus","The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished."],["DatafeedStatusError","An error occurring in the feed, like \"invalid price\"."],["DatafeedStatusExample","An example occurrence for a particular error."],["DatafeedUpdateCall","Updates a datafeed of your Merchant Center account."],["DatafeedsCustomBatchRequest","There is no detailed description."],["DatafeedsCustomBatchRequestEntry","A batch entry encoding a single non-batch datafeeds request."],["DatafeedsCustomBatchResponse","There is no detailed description."],["DatafeedsCustomBatchResponseEntry","A batch entry encoding a single non-batch datafeeds response."],["DatafeedsListResponse","There is no detailed description."],["DatafeedstatuseCustombatchCall","A builder for the *custombatch* method supported by a *datafeedstatuse* resource. It is not used directly, but through a `DatafeedstatuseMethods` instance."],["DatafeedstatuseGetCall","Retrieves the status of a datafeed from your Merchant Center account."],["DatafeedstatuseListCall","Lists the statuses of the datafeeds in your Merchant Center account."],["DatafeedstatuseMethods","A builder providing access to all methods supported on *datafeedstatuse* resources. It is not used directly, but through the `ShoppingContent` hub."],["DatafeedstatusesCustomBatchRequest","There is no detailed description."],["DatafeedstatusesCustomBatchRequestEntry","A batch entry encoding a single non-batch datafeedstatuses request."],["DatafeedstatusesCustomBatchResponse","There is no detailed description."],["DatafeedstatusesCustomBatchResponseEntry","A batch entry encoding a single non-batch datafeedstatuses response."],["DatafeedstatusesListResponse","There is no detailed description."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["ErrorType","An error returned by the API."],["Errors","A list of errors returned by a failed batch entry."],["Installment","There is no detailed description."],["Inventory","There is no detailed description."],["InventoryCustomBatchRequest","There is no detailed description."],["InventoryCustomBatchRequestEntry","A batch entry encoding a single non-batch inventory request."],["InventoryCustomBatchResponse","There is no detailed description."],["InventoryCustomBatchResponseEntry","A batch entry encoding a single non-batch inventory response."],["InventoryCustombatchCall","Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products."],["InventoryMethods","A builder providing access to all methods supported on *inventory* resources. It is not used directly, but through the `ShoppingContent` hub."],["InventorySetCall","Updates price and availability of a product in your Merchant Center account. This operation does not update the expiration date of the product."],["InventorySetRequest","There is no detailed description."],["InventorySetResponse","There is no detailed description."],["LoyaltyPoints","There is no detailed description."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Order","There is no detailed description."],["OrderAcknowledgeCall","Marks an order as acknowledged."],["OrderAddress","There is no detailed description."],["OrderAdvancetestorderCall","Sandbox only. Moves a test order from state \"inProgress\" to state \"pendingShipment\"."],["OrderCancelCall","Cancels all line items in an order."],["OrderCancellation","There is no detailed description."],["OrderCancellineitemCall","Cancels a line item."],["OrderCreatetestorderCall","Sandbox only. Creates a test order."],["OrderCustombatchCall","Retrieves or modifies multiple orders in a single request."],["OrderCustomer","There is no detailed description."],["OrderDeliveryDetails","There is no detailed description."],["OrderGetCall","Retrieves an order from your Merchant Center account."],["OrderGetbymerchantorderidCall","Retrieves an order using merchant order id."],["OrderGettestordertemplateCall","Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox."],["OrderLineItem","There is no detailed description."],["OrderLineItemProduct","There is no detailed description."],["OrderLineItemProductVariantAttribute","There is no detailed description."],["OrderLineItemReturnInfo","There is no detailed description."],["OrderLineItemShippingDetails","There is no detailed description."],["OrderLineItemShippingDetailsMethod","There is no detailed description."],["OrderListCall","Lists the orders in your Merchant Center account."],["OrderMethods","A builder providing access to all methods supported on *order* resources. It is not used directly, but through the `ShoppingContent` hub."],["OrderPaymentMethod","There is no detailed description."],["OrderPromotion","There is no detailed description."],["OrderPromotionBenefit","There is no detailed description."],["OrderRefund","There is no detailed description."],["OrderRefundCall","Refund a portion of the order, up to the full amount paid."],["OrderReturn","There is no detailed description."],["OrderReturnlineitemCall","Returns a line item."],["OrderShiplineitemCall","Marks line item(s) as shipped."],["OrderShipment","There is no detailed description."],["OrderShipmentLineItemShipment","There is no detailed description."],["OrderUpdatemerchantorderidCall","Updates the merchant order ID for a given order."],["OrderUpdateshipmentCall","Updates a shipment's status, carrier, and/or tracking ID."],["OrdersAcknowledgeRequest","There is no detailed description."],["OrdersAcknowledgeResponse","There is no detailed description."],["OrdersAdvanceTestOrderResponse","There is no detailed description."],["OrdersCancelLineItemRequest","There is no detailed description."],["OrdersCancelLineItemResponse","There is no detailed description."],["OrdersCancelRequest","There is no detailed description."],["OrdersCancelResponse","There is no detailed description."],["OrdersCreateTestOrderRequest","There is no detailed description."],["OrdersCreateTestOrderResponse","There is no detailed description."],["OrdersCustomBatchRequest","There is no detailed description."],["OrdersCustomBatchRequestEntry","There is no detailed description."],["OrdersCustomBatchRequestEntryCancel","There is no detailed description."],["OrdersCustomBatchRequestEntryCancelLineItem","There is no detailed description."],["OrdersCustomBatchRequestEntryRefund","There is no detailed description."],["OrdersCustomBatchRequestEntryReturnLineItem","There is no detailed description."],["OrdersCustomBatchRequestEntryShipLineItems","There is no detailed description."],["OrdersCustomBatchRequestEntryUpdateShipment","There is no detailed description."],["OrdersCustomBatchResponse","There is no detailed description."],["OrdersCustomBatchResponseEntry","There is no detailed description."],["OrdersGetByMerchantOrderIdResponse","There is no detailed description."],["OrdersGetTestOrderTemplateResponse","There is no detailed description."],["OrdersListResponse","There is no detailed description."],["OrdersRefundRequest","There is no detailed description."],["OrdersRefundResponse","There is no detailed description."],["OrdersReturnLineItemRequest","There is no detailed description."],["OrdersReturnLineItemResponse","There is no detailed description."],["OrdersShipLineItemsRequest","There is no detailed description."],["OrdersShipLineItemsResponse","There is no detailed description."],["OrdersUpdateMerchantOrderIdRequest","There is no detailed description."],["OrdersUpdateMerchantOrderIdResponse","There is no detailed description."],["OrdersUpdateShipmentRequest","There is no detailed description."],["OrdersUpdateShipmentResponse","There is no detailed description."],["Price","There is no detailed description."],["Product","Product data."],["ProductAspect","There is no detailed description."],["ProductCustomAttribute","There is no detailed description."],["ProductCustomGroup","There is no detailed description."],["ProductCustombatchCall","Retrieves, inserts, and deletes multiple products in a single request."],["ProductDeleteCall","Deletes a product from your Merchant Center account."],["ProductDestination","There is no detailed description."],["ProductGetCall","Retrieves a product from your Merchant Center account."],["ProductInsertCall","Uploads a product to your Merchant Center account."],["ProductListCall","Lists the products in your Merchant Center account."],["ProductMethods","A builder providing access to all methods supported on *product* resources. It is not used directly, but through the `ShoppingContent` hub."],["ProductShipping","There is no detailed description."],["ProductShippingDimension","There is no detailed description."],["ProductShippingWeight","There is no detailed description."],["ProductStatus","The status of a product, i.e., information about a product computed asynchronously by the data quality analysis."],["ProductStatusDataQualityIssue","There is no detailed description."],["ProductStatusDestinationStatus","There is no detailed description."],["ProductTax","There is no detailed description."],["ProductUnitPricingBaseMeasure","There is no detailed description."],["ProductUnitPricingMeasure","There is no detailed description."],["ProductsCustomBatchRequest","There is no detailed description."],["ProductsCustomBatchRequestEntry","A batch entry encoding a single non-batch products request."],["ProductsCustomBatchResponse","There is no detailed description."],["ProductsCustomBatchResponseEntry","A batch entry encoding a single non-batch products response."],["ProductsListResponse","There is no detailed description."],["ProductstatuseCustombatchCall","Gets the statuses of multiple products in a single request."],["ProductstatuseGetCall","Gets the status of a product from your Merchant Center account."],["ProductstatuseListCall","Lists the statuses of the products in your Merchant Center account."],["ProductstatuseMethods","A builder providing access to all methods supported on *productstatuse* resources. It is not used directly, but through the `ShoppingContent` hub."],["ProductstatusesCustomBatchRequest","There is no detailed description."],["ProductstatusesCustomBatchRequestEntry","A batch entry encoding a single non-batch productstatuses request."],["ProductstatusesCustomBatchResponse","There is no detailed description."],["ProductstatusesCustomBatchResponseEntry","A batch entry encoding a single non-batch productstatuses response."],["ProductstatusesListResponse","There is no detailed description."],["ShoppingContent","Central instance to access all ShoppingContent related resource activities"],["TestOrder","There is no detailed description."],["TestOrderCustomer","There is no detailed description."],["TestOrderLineItem","There is no detailed description."],["TestOrderLineItemProduct","There is no detailed description."],["TestOrderPaymentMethod","There is no detailed description."],["Weight","There is no detailed description."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"type":[["Result","A universal result type used as return for all calls."]]});