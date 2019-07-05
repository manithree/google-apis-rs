initSidebarItems({"enum":[["Error",""]],"fn":[["remove_json_null_values",""]],"struct":[["ActionParameter","List of string parameters to supply when the action method is invoked. For example, consider three snooze buttons: snooze now, snooze 1 day, snooze next week. You might use action method = snooze(), passing the snooze type and snooze time in the list of string parameters."],["ActionResponse","Parameters that a bot can use to configure how it's response is posted."],["Annotation","Annotations associated with the plain-text body of the message."],["Button","A button. Can be a text button or an image button."],["Card","A card is a UI element that can contain UI widgets such as texts, images."],["CardAction","A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser."],["CardHeader","There is no detailed description."],["Chunk",""],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DummyNetworkStream",""],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:"],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["FormAction","A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form."],["HangoutsChat","Central instance to access all HangoutsChat related resource activities"],["Image","An image that is specified by a URL and can have an onclick action."],["ImageButton","An image button with an onclick action."],["JsonServerError","A utility type which can decode a server response that indicates error"],["KeyValue","A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button."],["ListMembershipsResponse","There is no detailed description."],["ListSpacesResponse","There is no detailed description."],["Membership","Represents a membership relation in Hangouts Chat."],["Message","A message in Hangouts Chat."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["OnClick","An onclick action (e.g. open a link)."],["OpenLink","A link that opens a new window."],["RangeResponseHeader",""],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["Section","A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float)."],["ServerError",""],["ServerMessage",""],["Space","A room or DM in Hangouts Chat."],["SpaceGetCall","Returns a space."],["SpaceListCall","Lists spaces the caller is a member of."],["SpaceMemberGetCall","Returns a membership."],["SpaceMemberListCall","Lists human memberships in a space."],["SpaceMessageCreateCall","Creates a message."],["SpaceMessageDeleteCall","Deletes a message."],["SpaceMessageGetCall","Returns a message."],["SpaceMessageUpdateCall","Updates a message."],["SpaceMethods","A builder providing access to all methods supported on space resources. It is not used directly, but through the `HangoutsChat` hub."],["TextButton","A button with text and onclick action."],["TextParagraph","A paragraph of text. Formatted text supported."],["Thread","A thread in Hangouts Chat."],["User","A user in Hangouts Chat."],["UserMentionMetadata","Annotation metadata for user mentions (@)."],["WidgetMarkup","A widget is a UI element that presents texts, images, etc."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});