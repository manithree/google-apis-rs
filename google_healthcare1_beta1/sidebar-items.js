initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["AuditConfig","Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs."],["AuditLogConfig","Provides the configuration for logging a type of permissions. Example:"],["Binding","Associates `members` with a `role`."],["CharacterMaskConfig","Mask a string by replacing its characters with a fixed character."],["Chunk",""],["CloudHealthcare","Central instance to access all CloudHealthcare related resource activities"],["ContentRange","Implements the Content-Range header, for serialization only"],["CreateMessageRequest","Creates a new message."],["CryptoHashConfig","Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`)."],["Dataset","A message representing a health dataset."],["DateShiftConfig","Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DeidentifyConfig","Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime."],["DeidentifyDatasetRequest","Redacts identifying information from the specified dataset."],["DicomConfig","Specifies the parameters needed for de-identification of DICOM stores."],["DicomStore","Represents a DICOM store."],["DummyNetworkStream",""],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:"],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["ExportDicomDataRequest","Exports data from the specified DICOM store. If a given resource (e.g., a DICOM object with the same SOPInstance UID) already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data will persist when the DICOM store from which it was exported is deleted."],["ExportResourcesRequest","Request to export resources."],["Expr","Represents an expression text. Example:"],["FhirConfig","Specifies how de-identification of a FHIR store should be handled."],["FhirStore","Represents a FHIR store."],["FieldMetadata","Specifies FHIR paths to match, and how to handle de-identification of matching fields."],["GoogleCloudHealthcareV1beta1DicomBigQueryDestination","The BigQuery table where the output should be written."],["GoogleCloudHealthcareV1beta1DicomGcsDestination","The Cloud Storage location where the output should be written, and the export configuration."],["GoogleCloudHealthcareV1beta1DicomGcsSource","Specifies the configuration for importing data from Cloud Storage."],["GoogleCloudHealthcareV1beta1FhirBigQueryDestination","The configuration for exporting to BigQuery."],["GoogleCloudHealthcareV1beta1FhirRestGcsDestination","The configuration for exporting to Cloud Storage."],["GoogleCloudHealthcareV1beta1FhirRestGcsSource","Specifies the configuration for importing data from Cloud Storage."],["Hl7V2Store","Represents an HL7v2 store."],["HttpBody","Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page."],["ImageConfig","Specifies how de-identification of image pixel should be handled."],["ImportDicomDataRequest","Imports data into the specified DICOM store. Returns an error if any of the files to import are not DICOM files. This API will accept duplicate DICOM instances, by simply ignoring the newly pushed instance (it will not overwrite)."],["ImportResourcesRequest","Request to import resources."],["InfoTypeTransformation","A transformation to apply to text that is identified as a specific info_type."],["IngestMessageRequest","Ingests a message into the specified HL7v2 store."],["IngestMessageResponse","Acknowledges that a message has been ingested into the specified HL7v2 store."],["JsonServerError","A utility type which can decode a server response that indicates error"],["ListDatasetsResponse","Lists the available datasets."],["ListDicomStoresResponse","Lists the DICOM stores in the given dataset."],["ListFhirStoresResponse","Lists the FHIR stores in the given dataset."],["ListHl7V2StoresResponse","Lists the HL7v2 stores in the given dataset."],["ListLocationsResponse","The response message for Locations.ListLocations."],["ListMessagesResponse","Lists the messages in the specified HL7v2 store."],["ListOperationsResponse","The response message for Operations.ListOperations."],["Location","A resource that represents Google Cloud Platform location."],["Message","A complete HL7v2 message. See http://www.hl7.org/implement/standards/index.cfm?ref=common for details on the standard."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["NotificationConfig","Specifies where notifications should be sent upon changes to a data store."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["ParsedData","The content of a HL7v2 message in a structured format."],["ParserConfig","The configuration for the parser. It determines how the server parses the messages."],["PatientId","A patient identifier and associated type."],["Policy","Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources."],["ProjectLocationDatasetCreateCall","Creates a new health dataset. Results are returned through the Operation interface which returns either an `Operation.response` which contains a Dataset or `Operation.error`. The metadata field type is OperationMetadata. A Google Cloud Platform project can contain up to 500 datasets across all regions."],["ProjectLocationDatasetDeidentifyCall","Creates a new dataset containing de-identified data from the source dataset. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifySummary. If errors occur, details field type is DeidentifyErrorDetails."],["ProjectLocationDatasetDeleteCall","Deletes the specified health dataset and all data contained in the dataset. Deleting a dataset does not affect the sources from which the dataset was imported (if any)."],["ProjectLocationDatasetDicomStoreCreateCall","Creates a new DICOM store within the parent dataset."],["ProjectLocationDatasetDicomStoreDeleteCall","Deletes the specified DICOM store and removes all images that are contained within it."],["ProjectLocationDatasetDicomStoreExportCall","Exports data to the specified destination by copying it from the DICOM store. The metadata field type is OperationMetadata."],["ProjectLocationDatasetDicomStoreGetCall","Gets the specified DICOM store."],["ProjectLocationDatasetDicomStoreGetIamPolicyCall","Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set."],["ProjectLocationDatasetDicomStoreImportCall","Imports data into the DICOM store by copying it from the specified source. For errors, the Operation will be populated with error details (in the form of ImportDicomDataErrorDetails in error.details), which will hold finer-grained error information. The metadata field type is OperationMetadata."],["ProjectLocationDatasetDicomStoreListCall","Lists the DICOM stores in the given dataset."],["ProjectLocationDatasetDicomStorePatchCall","Updates the specified DICOM store."],["ProjectLocationDatasetDicomStoreSearchForInstanceCall","SearchForInstances returns a list of matching instances. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6."],["ProjectLocationDatasetDicomStoreSearchForSeryCall","SearchForSeries returns a list of matching series. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6."],["ProjectLocationDatasetDicomStoreSearchForStudyCall","SearchForStudies returns a list of matching studies. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6."],["ProjectLocationDatasetDicomStoreSetIamPolicyCall","Sets the access control policy on the specified resource. Replaces any existing policy."],["ProjectLocationDatasetDicomStoreStoreInstanceCall","StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5."],["ProjectLocationDatasetDicomStoreStudyDeleteCall","DeleteStudy deletes all instances within the given study. Delete requests are equivalent to the GET requests specified in the WADO-RS standard."],["ProjectLocationDatasetDicomStoreStudyRetrieveMetadataCall","RetrieveStudyMetadata returns instance associated with the given study presented as metadata with the bulk data removed. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4."],["ProjectLocationDatasetDicomStoreStudyRetrieveStudyCall","RetrieveStudy returns all instances within the given study. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4."],["ProjectLocationDatasetDicomStoreStudySearchForInstanceCall","SearchForInstances returns a list of matching instances. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6."],["ProjectLocationDatasetDicomStoreStudySearchForSeryCall","SearchForSeries returns a list of matching series. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6."],["ProjectLocationDatasetDicomStoreStudySeryDeleteCall","DeleteSeries deletes all instances within the given study and series. Delete requests are equivalent to the GET requests specified in the WADO-RS standard."],["ProjectLocationDatasetDicomStoreStudySeryInstanceDeleteCall","DeleteInstance deletes an instance associated with the given study, series, and SOP Instance UID. Delete requests are equivalent to the GET requests specified in the WADO-RS standard."],["ProjectLocationDatasetDicomStoreStudySeryInstanceFrameRetrieveFrameCall","RetrieveFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4."],["ProjectLocationDatasetDicomStoreStudySeryInstanceFrameRetrieveRenderedCall","RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4."],["ProjectLocationDatasetDicomStoreStudySeryInstanceRetrieveInstanceCall","RetrieveInstance returns instance associated with the given study, series, and SOP Instance UID. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4."],["ProjectLocationDatasetDicomStoreStudySeryInstanceRetrieveMetadataCall","RetrieveInstanceMetadata returns instance associated with the given study, series, and SOP Instance UID presented as metadata with the bulk data removed. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4."],["ProjectLocationDatasetDicomStoreStudySeryInstanceRetrieveRenderedCall","RetrieveRenderedInstance returns instance associated with the given study, series, and SOP Instance UID in an acceptable Rendered Media Type. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4."],["ProjectLocationDatasetDicomStoreStudySeryRetrieveMetadataCall","RetrieveSeriesMetadata returns instance associated with the given study and series, presented as metadata with the bulk data removed. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4."],["ProjectLocationDatasetDicomStoreStudySeryRetrieveSeryCall","RetrieveSeries returns all instances within the given study and series. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4."],["ProjectLocationDatasetDicomStoreStudySerySearchForInstanceCall","SearchForInstances returns a list of matching instances. See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.6."],["ProjectLocationDatasetDicomStoreStudyStoreInstanceCall","StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5."],["ProjectLocationDatasetDicomStoreTestIamPermissionCall","Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error."],["ProjectLocationDatasetFhirStoreCreateCall","Creates a new FHIR store within the parent dataset."],["ProjectLocationDatasetFhirStoreDeleteCall","Deletes the specified FHIR store and removes all resources within it."],["ProjectLocationDatasetFhirStoreExportCall","Export resources from the FHIR store to the specified destination."],["ProjectLocationDatasetFhirStoreFhirCapabilityCall","Gets the FHIR capability statement for the store, which contains a description of functionality supported by the server."],["ProjectLocationDatasetFhirStoreFhirConditionalDeleteCall","Deletes FHIR resources that match a search query."],["ProjectLocationDatasetFhirStoreFhirConditionalPatchCall","If a resource is found based on the search criteria specified in the query parameters, updates part of that resource by applying the operations specified in a JSON Patch document."],["ProjectLocationDatasetFhirStoreFhirConditionalUpdateCall","If a resource is found based on the search criteria specified in the query parameters, updates the entire contents of that resource."],["ProjectLocationDatasetFhirStoreFhirCreateCall","Creates a FHIR resource."],["ProjectLocationDatasetFhirStoreFhirDeleteCall","Deletes a FHIR resource."],["ProjectLocationDatasetFhirStoreFhirExecuteBundleCall","Executes all the requests in the given Bundle."],["ProjectLocationDatasetFhirStoreFhirHistoryCall","Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store."],["ProjectLocationDatasetFhirStoreFhirObservationLastnCall","Retrieves the N most recent `Observation` resources for a subject matching search criteria specified as query parameters, grouped by `Observation.code`, sorted from most recent to oldest."],["ProjectLocationDatasetFhirStoreFhirPatchCall","Updates part of an existing resource by applying the operations specified in a JSON Patch document."],["ProjectLocationDatasetFhirStoreFhirPatientEverythingCall","Retrieves all the resources in the patient compartment for a `Patient` resource."],["ProjectLocationDatasetFhirStoreFhirReadCall","Gets the contents of a FHIR resource."],["ProjectLocationDatasetFhirStoreFhirResourcePurgeCall","Deletes all the historical versions of a resource (excluding the current version) from the FHIR store. To remove all versions of a resource, first delete the current version and then call this method."],["ProjectLocationDatasetFhirStoreFhirSearchCall","Searches for resources in the given FHIR store according to criteria specified as query parameters."],["ProjectLocationDatasetFhirStoreFhirUpdateCall","Updates the entire contents of a resource."],["ProjectLocationDatasetFhirStoreFhirVreadCall","Gets the contents of a version (current or historical) of a FHIR resource by version ID."],["ProjectLocationDatasetFhirStoreGetCall","Gets the configuration of the specified FHIR store."],["ProjectLocationDatasetFhirStoreGetIamPolicyCall","Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set."],["ProjectLocationDatasetFhirStoreImportCall","Import resources to the FHIR store by loading data from the specified sources. Each resource must have a client-supplied ID, which is retained by the server."],["ProjectLocationDatasetFhirStoreListCall","Lists the FHIR stores in the given dataset."],["ProjectLocationDatasetFhirStorePatchCall","Updates the configuration of the specified FHIR store."],["ProjectLocationDatasetFhirStoreSetIamPolicyCall","Sets the access control policy on the specified resource. Replaces any existing policy."],["ProjectLocationDatasetFhirStoreTestIamPermissionCall","Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error."],["ProjectLocationDatasetGetCall","Gets any metadata associated with a dataset."],["ProjectLocationDatasetGetIamPolicyCall","Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set."],["ProjectLocationDatasetHl7V2StoreCreateCall","Creates a new HL7v2 store within the parent dataset."],["ProjectLocationDatasetHl7V2StoreDeleteCall","Deletes the specified HL7v2 store and removes all messages that are contained within it."],["ProjectLocationDatasetHl7V2StoreGetCall","Gets the specified HL7v2 store."],["ProjectLocationDatasetHl7V2StoreGetIamPolicyCall","Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set."],["ProjectLocationDatasetHl7V2StoreListCall","Lists the HL7v2 stores in the given dataset."],["ProjectLocationDatasetHl7V2StoreMessageCreateCall","Creates a message and sends a notification to the Cloud Pub/Sub topic. If configured, the MLLP adapter listens to messages created by this method and sends those back to the hospital. A successful response indicates the message has been persisted to storage and a Cloud Pub/Sub notification has been sent. Sending to the hospital by the MLLP adapter happens asynchronously."],["ProjectLocationDatasetHl7V2StoreMessageDeleteCall","Deletes an HL7v2 message."],["ProjectLocationDatasetHl7V2StoreMessageGetCall","Gets an HL7v2 message."],["ProjectLocationDatasetHl7V2StoreMessageIngestCall","Ingests a new HL7v2 message from the hospital and sends a notification to the Cloud Pub/Sub topic. Return is an HL7v2 ACK message if the message was successfully stored. Otherwise an error is returned.  If an identical HL7v2 message is created twice only one resource is created on the server and no error is reported."],["ProjectLocationDatasetHl7V2StoreMessageListCall","Lists all the messages in the given HL7v2 store with support for filtering."],["ProjectLocationDatasetHl7V2StoreMessagePatchCall","Update the message."],["ProjectLocationDatasetHl7V2StorePatchCall","Updates the HL7v2 store."],["ProjectLocationDatasetHl7V2StoreSetIamPolicyCall","Sets the access control policy on the specified resource. Replaces any existing policy."],["ProjectLocationDatasetHl7V2StoreTestIamPermissionCall","Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error."],["ProjectLocationDatasetListCall","Lists the health datasets in the current project."],["ProjectLocationDatasetOperationGetCall","Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service."],["ProjectLocationDatasetOperationListCall","Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`."],["ProjectLocationDatasetPatchCall","Updates dataset metadata."],["ProjectLocationDatasetSetIamPolicyCall","Sets the access control policy on the specified resource. Replaces any existing policy."],["ProjectLocationDatasetTestIamPermissionCall","Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error."],["ProjectLocationGetCall","Gets information about a location."],["ProjectLocationListCall","Lists information about the supported locations for this service."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `CloudHealthcare` hub."],["RangeResponseHeader",""],["RedactConfig","Define how to redact sensitive values. Default behaviour is erase, e.g. \"My name is Jake.\" becomes \"My name is .\""],["ReplaceWithInfoTypeConfig","When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, \"My name is Jake\" becomes \"My name is [PERSON_NAME].\" The TRANSFORM action is equivalent to redacting."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["SchemaConfig","Configuration for the FHIR BigQuery schema. Determines how the server generates the schema."],["SearchResourcesRequest","Request to search the resources in the specified FHIR store."],["Segment","A segment in a structured format."],["ServerError",""],["ServerMessage",""],["SetIamPolicyRequest","Request message for `SetIamPolicy` method."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details."],["TagFilterList","List of tags to be filtered."],["TestIamPermissionsRequest","Request message for `TestIamPermissions` method."],["TestIamPermissionsResponse","Response message for `TestIamPermissions` method."],["TextConfig","There is no detailed description."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});