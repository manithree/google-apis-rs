initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Asset","Cloud asset. This includes all Google Cloud Platform resources, Cloud IAM policies, and other non-GCP assets."],["AuditConfig","Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs."],["AuditLogConfig","Provides the configuration for logging a type of permissions. Example:"],["BatchGetAssetsHistoryResponse","Batch get assets history response."],["Binding","Associates `members` with a `role`."],["Chunk",""],["CloudAsset","Central instance to access all CloudAsset related resource activities"],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DummyNetworkStream",""],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["ExportAssetsRequest","Export asset request."],["Expr","Represents an expression text. Example:"],["FolderExportAssetCall","Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export."],["FolderMethods","A builder providing access to all methods supported on folder resources. It is not used directly, but through the `CloudAsset` hub."],["FolderOperationGetCall","Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service."],["GcsDestination","A Cloud Storage location."],["JsonServerError","A utility type which can decode a server response that indicates error"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["OrganizationBatchGetAssetsHistoryCall","Batch gets the update history of assets that overlap a time window. For RESOURCE content, this API outputs history with asset in both non-delete or deleted status. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error."],["OrganizationExportAssetCall","Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export."],["OrganizationMethods","A builder providing access to all methods supported on organization resources. It is not used directly, but through the `CloudAsset` hub."],["OrganizationOperationGetCall","Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service."],["OutputConfig","Output configuration for export assets destination."],["Policy","Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources."],["ProjectBatchGetAssetsHistoryCall","Batch gets the update history of assets that overlap a time window. For RESOURCE content, this API outputs history with asset in both non-delete or deleted status. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error."],["ProjectExportAssetCall","Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `CloudAsset` hub."],["ProjectOperationGetCall","Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service."],["RangeResponseHeader",""],["ResourceType","Representation of a cloud resource."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["ServerError",""],["ServerMessage",""],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details."],["TemporalAsset","Temporal asset. In addition to the asset, the temporal asset includes the status of the asset and valid from and to time of it."],["TimeWindow","A time window of (start_time, end_time]."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});