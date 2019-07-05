initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Acl","There is no detailed description."],["Activity","There is no detailed description."],["ActivityActor","The person who performed this activity."],["ActivityActorClientSpecificActorInfo","Actor info specific to particular clients."],["ActivityActorClientSpecificActorInfoYoutubeActorInfo","Actor info specific to YouTube clients."],["ActivityActorImage","The image representation of the actor."],["ActivityActorName","An object representation of the individual components of name."],["ActivityActorVerification","Verification status of actor."],["ActivityFeed","There is no detailed description."],["ActivityGetCall","Shut down. See https://developers.google.com/+/api-shutdown for more details."],["ActivityListCall","Shut down. See https://developers.google.com/+/api-shutdown for more details."],["ActivityMethods","A builder providing access to all methods supported on activity resources. It is not used directly, but through the `PlusDomains` hub."],["ActivityObject","The object of this activity."],["ActivityObjectActor","If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor."],["ActivityObjectActorClientSpecificActorInfo","Actor info specific to particular clients."],["ActivityObjectActorClientSpecificActorInfoYoutubeActorInfo","Actor info specific to YouTube clients."],["ActivityObjectActorImage","The image representation of the original actor."],["ActivityObjectActorVerification","Verification status of actor."],["ActivityObjectAttachments","The media objects attached to this activity."],["ActivityObjectAttachmentsEmbed","If the attachment is a video, the embeddable link."],["ActivityObjectAttachmentsFullImage","The full image URL for photo attachments."],["ActivityObjectAttachmentsImage","The preview image for photos or videos."],["ActivityObjectAttachmentsPreviewThumbnails","When previewing, these are the optional thumbnails for the post. When posting an article, choose one by setting the attachment.image.url property. If you don't choose one, one will be chosen for you."],["ActivityObjectAttachmentsThumbnails","If the attachment is an album, this property is a list of potential additional thumbnails from the album."],["ActivityObjectAttachmentsThumbnailsImage","Image resource."],["ActivityObjectPlusoners","People who +1'd this activity."],["ActivityObjectReplies","Comments in reply to this activity."],["ActivityObjectResharers","People who reshared this activity."],["ActivityObjectStatusForViewer","Status of the activity as seen by the viewer."],["ActivityProvider","The service provider that initially published this activity."],["Audience","There is no detailed description."],["AudienceListCall","Shut down. See https://developers.google.com/+/api-shutdown for more details."],["AudienceMethods","A builder providing access to all methods supported on audience resources. It is not used directly, but through the `PlusDomains` hub."],["AudiencesFeed","There is no detailed description."],["Chunk",""],["Circle","There is no detailed description."],["CircleFeed","There is no detailed description."],["CircleListCall","Shut down. See https://developers.google.com/+/api-shutdown for more details."],["CircleMethods","A builder providing access to all methods supported on circle resources. It is not used directly, but through the `PlusDomains` hub."],["CirclePeople","The people in this circle."],["Comment","There is no detailed description."],["CommentActor","The person who posted this comment."],["CommentActorClientSpecificActorInfo","Actor info specific to particular clients."],["CommentActorClientSpecificActorInfoYoutubeActorInfo","Actor info specific to YouTube clients."],["CommentActorImage","The image representation of this actor."],["CommentActorVerification","Verification status of actor."],["CommentFeed","There is no detailed description."],["CommentGetCall","Shut down. See https://developers.google.com/+/api-shutdown for more details."],["CommentInReplyTo","The activity this comment replied to."],["CommentListCall","Shut down. See https://developers.google.com/+/api-shutdown for more details."],["CommentMethods","A builder providing access to all methods supported on comment resources. It is not used directly, but through the `PlusDomains` hub."],["CommentObject","The object of this comment."],["CommentPlusoners","People who +1'd this comment."],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DummyNetworkStream",""],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["JsonServerError","A utility type which can decode a server response that indicates error"],["Media","There is no detailed description."],["MediaAuthor","The person who uploaded this media."],["MediaAuthorImage","The author's Google profile image."],["MediaExif","Exif information of the media item."],["MediaInsertCall","Shut down. See https://developers.google.com/+/api-shutdown for more details."],["MediaMethods","A builder providing access to all methods supported on media resources. It is not used directly, but through the `PlusDomains` hub."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["PeopleFeed","There is no detailed description."],["PeopleGetCall","Get a person's profile."],["PeopleListByActivityCall","Shut down. See https://developers.google.com/+/api-shutdown for more details."],["PeopleListCall","List all of the people in the specified collection."],["PeopleMethods","A builder providing access to all methods supported on people resources. It is not used directly, but through the `PlusDomains` hub."],["Person","There is no detailed description."],["PersonCover","The cover photo content."],["PersonCoverCoverInfo","Extra information about the cover photo."],["PersonCoverCoverPhoto","The person's primary cover image."],["PersonEmails","A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address."],["PersonImage","The representation of the person's profile photo."],["PersonName","An object representation of the individual components of a person's name."],["PersonOrganizations","A list of current or past organizations with which this person is associated."],["PersonPlacesLived","A list of places where this person has lived."],["PersonUrls","A list of URLs for this person."],["Place","There is no detailed description."],["PlaceAddress","The physical address of the place."],["PlacePosition","The position of the place."],["PlusDomains","Central instance to access all PlusDomains related resource activities"],["PlusDomainsAclentryResource","There is no detailed description."],["RangeResponseHeader",""],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["ServerError",""],["ServerMessage",""],["Videostream","There is no detailed description."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});