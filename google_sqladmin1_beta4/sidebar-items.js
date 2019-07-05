initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["AclEntry","An entry for an Access Control list."],["ApiWarning","An Admin API warning message."],["BackupConfiguration","Database instance backup configuration."],["BackupRun","A BackupRun resource."],["BackupRunDeleteCall","Deletes the backup taken by a backup run."],["BackupRunGetCall","Retrieves a resource containing information about a backup run."],["BackupRunInsertCall","Creates a new backup run on demand. This method is applicable only to Second Generation instances."],["BackupRunListCall","Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the backup initiation time."],["BackupRunMethods","A builder providing access to all methods supported on backupRun resources. It is not used directly, but through the `SQLAdmin` hub."],["BackupRunsListResponse","Backup run list results."],["BinLogCoordinates","Binary log coordinates."],["Chunk",""],["CloneContext","Database instance clone context."],["ContentRange","Implements the Content-Range header, for serialization only"],["Database","Represents a SQL database on the Cloud SQL instance."],["DatabaseDeleteCall","Deletes a database from a Cloud SQL instance."],["DatabaseFlags","Database flags for Cloud SQL instances."],["DatabaseGetCall","Retrieves a resource containing information about a database inside a Cloud SQL instance."],["DatabaseInsertCall","Inserts a resource containing information about a database inside a Cloud SQL instance."],["DatabaseInstance","A Cloud SQL instance resource."],["DatabaseInstanceFailoverReplica","The name and status of the failover replica. This property is applicable only to Second Generation instances."],["DatabaseListCall","Lists databases in the specified Cloud SQL instance."],["DatabaseMethods","A builder providing access to all methods supported on database resources. It is not used directly, but through the `SQLAdmin` hub."],["DatabasePatchCall","Updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics."],["DatabaseUpdateCall","Updates a resource containing information about a database inside a Cloud SQL instance."],["DatabasesListResponse","Database list response."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DemoteMasterConfiguration","Read-replica configuration for connecting to the on-premises master."],["DemoteMasterContext","Database instance demote master context."],["DemoteMasterMySqlReplicaConfiguration","Read-replica configuration specific to MySQL databases."],["DiskEncryptionConfiguration","Disk encryption configuration."],["DiskEncryptionStatus","Disk encryption status."],["DummyNetworkStream",""],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["ExportContext","Database instance export context."],["ExportContextCsvExportOptions","Options for exporting data as CSV."],["ExportContextSqlExportOptions","Options for exporting data as SQL statements."],["ExportContextSqlExportOptionsMysqlExportOptions","Options for exporting from MySQL."],["FailoverContext","Database instance failover context."],["Flag","A flag resource."],["FlagListCall","List all available database flags for Cloud SQL instances."],["FlagMethods","A builder providing access to all methods supported on flag resources. It is not used directly, but through the `SQLAdmin` hub."],["FlagsListResponse","Flags list response."],["ImportContext","Database instance import context."],["ImportContextCsvImportOptions","Options for importing data as CSV."],["InstanceAddServerCaCall","Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in."],["InstanceCloneCall","Creates a Cloud SQL instance as a clone of the source instance."],["InstanceDeleteCall","Deletes a Cloud SQL instance."],["InstanceDemoteMasterCall","Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server."],["InstanceExportCall","Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file."],["InstanceFailoverCall","Failover the instance to its failover replica instance."],["InstanceGetCall","Retrieves a resource containing information about a Cloud SQL instance."],["InstanceImportCall","Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage."],["InstanceInsertCall","Creates a new Cloud SQL instance."],["InstanceListCall","Lists instances under a given project in the alphabetical order of the instance name."],["InstanceListServerCaCall","Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out."],["InstanceMethods","A builder providing access to all methods supported on instance resources. It is not used directly, but through the `SQLAdmin` hub."],["InstancePatchCall","Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch.. This method supports patch semantics."],["InstancePromoteReplicaCall","Promotes the read replica instance to be a stand-alone Cloud SQL instance."],["InstanceResetSslConfigCall","Deletes all client certificates and generates a new server SSL certificate for the instance."],["InstanceRestartCall","Restarts a Cloud SQL instance."],["InstanceRestoreBackupCall","Restores a backup of a Cloud SQL instance."],["InstanceRotateServerCaCall","Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method."],["InstanceStartReplicaCall","Starts the replication in the read replica instance."],["InstanceStopReplicaCall","Stops the replication in the read replica instance."],["InstanceTruncateLogCall","Truncate MySQL general and slow query log tables"],["InstanceUpdateCall","Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to retain. For partial updates, use patch."],["InstancesCloneRequest","Database instance clone request."],["InstancesDemoteMasterRequest","Database demote master request."],["InstancesExportRequest","Database instance export request."],["InstancesFailoverRequest","Instance failover request."],["InstancesImportRequest","Database instance import request."],["InstancesListResponse","Database instances list response."],["InstancesListServerCasResponse","Instances ListServerCas response."],["InstancesRestoreBackupRequest","Database instance restore backup request."],["InstancesRotateServerCaRequest","Rotate Server CA request."],["InstancesTruncateLogRequest","Instance truncate log request."],["IpConfiguration","IP Management configuration."],["IpMapping","Database instance IP Mapping."],["JsonServerError","A utility type which can decode a server response that indicates error"],["LocationPreference","Preferred location. This specifies where a Cloud SQL instance should preferably be located, either in a specific Compute Engine zone, or co-located with an App Engine application. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified."],["MaintenanceWindow","Maintenance window. This specifies when a v2 Cloud SQL instance should preferably be restarted for system maintenance purposes."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["MySqlReplicaConfiguration","Read-replica configuration specific to MySQL databases."],["OnPremisesConfiguration","On-premises instance configuration."],["Operation","An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource."],["OperationError","Database instance operation error."],["OperationErrors","Database instance operation errors list wrapper."],["OperationGetCall","Retrieves an instance operation that has been performed on an instance."],["OperationListCall","Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time."],["OperationMethods","A builder providing access to all methods supported on operation resources. It is not used directly, but through the `SQLAdmin` hub."],["OperationsListResponse","Database instance list operations response."],["RangeResponseHeader",""],["ReplicaConfiguration","Read-replica configuration for connecting to the master."],["RestoreBackupContext","Database instance restore from backup context."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["RotateServerCaContext","Instance rotate server CA context."],["SQLAdmin","Central instance to access all SQLAdmin related resource activities"],["ServerError",""],["ServerMessage",""],["Settings","Database instance settings."],["SslCert","SslCerts Resource"],["SslCertCreateEphemeralCall","Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database."],["SslCertDeleteCall","Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted."],["SslCertDetail","SslCertDetail."],["SslCertGetCall","Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation."],["SslCertInsertCall","Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted."],["SslCertListCall","Lists all of the current SSL certificates for the instance."],["SslCertMethods","A builder providing access to all methods supported on sslCert resources. It is not used directly, but through the `SQLAdmin` hub."],["SslCertsCreateEphemeralRequest","SslCerts create ephemeral certificate request."],["SslCertsInsertRequest","SslCerts insert request."],["SslCertsInsertResponse","SslCert insert response."],["SslCertsListResponse","SslCerts list response."],["Tier","A Google Cloud SQL service tier resource."],["TierListCall","Lists all available machine types (tiers) for Cloud SQL, for example, db-n1-standard-1. For related information, see Pricing."],["TierMethods","A builder providing access to all methods supported on tier resources. It is not used directly, but through the `SQLAdmin` hub."],["TiersListResponse","Tiers list response."],["TruncateLogContext","Database Instance truncate log context."],["User","A Cloud SQL user resource."],["UserDeleteCall","Deletes a user from a Cloud SQL instance."],["UserInsertCall","Creates a new user in a Cloud SQL instance."],["UserListCall","Lists users in the specified Cloud SQL instance."],["UserMethods","A builder providing access to all methods supported on user resources. It is not used directly, but through the `SQLAdmin` hub."],["UserUpdateCall","Updates an existing user in a Cloud SQL instance."],["UsersListResponse","User list response."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});