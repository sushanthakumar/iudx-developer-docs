---
sidebar_position: 4
---
 
# Manage Catalogue Items

## Obtain Token to Create Catalogue
To create/update/delete a `catalogue` entry in the IUDX Catalogue Server, a provider should obtain a token using IUDX Authorization Servers [Create Token APIs](https://authorization.iudx.org.in/apis#operation/post-auth-v1-token).

To obtain a token, a provider can either specify their `clientId` and `clientSecret` in the header or specify a token header. The `clientId` and `clientSecret` are generated for a provider on their [Successful Registration](https://docs.iudx.org.in/docs/registration#successful-registration-and-client-id-client-secret).

A provider can obtain a token using the [Create Token APIs](https://authorization.iudx.org.in/apis#operation/post-auth-v1-token) with the following request body.
```json
{
  "itemId": "datakaveri.org/04a15c9960ffda227e9546f3f46e629e1fe4132b/catalogue.iudx.org.in/catalogue/crud",
  "itemType": "resource",
  "role": "provider"
}
```
The `itemId` here specifies the catalogue instance in the IUDX Catalogue Server in which the provider intends to perform a create/update/delete operation and is represented in the following format:<br/>
`<provider-domain>/<SHA1-of-provider-email>/<catalogue-url>/catalogue/crud`

It is to be noted that a provider would be entitled to create/update/delete `catalogue` entries only on their catalogue instances through an explicit policy specified by the IUDX Admin in the IUDX Authorization Server. A provider will not obtain any token to perform create/update/delete operations on the `catalogue` entries for other catalogue instances in the IUDX Catalogue Server.

## Upload Catalogue Entries to the Catalogue Server
On successfully obtaining a [Create Catalogue Token](https://docs.iudx.org.in/docs/Provider/provider_register_catalogue_item#obtain-token-to-create-catalogue), a provider can upload the `catalogue` entries to the IUDX Catalogue Server.

Assuming the `catalogue` entries for `provider` and `resource_server` are already uploaded by the IUDX Admin, a provider can know insert the entries for `resource_group` followed by the entries for the `resource` to the IUDX Catalogue Server.

The Python script below shows an example of inserting a `catalogue` entry to the IUDX Catalogue Server using the [Create Item API](https://api.catalogue.iudx.org.in/apis#operation/createItem).
``` { #create_catalogue_example }

<pre style="color:#000000;background:#ffffff;"><span style="color:#800000; font-weight:bold; ">import</span> json
<span style="color:#800000; font-weight:bold; ">import</span> requests

catalogue_url <span style="color:#808030; ">=</span> <span style="color:#0000e6; ">'api.catalogue.iudx.org.in'</span>
token <span style="color:#808030; ">=</span> <span style="color:#0000e6; ">'&lt;token_obtained_from_IUDX_Authorization_Servers&gt;'</span>
path <span style="color:#808030; ">=</span> <span style="color:#0000e6; ">'&lt;./path_to_the_catalogue_entry_file&gt;'</span>

api <span style="color:#808030; ">=</span> <span style="color:#0000e6; ">'https://'</span> <span style="color:#44aadd; ">+</span> catalogue_url <span style="color:#44aadd; ">+</span> <span style="color:#0000e6; ">'/iudx/cat/v1/item'</span>

headers <span style="color:#808030; ">=</span> <span style="color:#800080; ">{</span><span style="color:#0000e6; ">'content-type'</span><span style="color:#808030; ">:</span> <span style="color:#0000e6; ">'application/json'</span><span style="color:#808030; ">,</span> <span style="color:#0000e6; ">'token'</span><span style="color:#808030; ">:</span> token<span style="color:#800080; ">}</span>

<span style="color:#800000; font-weight:bold; ">with</span> <span style="color:#400000; ">open</span><span style="color:#808030; ">(</span>path<span style="color:#808030; ">,</span> <span style="color:#0000e6; ">'r'</span><span style="color:#808030; ">)</span> <span style="color:#800000; font-weight:bold; ">as</span> catalogue_file<span style="color:#808030; ">:</span>
    catalogue_item <span style="color:#808030; ">=</span> json<span style="color:#808030; ">.</span>load<span style="color:#808030; ">(</span>catalogue_file<span style="color:#808030; ">)</span>

r <span style="color:#808030; ">=</span> requests<span style="color:#808030; ">.</span>post<span style="color:#808030; ">(</span>api<span style="color:#808030; ">,</span> json<span style="color:#808030; ">.</span>dumps<span style="color:#808030; ">(</span>catalogue_item<span style="color:#808030; ">)</span><span style="color:#808030; ">,</span> headers<span style="color:#808030; ">=</span>headers<span style="color:#808030; ">)</span>

<span style="color:#800000; font-weight:bold; ">print</span> r<span style="color:#808030; ">.</span>status_code
<span style="color:#800000; font-weight:bold; ">print</span> r<span style="color:#808030; ">.</span>json<span style="color:#808030; ">(</span><span style="color:#808030; ">)</span>
</pre>

```
