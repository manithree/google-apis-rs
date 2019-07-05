initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["AutoText","A ParagraphElement representing a spot in the text that is dynamically replaced with content that can change over time, like a page number."],["Background","Represents the background of a document."],["BackgroundSuggestionState","A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set to true, the Backgound has a new suggested value."],["BatchUpdateDocumentRequest","Request message for BatchUpdateDocument."],["BatchUpdateDocumentResponse","Response message from a BatchUpdateDocument request."],["Body","The document body."],["Bullet","Describes the bullet of a paragraph."],["BulletSuggestionState","A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there is a new suggested value."],["Chunk",""],["Color","A solid color."],["ColumnBreak","A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column."],["ContentRange","Implements the Content-Range header, for serialization only"],["CreateNamedRangeRequest","Creates a NamedRange referencing the given range."],["CreateNamedRangeResponse","The result of creating a named range."],["CreateParagraphBulletsRequest","Creates bullets for all of the paragraphs that overlap with the given range."],["CropProperties","The crop properties of an image."],["CropPropertiesSuggestionState","A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there is a new suggested value."],["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["DeleteContentRangeRequest","Deletes content from the document."],["DeleteNamedRangeRequest","Deletes a NamedRange."],["DeleteParagraphBulletsRequest","Deletes bullets from all of the paragraphs that overlap with the given range."],["DeletePositionedObjectRequest","Deletes a PositionedObject from the document."],["DeleteTableColumnRequest","Deletes a column from a table."],["DeleteTableRowRequest","Deletes a row from a table."],["Dimension","A magnitude in a single direction in the specified units."],["Docs","Central instance to access all Docs related resource activities"],["Document","A Google Docs document."],["DocumentBatchUpdateCall","Applies one or more updates to the document."],["DocumentCreateCall","Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored."],["DocumentGetCall","Gets the latest version of the specified document."],["DocumentMethods","A builder providing access to all methods supported on document resources. It is not used directly, but through the `Docs` hub."],["DocumentStyle","The style of the document."],["DocumentStyleSuggestionState","A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there is a new suggested value."],["DummyNetworkStream",""],["EmbeddedDrawingProperties","The properties of an embedded drawing."],["EmbeddedDrawingPropertiesSuggestionState","A mask that indicates which of the fields on the base EmbeddedDrawingProperties have been changed in this suggestion. For any field set to true, there is a new suggested value."],["EmbeddedObject","An embedded object in the document."],["EmbeddedObjectBorder","A border around an EmbeddedObject."],["EmbeddedObjectBorderSuggestionState","A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there is a new suggested value."],["EmbeddedObjectSuggestionState","A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there is a new suggested value."],["EndOfSegmentLocation","Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment."],["Equation","A ParagraphElement representing an equation."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["Footer","A document footer."],["Footnote","A document footnote."],["FootnoteReference","A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote."],["Header","A document header."],["HorizontalRule","A ParagraphElement representing a horizontal line."],["ImageProperties","The properties of an image."],["ImagePropertiesSuggestionState","A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there is a new suggested value."],["InlineObject","An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image."],["InlineObjectElement","A ParagraphElement that contains an InlineObject."],["InlineObjectProperties","Properties of an InlineObject."],["InlineObjectPropertiesSuggestionState","A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For any field set to true, there is a new suggested value."],["InsertInlineImageRequest","Inserts an InlineObject containing an image at the given location."],["InsertInlineImageResponse","The result of inserting an inline image."],["InsertInlineSheetsChartResponse","The result of inserting an embedded Google Sheets chart."],["InsertPageBreakRequest","Inserts a page break followed by a newline at the specified location."],["InsertTableColumnRequest","Inserts an empty column into a table."],["InsertTableRequest","Inserts a table at the specified location."],["InsertTableRowRequest","Inserts an empty row into a table."],["InsertTextRequest","Inserts text at the specified location."],["JsonServerError","A utility type which can decode a server response that indicates error"],["Link","A reference to another portion of a document or an external URL resource."],["LinkedContentReference","A reference to the external linked source content."],["LinkedContentReferenceSuggestionState","A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For any field set to true, there is a new suggested value."],["List","A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that is part of a list has a reference to the list's ID in its bullet."],["ListProperties","The properties of a list which describe the look and feel of bullets belonging to paragraphs associated with a list."],["ListPropertiesSuggestionState","A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there is a new suggested value."],["Location","A particular location in the document."],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. Note: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["NamedRange","A collection of Ranges with the same named range ID."],["NamedRanges","A collection of all the NamedRanges in the document that share a given name."],["NamedStyle","A named style. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from this named style when they have the same named style type."],["NamedStyleSuggestionState","A suggestion state of a NamedStyle message."],["NamedStyles","The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles."],["NamedStylesSuggestionState","The suggestion state of a NamedStyles message."],["NestingLevel","Contains properties describing the look and feel of a list bullet at a given level of nesting."],["NestingLevelSuggestionState","A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there is a new suggested value."],["ObjectReferences","A collection of object IDs."],["OptionalColor","A color that can either be fully opaque or fully transparent."],["PageBreak","A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page."],["Paragraph","A StructuralElement representing a paragraph. A paragraph is a range of content that is terminated with a newline character."],["ParagraphBorder","A border around a paragraph."],["ParagraphElement","A ParagraphElement describes content within a Paragraph."],["ParagraphStyle","Styles that apply to a whole paragraph."],["ParagraphStyleSuggestionState","A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there is a new suggested value."],["PositionedObject","An object that is tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image."],["PositionedObjectPositioning","The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it is tethered to."],["PositionedObjectPositioningSuggestionState","A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there is a new suggested value."],["PositionedObjectProperties","Properties of a PositionedObject."],["PositionedObjectPropertiesSuggestionState","A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there is a new suggested value."],["Range","Specifies a contiguous range of text."],["RangeResponseHeader",""],["ReplaceAllTextRequest","Replaces all instances of text matching a criteria with replace text."],["ReplaceAllTextResponse","The result of replacing text."],["Request","A single update to apply to a document."],["Response","A single response from an update."],["ResumableUploadHelper","A utility type to perform a resumable upload from start to end."],["RgbColor","An RGB color."],["SectionBreak","A StructuralElement representing a section break. A section is a range of content which has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break."],["SectionColumnProperties","Properties that apply to a section's column."],["SectionStyle","The styling that applies to a section."],["ServerError",""],["ServerMessage",""],["Shading","The shading of a paragraph."],["ShadingSuggestionState","A mask that indicates which of the fields on the base Shading have been changed in this suggested change. For any field set to true, there is a new suggested value."],["SheetsChartReference","A reference to a linked chart embedded from Google Sheets."],["SheetsChartReferenceSuggestionState","A mask that indicates which of the fields on the base SheetsChartReference have been changed in this suggestion. For any field set to true, there is a new suggested value."],["Size","A width and height."],["SizeSuggestionState","A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value."],["StructuralElement","A StructuralElement describes content that provides structure to the document."],["SubstringMatchCriteria","A criteria that matches a specific string of text in the document."],["SuggestedBullet","A suggested change to a Bullet."],["SuggestedDocumentStyle","A suggested change to the DocumentStyle."],["SuggestedInlineObjectProperties","A suggested change to InlineObjectProperties."],["SuggestedListProperties","A suggested change to ListProperties."],["SuggestedNamedStyles","A suggested change to the NamedStyles."],["SuggestedParagraphStyle","A suggested change to a ParagraphStyle."],["SuggestedPositionedObjectProperties","A suggested change to PositionedObjectProperties."],["SuggestedTableCellStyle","A suggested change to a TableCellStyle."],["SuggestedTableRowStyle","A suggested change to a TableRowStyle."],["SuggestedTextStyle","A suggested change to a TextStyle."],["TabStop","A tab stop within a paragraph."],["Table","A StructuralElement representing a table."],["TableCell","The contents and style of a cell in a Table."],["TableCellBorder","A border around a table cell."],["TableCellLocation","Location of a single cell within a table."],["TableCellStyle","The style of a TableCell."],["TableCellStyleSuggestionState","A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there is a new suggested value."],["TableColumnProperties","The properties of a column in a table."],["TableOfContents","A StructuralElement representing a table of contents."],["TableRow","The contents and style of a row in a Table."],["TableRowStyle","Styles that apply to a table row."],["TableRowStyleSuggestionState","A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field set to true, there is a new suggested value."],["TableStyle","Styles that apply to a table."],["TextRun","A ParagraphElement that represents a run of text that all has the same styling."],["TextStyle","Represents the styling that can be applied to text."],["TextStyleSuggestionState","A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there is a new suggested value."],["UpdateParagraphStyleRequest","Update the styling of all paragraphs that overlap with the given range."],["UpdateTableColumnPropertiesRequest","Updates the TableColumnProperties of columns in a table."],["UpdateTableRowStyleRequest","Updates the TableRowStyle of rows in a table."],["UpdateTextStyleRequest","Update the styling of text."],["WeightedFontFamily","Represents a font family and weight of text."],["WriteControl","Provides control over how write requests are executed."],["XUploadContentType","The `X-Upload-Content-Type` header."]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a parts string"],["UnusedType","Identifies types which are not actually used by the API This might be a bug within the google API schema."]],"type":[["Result","A universal result type used as return for all calls."]]});