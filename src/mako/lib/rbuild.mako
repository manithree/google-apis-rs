<%!
    from util import (put_and, rust_test_fn_invisible, rust_doc_test_norun, rust_doc_comment,
                      rb_type, singular, hub_type, mangle_ident, mb_type, method_params, property,
                      to_fqan, indent_all_but_first_by, schema_markers, 
                      activity_input_type, TREF, method_io, IO_REQUEST, schema_to_required_property, 
                      rust_copy_value_s, is_required_property, organize_params, REQUEST_VALUE_PROPERTY_NAME,
                      build_all_params, rb_type_params_s, hub_type_params_s, mb_type_params_s)
%>\
<%namespace name="util" file="util.mako"/>\
<%namespace name="lib" file="lib.mako"/>\

## Creates a Resource builder type
###############################################################################################
###############################################################################################
<%def name="new(resource, c)">\
<% 
    hub_type_name = hub_type(canonicalName)
    rb_params = rb_type_params_s()
    ThisType = rb_type(resource) + rb_params
%>\
/// A builder providing access to all methods supported on *${singular(resource)}* resources.
/// It is not used directly, but through the `${hub_type_name}` hub.
///
/// # Example
///
/// Instantiate a resource builder
///
<%block filter="rust_doc_test_norun, rust_doc_comment">\
${util.test_prelude()}\

<%block filter="rust_test_fn_invisible">\
${lib.test_hub(hub_type_name, comments=False)}\

// Usually you wouldn't bind this to a variable, but keep calling *MethodBuilders*
// like ${put_and(sorted('`%s(...)`' % mangle_ident(f) for f in c.rta_map[resource]))}
// to build up your call.
let rb = hub.${mangle_ident(resource)}();
</%block>
</%block>
pub struct ${ThisType}
    where NC: 'a,
           C: 'a,
           A: 'a, {

    hub: &'a ${hub_type_name}${hub_type_params_s()}
}

impl${rb_params} ResourceMethodsBuilder for ${ThisType} {}

## Builder Creators Methods ####################
impl${rb_params} ${ThisType} {
    % for a in c.rta_map[resource]:
<%
    m = c.fqan_map[to_fqan(name, resource, a)]
    RType = mb_type(resource, a)

    # skip part if we have a request resource. Only resources can have parts
    # that we can easily deduce
    params, request_value = build_all_params(schemas, c, m, IO_REQUEST, REQUEST_VALUE_PROPERTY_NAME)
    required_props, optional_props, part_prop = organize_params(params, request_value)

    method_args = ''
    if required_props:
        method_args = ', ' + ', '.join('%s: %s' % (mangle_ident(p.name), activity_input_type(p)) for p in required_props)

    mb_tparams = mb_type_params_s(m)
%>\
    
    % if 'description' in m:
    /// Create a builder to help you perform the following task:
    ///
    ${m.description | rust_doc_comment, indent_all_but_first_by(1)}
    % endif
    pub fn ${mangle_ident(a)}(&self${method_args}) -> ${RType}${mb_tparams} {
        ${RType} {
            hub: self.hub,
            % for p in required_props:
            ${property(p.name)}: ${rust_copy_value_s(mangle_ident(p.name), activity_input_type(p), p)},
            % endfor
            ## auto-generate parts from request resources
            % if part_prop and request_value:
            ${property(part_prop.name)}: ${mangle_ident(REQUEST_VALUE_PROPERTY_NAME)}.to_parts(),
            % endif
            % for p in optional_props:
            ${property(p.name)}: Default::default(),
            % endfor
        }
    }
    % endfor ## for each activity
}
</%def>