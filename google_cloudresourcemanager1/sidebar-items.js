initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Ancestor","Identifying information for a single ancestor of a project."],["AuditConfig","Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs."],["AuditLogConfig","Provides the configuration for logging a type of permissions. Example:"],["Binding","Associates `members` with a `role`."],["BooleanConstraint","A `Constraint` that is either enforced or not."],["BooleanPolicy","Used in `policy_type` to specify how `boolean_policy` will behave at this resource."],["Chunk",""],["ClearOrgPolicyRequest","The request sent to the ClearOrgPolicy method."],["CloudResourceManager","Central instance to access all CloudResourceManager related resource activities"],["Constraint","A `Constraint` describes a way in which a resource's configuration can be restricted. For example, it controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy adminstrator to fit the needs of the organzation by setting Policies for `Constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about Policies."],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DummyNetworkStream",""],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:"],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["Expr","Represents an expression text. Example:"],["FolderClearOrgPolicyCall","Clears a `Policy` from a resource."],["FolderGetEffectiveOrgPolicyCall","Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded."],["FolderGetOrgPolicyCall","Gets a `Policy` on a resource."],["FolderListAvailableOrgPolicyConstraintCall","Lists `Constraints` that could be applied on the specified resource."],["FolderListOrgPolicyCall","Lists all the `Policies` set for a particular resource."],["FolderMethods","A builder providing access to all methods supported on folder resources. It is not used directly, but through the `CloudResourceManager` hub."],["FolderSetOrgPolicyCall","Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist."],["GetAncestryRequest","The request sent to the GetAncestry method."],["GetAncestryResponse","Response from the GetAncestry method."],["GetEffectiveOrgPolicyRequest","The request sent to the GetEffectiveOrgPolicy method."],["GetIamPolicyRequest","Request message for `GetIamPolicy` method."],["GetOrgPolicyRequest","The request sent to the GetOrgPolicy method."],["GetPolicyOptions","Encapsulates settings provided to GetIamPolicy."],["JsonServerError","A utility type which can decode a server response that indicates error"],["Lien","A Lien represents an encumbrance on the actions that can be performed on a resource."],["LienCreateCall","Create a Lien which applies to the resource denoted by the `parent` field."],["LienDeleteCall","Delete a Lien by `name`."],["LienGetCall","Retrieve a Lien by `name`."],["LienListCall","List all Liens applied to the `parent` resource."],["LienMethods","A builder providing access to all methods supported on lien resources. It is not used directly, but through the `CloudResourceManager` hub."],["ListAvailableOrgPolicyConstraintsRequest","The request sent to the [ListAvailableOrgPolicyConstraints] google.cloud.OrgPolicy.v1.ListAvailableOrgPolicyConstraints] method."],["ListAvailableOrgPolicyConstraintsResponse","The response returned from the ListAvailableOrgPolicyConstraints method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set)."],["ListConstraint","A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`."],["ListLiensResponse","The response message for Liens.ListLiens."],["ListOrgPoliciesRequest","The request sent to the ListOrgPolicies method."],["ListOrgPoliciesResponse","The response returned from the ListOrgPolicies method. It will be empty if no `Policies` are set on the resource."],["ListPolicy","Used in `policy_type` to specify how `list_policy` behaves at this resource."],["ListProjectsResponse","A page of the response received from the ListProjects method."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["Operation","This resource represents a long-running operation that is the result of a network API call."],["OperationGetCall","Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service."],["OperationMethods","A builder providing access to all methods supported on operation resources. It is not used directly, but through the `CloudResourceManager` hub."],["OrgPolicy","Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources."],["Organization","The root node in the resource hierarchy to which a particular entity's (e.g., company) resources belong."],["OrganizationClearOrgPolicyCall","Clears a `Policy` from a resource."],["OrganizationGetCall","Fetches an Organization resource identified by the specified resource name."],["OrganizationGetEffectiveOrgPolicyCall","Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded."],["OrganizationGetIamPolicyCall","Gets the access control policy for an Organization resource. May be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, e.g. \"organizations/123\"."],["OrganizationGetOrgPolicyCall","Gets a `Policy` on a resource."],["OrganizationListAvailableOrgPolicyConstraintCall","Lists `Constraints` that could be applied on the specified resource."],["OrganizationListOrgPolicyCall","Lists all the `Policies` set for a particular resource."],["OrganizationMethods","A builder providing access to all methods supported on organization resources. It is not used directly, but through the `CloudResourceManager` hub."],["OrganizationOwner","The entity that owns an Organization. The lifetime of the Organization and all of its descendants are bound to the `OrganizationOwner`. If the `OrganizationOwner` is deleted, the Organization and all its descendants will be deleted."],["OrganizationSearchCall","Searches Organization resources that are visible to the user and satisfy the specified filter. This method returns Organizations in an unspecified order. New Organizations do not necessarily appear at the end of the results."],["OrganizationSetIamPolicyCall","Sets the access control policy on an Organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, e.g. \"organizations/123\"."],["OrganizationSetOrgPolicyCall","Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist."],["OrganizationTestIamPermissionCall","Returns permissions that a caller has on the specified Organization. The `resource` field should be the organization's resource name, e.g. \"organizations/123\"."],["Policy","Defines an Identity and Access Management (IAM) policy. It is used to specify access control policies for Cloud Platform resources."],["Project","A Project is a high-level Google Cloud Platform entity.  It is a container for ACLs, APIs, App Engine Apps, VMs, and other Google Cloud Platform resources."],["ProjectClearOrgPolicyCall","Clears a `Policy` from a resource."],["ProjectCreateCall","Request that a new Project be created. The result is an Operation which can be used to track the creation process. It is automatically deleted after a few hours, so there is no need to call DeleteOperation."],["ProjectDeleteCall","Marks the Project identified by the specified `project_id` (for example, `my-project-123`) for deletion. This method will only affect the Project if it has a lifecycle state of ACTIVE."],["ProjectGetAncestryCall","Gets a list of ancestors in the resource hierarchy for the Project identified by the specified `project_id` (for example, `my-project-123`)."],["ProjectGetCall","Retrieves the Project identified by the specified `project_id` (for example, `my-project-123`)."],["ProjectGetEffectiveOrgPolicyCall","Gets the effective `Policy` on a resource. This is the result of merging `Policies` in the resource hierarchy. The returned `Policy` will not have an `etag`set because it is a computed `Policy` across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix will not be expanded."],["ProjectGetIamPolicyCall","Returns the IAM access control policy for the specified Project. Permission is denied if the policy or the resource does not exist."],["ProjectGetOrgPolicyCall","Gets a `Policy` on a resource."],["ProjectListAvailableOrgPolicyConstraintCall","Lists `Constraints` that could be applied on the specified resource."],["ProjectListCall","Lists Projects that the caller has the `resourcemanager.projects.get` permission on and satisfy the specified filter."],["ProjectListOrgPolicyCall","Lists all the `Policies` set for a particular resource."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `CloudResourceManager` hub."],["ProjectSetIamPolicyCall","Sets the IAM access control policy for the specified Project. Overwrites any existing policy."],["ProjectSetOrgPolicyCall","Updates the specified `Policy` on the resource. Creates a new `Policy` for that `Constraint` on the resource if one does not exist."],["ProjectTestIamPermissionCall","Returns permissions that a caller has on the specified Project."],["ProjectUndeleteCall","Restores the Project identified by the specified `project_id` (for example, `my-project-123`). You can only use this method for a Project that has a lifecycle state of DELETE_REQUESTED. After deletion starts, the Project cannot be restored."],["ProjectUpdateCall","Updates the attributes of the Project identified by the specified `project_id` (for example, `my-project-123`)."],["RangeResponseHeader",""],["ResourceId","A container to reference an id for any resource type. A `resource` in Google Cloud Platform is a generic term for something you (a developer) may want to interact with through one of our API's. Some examples are an App Engine app, a Compute Engine instance, a Cloud SQL database, and so on."],["RestoreDefault","Ignores policies set above this resource and restores the `constraint_default` enforcement behavior of the specific `Constraint` at this resource."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["SearchOrganizationsRequest","The request sent to the `SearchOrganizations` method."],["SearchOrganizationsResponse","The response returned from the `SearchOrganizations` method."],["ServerError",""],["ServerMessage",""],["SetIamPolicyRequest","Request message for `SetIamPolicy` method."],["SetOrgPolicyRequest","The request sent to the SetOrgPolicyRequest method."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details."],["TestIamPermissionsRequest","Request message for `TestIamPermissions` method."],["TestIamPermissionsResponse","Response message for `TestIamPermissions` method."],["UndeleteProjectRequest","The request sent to the UndeleteProject method."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});