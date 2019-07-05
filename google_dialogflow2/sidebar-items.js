initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["Chunk",""],["ContentRange","Implements the Content-Range header, for serialization only"],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["Dialogflow","Central instance to access all Dialogflow related resource activities"],["DummyNetworkStream",""],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["GoogleCloudDialogflowV2Agent","Represents a conversational agent."],["GoogleCloudDialogflowV2BatchCreateEntitiesRequest","The request message for EntityTypes.BatchCreateEntities."],["GoogleCloudDialogflowV2BatchDeleteEntitiesRequest","The request message for EntityTypes.BatchDeleteEntities."],["GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest","The request message for EntityTypes.BatchDeleteEntityTypes."],["GoogleCloudDialogflowV2BatchDeleteIntentsRequest","The request message for Intents.BatchDeleteIntents."],["GoogleCloudDialogflowV2BatchUpdateEntitiesRequest","The request message for EntityTypes.BatchUpdateEntities."],["GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest","The request message for EntityTypes.BatchUpdateEntityTypes."],["GoogleCloudDialogflowV2BatchUpdateIntentsRequest","The request message for Intents.BatchUpdateIntents."],["GoogleCloudDialogflowV2Context","Represents a context."],["GoogleCloudDialogflowV2DetectIntentRequest","The request to detect user's intent."],["GoogleCloudDialogflowV2DetectIntentResponse","The message returned from the DetectIntent method."],["GoogleCloudDialogflowV2EntityType","Represents an entity type. Entity types serve as a tool for extracting parameter values from natural language queries."],["GoogleCloudDialogflowV2EntityTypeBatch","This message is a wrapper around a collection of entity types."],["GoogleCloudDialogflowV2EntityTypeEntity","An entity entry for an associated entity type."],["GoogleCloudDialogflowV2EventInput","Events allow for matching intents by event name instead of the natural language input. For instance, input `<event: { name: \"welcome_event\", parameters: { name: \"Sam\" } }>` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `\"Hello #welcome_event.name! What can I do for you today?\"`."],["GoogleCloudDialogflowV2ExportAgentRequest","The request message for Agents.ExportAgent."],["GoogleCloudDialogflowV2ImportAgentRequest","The request message for Agents.ImportAgent."],["GoogleCloudDialogflowV2InputAudioConfig","Instructs the speech recognizer how to process the audio content."],["GoogleCloudDialogflowV2Intent","Represents an intent. Intents convert a number of user expressions or patterns into an action. An action is an extraction of a user command or sentence semantics."],["GoogleCloudDialogflowV2IntentBatch","This message is a wrapper around a collection of intents."],["GoogleCloudDialogflowV2IntentFollowupIntentInfo","Represents a single followup intent in the chain."],["GoogleCloudDialogflowV2IntentMessage","Corresponds to the `Response` field in the Dialogflow console."],["GoogleCloudDialogflowV2IntentMessageBasicCard","The basic card message. Useful for displaying information."],["GoogleCloudDialogflowV2IntentMessageBasicCardButton","The button object that appears at the bottom of a card."],["GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction","Opens the given URI."],["GoogleCloudDialogflowV2IntentMessageCard","The card response message."],["GoogleCloudDialogflowV2IntentMessageCardButton","Optional. Contains information about a button."],["GoogleCloudDialogflowV2IntentMessageCarouselSelect","The card for presenting a carousel of options to select from."],["GoogleCloudDialogflowV2IntentMessageCarouselSelectItem","An item in the carousel."],["GoogleCloudDialogflowV2IntentMessageImage","The image response message."],["GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion","The suggestion chip message that allows the user to jump out to the app or website associated with this agent."],["GoogleCloudDialogflowV2IntentMessageListSelect","The card for presenting a list of options to select from."],["GoogleCloudDialogflowV2IntentMessageListSelectItem","An item in the list."],["GoogleCloudDialogflowV2IntentMessageQuickReplies","The quick replies response message."],["GoogleCloudDialogflowV2IntentMessageSelectItemInfo","Additional info about the select item for when it is triggered in a dialog."],["GoogleCloudDialogflowV2IntentMessageSimpleResponse","The simple response message containing speech or text."],["GoogleCloudDialogflowV2IntentMessageSimpleResponses","The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`."],["GoogleCloudDialogflowV2IntentMessageSuggestion","The suggestion chip message that the user can tap to quickly post a reply to the conversation."],["GoogleCloudDialogflowV2IntentMessageSuggestions","The collection of suggestions."],["GoogleCloudDialogflowV2IntentMessageText","The text response message."],["GoogleCloudDialogflowV2IntentParameter","Represents intent parameters."],["GoogleCloudDialogflowV2IntentTrainingPhrase","Represents an example that the agent is trained on."],["GoogleCloudDialogflowV2IntentTrainingPhrasePart","Represents a part of a training phrase."],["GoogleCloudDialogflowV2ListContextsResponse","The response message for Contexts.ListContexts."],["GoogleCloudDialogflowV2ListEntityTypesResponse","The response message for EntityTypes.ListEntityTypes."],["GoogleCloudDialogflowV2ListIntentsResponse","The response message for Intents.ListIntents."],["GoogleCloudDialogflowV2ListSessionEntityTypesResponse","The response message for SessionEntityTypes.ListSessionEntityTypes."],["GoogleCloudDialogflowV2OutputAudioConfig","Instructs the speech synthesizer on how to generate the output audio content."],["GoogleCloudDialogflowV2QueryInput","Represents the query input. It can contain either:"],["GoogleCloudDialogflowV2QueryParameters","Represents the parameters of the conversational query."],["GoogleCloudDialogflowV2QueryResult","Represents the result of conversational query or event processing."],["GoogleCloudDialogflowV2RestoreAgentRequest","The request message for Agents.RestoreAgent."],["GoogleCloudDialogflowV2SearchAgentsResponse","The response message for Agents.SearchAgents."],["GoogleCloudDialogflowV2Sentiment","The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text."],["GoogleCloudDialogflowV2SentimentAnalysisRequestConfig","Configures the types of sentiment analysis to perform."],["GoogleCloudDialogflowV2SentimentAnalysisResult","The result of sentiment analysis as configured by `sentiment_analysis_request_config`."],["GoogleCloudDialogflowV2SessionEntityType","Represents a session entity type."],["GoogleCloudDialogflowV2SynthesizeSpeechConfig","Configuration of how speech should be synthesized."],["GoogleCloudDialogflowV2TextInput","Represents the natural language text to be processed."],["GoogleCloudDialogflowV2TrainAgentRequest","The request message for Agents.TrainAgent."],["GoogleCloudDialogflowV2VoiceSelectionParams","Description of which voice to use for speech synthesis."],["GoogleLongrunningOperation","This resource represents a long-running operation that is the result of a network API call."],["GoogleProtobufEmpty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance:"],["GoogleRpcStatus","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. Each `Status` message contains three pieces of data: error code, error message, and error details."],["GoogleTypeLatLng","An object representing a latitude/longitude pair. This is expressed as a pair of doubles representing degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges."],["JsonServerError","A utility type which can decode a server response that indicates error"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["ProjectAgentCall","Creates/updates the specified agent."],["ProjectAgentEntityTypeBatchDeleteCall","Deletes entity types in the specified agent."],["ProjectAgentEntityTypeBatchUpdateCall","Updates/Creates multiple entity types in the specified agent."],["ProjectAgentEntityTypeCreateCall","Creates an entity type in the specified agent."],["ProjectAgentEntityTypeDeleteCall","Deletes the specified entity type."],["ProjectAgentEntityTypeEntityBatchCreateCall","Creates multiple new entities in the specified entity type."],["ProjectAgentEntityTypeEntityBatchDeleteCall","Deletes entities in the specified entity type."],["ProjectAgentEntityTypeEntityBatchUpdateCall","Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request."],["ProjectAgentEntityTypeGetCall","Retrieves the specified entity type."],["ProjectAgentEntityTypeListCall","Returns the list of all entity types in the specified agent."],["ProjectAgentEntityTypePatchCall","Updates the specified entity type."],["ProjectAgentExportCall","Exports the specified agent to a ZIP file."],["ProjectAgentImportCall","Imports the specified agent from a ZIP file."],["ProjectAgentIntentBatchDeleteCall","Deletes intents in the specified agent."],["ProjectAgentIntentBatchUpdateCall","Updates/Creates multiple intents in the specified agent."],["ProjectAgentIntentCreateCall","Creates an intent in the specified agent."],["ProjectAgentIntentDeleteCall","Deletes the specified intent and its direct or indirect followup intents."],["ProjectAgentIntentGetCall","Retrieves the specified intent."],["ProjectAgentIntentListCall","Returns the list of all intents in the specified agent."],["ProjectAgentIntentPatchCall","Updates the specified intent."],["ProjectAgentRestoreCall","Restores the specified agent from a ZIP file."],["ProjectAgentSearchCall","Returns the list of agents."],["ProjectAgentSessionContextCreateCall","Creates a context."],["ProjectAgentSessionContextDeleteCall","Deletes the specified context."],["ProjectAgentSessionContextGetCall","Retrieves the specified context."],["ProjectAgentSessionContextListCall","Returns the list of all contexts in the specified session."],["ProjectAgentSessionContextPatchCall","Updates the specified context."],["ProjectAgentSessionDeleteContextCall","Deletes all active contexts in the specified session."],["ProjectAgentSessionDetectIntentCall","Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries."],["ProjectAgentSessionEntityTypeCreateCall","Creates a session entity type."],["ProjectAgentSessionEntityTypeDeleteCall","Deletes the specified session entity type."],["ProjectAgentSessionEntityTypeGetCall","Retrieves the specified session entity type."],["ProjectAgentSessionEntityTypeListCall","Returns the list of all session entity types in the specified session."],["ProjectAgentSessionEntityTypePatchCall","Updates the specified session entity type."],["ProjectAgentTrainCall","Trains the specified agent."],["ProjectDeleteAgentCall","Deletes the specified agent."],["ProjectGetAgentCall","Retrieves the specified agent."],["ProjectMethods","A builder providing access to all methods supported on project resources. It is not used directly, but through the `Dialogflow` hub."],["ProjectOperationGetCall","Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service."],["RangeResponseHeader",""],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["ServerError",""],["ServerMessage",""],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});