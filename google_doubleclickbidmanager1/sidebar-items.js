initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Chunk",""],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DoubleClickBidManager","Central instance to access all DoubleClickBidManager related resource activities"],["DownloadLineItemsRequest","Request to fetch stored line items."],["DownloadLineItemsResponse","Download line items response."],["DownloadRequest","Request to fetch stored inventory sources, campaigns, insertion orders, line items, TrueView ad groups and ads."],["DownloadResponse","Download response."],["DummyNetworkStream",""],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["FilterPair","Filter used to match traffic data in your report."],["JsonServerError","A utility type which can decode a server response that indicates error"],["LineitemDownloadlineitemCall","Retrieves line items in CSV format. TrueView line items are not supported."],["LineitemMethods","A builder providing access to all methods supported on lineitem resources. It is not used directly, but through the `DoubleClickBidManager` hub."],["LineitemUploadlineitemCall","Uploads line items in CSV format. TrueView line items are not supported."],["ListQueriesResponse","List queries response."],["ListReportsResponse","List reports response."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Parameters","Parameters of a query or report."],["Query","Represents a query."],["QueryCreatequeryCall","Creates a query."],["QueryDeletequeryCall","Deletes a stored query as well as the associated stored reports."],["QueryGetqueryCall","Retrieves a stored query."],["QueryListqueryCall","Retrieves stored queries."],["QueryMetadata","Query metadata."],["QueryMethods","A builder providing access to all methods supported on query resources. It is not used directly, but through the `DoubleClickBidManager` hub."],["QueryRunqueryCall","Runs a stored query to generate a report."],["QuerySchedule","Information on how frequently and when to run a query."],["RangeResponseHeader",""],["Report","Represents a report."],["ReportFailure","An explanation of a report failure."],["ReportKey","Key used to identify a report."],["ReportListreportCall","Retrieves stored reports."],["ReportMetadata","Report metadata."],["ReportMethods","A builder providing access to all methods supported on report resources. It is not used directly, but through the `DoubleClickBidManager` hub."],["ReportStatus","Report status."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["RowStatus","Represents the upload status of a row in the request."],["RunQueryRequest","Request to run a stored query to generate a report."],["SdfDownloadCall","Retrieves entities in SDF format."],["SdfMethods","A builder providing access to all methods supported on sdf resources. It is not used directly, but through the `DoubleClickBidManager` hub."],["ServerError",""],["ServerMessage",""],["UploadLineItemsRequest","Request to upload line items."],["UploadLineItemsResponse","Upload line items response."],["UploadStatus","Represents the status of upload."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});