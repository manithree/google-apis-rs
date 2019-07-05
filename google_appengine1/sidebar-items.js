initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["ApiConfigHandler","Google Cloud Endpoints (https://cloud.google.com/appengine/docs/python/endpoints/) configuration for API handlers."],["ApiEndpointHandler","Uses Google Cloud Endpoints to handle requests."],["AppAuthorizedCertificateCreateCall","Uploads the specified SSL certificate."],["AppAuthorizedCertificateDeleteCall","Deletes the specified SSL certificate."],["AppAuthorizedCertificateGetCall","Gets the specified SSL certificate."],["AppAuthorizedCertificateListCall","Lists all SSL certificates the user is authorized to administer."],["AppAuthorizedCertificatePatchCall","Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated."],["AppAuthorizedDomainListCall","Lists all domains the user is authorized to administer."],["AppCreateCall","Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/)."],["AppDomainMappingCreateCall","Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains."],["AppDomainMappingDeleteCall","Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource."],["AppDomainMappingGetCall","Gets the specified domain mapping."],["AppDomainMappingListCall","Lists the domain mappings on an application."],["AppDomainMappingPatchCall","Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource."],["AppFirewallIngressRuleBatchUpdateCall","Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an \"allow all\" rule is explicitly added to the end of the list."],["AppFirewallIngressRuleCreateCall","Creates a firewall rule for the application."],["AppFirewallIngressRuleDeleteCall","Deletes the specified firewall rule."],["AppFirewallIngressRuleGetCall","Gets the specified firewall rule."],["AppFirewallIngressRuleListCall","Lists the firewall rules of an application."],["AppFirewallIngressRulePatchCall","Updates the specified firewall rule."],["AppGetCall","Gets information about an application."],["AppLocationGetCall","Gets information about a location."],["AppLocationListCall","Lists information about the supported locations for this service."],["AppMethods","A builder providing access to all methods supported on app resources. It is not used directly, but through the `Appengine` hub."],["AppOperationGetCall","Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service."],["AppOperationListCall","Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users//operations. To override the binding, API services can add a binding such as \"/v1/{name=users/}/operations\" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id."],["AppPatchCall","Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application."],["AppRepairCall","Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B\"name\"%3A\"projects%2F-%2FserviceAccounts%2Funique_id\"%2C\"resource\"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log."],["AppServiceDeleteCall","Deletes the specified service and all enclosed versions."],["AppServiceGetCall","Gets the current configuration of the specified service."],["AppServiceListCall","Lists all the services in the application."],["AppServicePatchCall","Updates the configuration of the specified service."],["AppServiceVersionCreateCall","Deploys code and resource files to a new version."],["AppServiceVersionDeleteCall","Deletes an existing Version resource."],["AppServiceVersionGetCall","Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource."],["AppServiceVersionInstanceDebugCall","Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in \"debug mode\", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment."],["AppServiceVersionInstanceDeleteCall","Stops a running instance."],["AppServiceVersionInstanceGetCall","Gets instance information."],["AppServiceVersionInstanceListCall","Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list)."],["AppServiceVersionListCall","Lists the versions of a service."],["AppServiceVersionPatchCall","Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)"],["Appengine","Central instance to access all Appengine related resource activities"],["Application","An Application resource contains the top-level configuration of an App Engine application."],["AuthorizedCertificate","An SSL certificate that a user has been authorized to administer. A user is authorized to administer any certificate that applies to one of their authorized domains."],["AuthorizedDomain","A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via Webmaster Central (https://www.google.com/webmasters/verification/home)."],["AutomaticScaling","Automatic scaling is based on request rate, response latencies, and other application metrics."],["BasicScaling","A service with basic scaling will create an instance when the application receives a request. The instance will be turned down when the app becomes idle. Basic scaling is ideal for work that is intermittent or driven by user activity."],["BatchUpdateIngressRulesRequest","Request message for Firewall.BatchUpdateIngressRules."],["BatchUpdateIngressRulesResponse","Response message for Firewall.UpdateAllIngressRules."],["CertificateRawData","An SSL certificate obtained from a certificate authority."],["Chunk",""],["CloudBuildOptions","Options for the build operations performed as a part of the version deployment. Only applicable for App Engine flexible environment when creating a version using source code directly."],["ContainerInfo","Docker image that is used to create a container and start a VM instance for the version that you deploy. Only applicable for instances running in the App Engine flexible environment."],["ContentRange","Implements the Content-Range header, for serialization only"],["CpuUtilization","Target scaling by CPU usage."],["DebugInstanceRequest","Request message for Instances.DebugInstance."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["Deployment","Code and application artifacts used to deploy a version to App Engine."],["DiskUtilization","Target scaling by disk usage. Only applicable in the App Engine flexible environment."],["DomainMapping","A domain serving an App Engine application."],["DummyNetworkStream",""],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo {   rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for Empty is empty JSON object {}."],["EndpointsApiService","Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a \"service\" resource in the Service Management API (https://cloud.google.com/service-management/overview)."],["Entrypoint","The entrypoint for the application."],["ErrorHandler","Custom static error page to be served when an error occurs."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["FeatureSettings","The feature specific settings to be used in the application. These define behaviors that are user configurable."],["FileInfo","Single source file that is part of the version to be deployed. Each source file that is deployed must be specified separately."],["FirewallRule","A single firewall rule that is evaluated against incoming traffic and provides an action to take on matched requests."],["HealthCheck","Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances. Only applicable for instances in App Engine flexible environment."],["IdentityAwareProxy","Identity-Aware Proxy"],["Instance","An Instance resource is the computing unit that App Engine uses to automatically scale an application."],["JsonServerError","A utility type which can decode a server response that indicates error"],["Library","Third-party Python runtime library that is required by the application."],["ListAuthorizedCertificatesResponse","Response message for AuthorizedCertificates.ListAuthorizedCertificates."],["ListAuthorizedDomainsResponse","Response message for AuthorizedDomains.ListAuthorizedDomains."],["ListDomainMappingsResponse","Response message for DomainMappings.ListDomainMappings."],["ListIngressRulesResponse","Response message for Firewall.ListIngressRules."],["ListInstancesResponse","Response message for Instances.ListInstances."],["ListLocationsResponse","The response message for Locations.ListLocations."],["ListOperationsResponse","The response message for Operations.ListOperations."],["ListServicesResponse","Response message for Services.ListServices."],["ListVersionsResponse","Response message for Versions.ListVersions."],["LivenessCheck","Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances."],["Location","A resource that represents Google Cloud Platform location."],["ManagedCertificate","A certificate managed by App Engine."],["ManualScaling","A service with manual scaling runs continuously, allowing you to perform complex initialization and rely on the state of its memory over time."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Network","Extra network settings. Only applicable in the App Engine flexible environment."],["NetworkUtilization","Target scaling by network usage. Only applicable in the App Engine flexible environment."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["RangeResponseHeader",""],["ReadinessCheck","Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation."],["RepairApplicationRequest","Request message for 'Applications.RepairApplication'."],["RequestUtilization","Target scaling by request utilization. Only applicable in the App Engine flexible environment."],["ResourceRecord","A DNS resource record."],["Resources","Machine resources for a version."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["ScriptHandler","Executes a script to handle the request that matches the URL pattern."],["ServerError",""],["ServerMessage",""],["Service","A Service resource is a logical component of an application that can share state and communicate in a secure fashion with other services. For example, an application that handles customer requests might include separate services to handle tasks such as backend data analysis or API requests from mobile devices. Each service has a collection of versions that define a specific set of code used to implement the functionality of that service."],["SslSettings","SSL configuration for a DomainMapping resource."],["StandardSchedulerSettings","Scheduler settings for standard environment."],["StaticFilesHandler","Files served directly to the user for a given URL, such as images, CSS stylesheets, or JavaScript source files. Static file handlers describe which files in the application directory are static files, and which URLs serve them."],["Status","The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors)."],["TrafficSplit","Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions."],["UrlDispatchRule","Rules to match an HTTP request and dispatch that request to a service."],["UrlMap","URL pattern and description of how the URL should be handled. App Engine can handle URLs by executing application code or by serving static files uploaded with the version, such as images, CSS, or JavaScript."],["Version","A Version resource is a specific set of source code and configuration files that are deployed into a service."],["Volume","Volumes mounted within the app container. Only applicable in the App Engine flexible environment."],["VpcAccessConnector","VPC access connector specification."],["XUploadContentType","The `X-Upload-Content-Type` header."],["ZipInfo","The zip file information for a zip deployment."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});