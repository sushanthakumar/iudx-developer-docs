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
The `itemId` here specifies the catalogue instance in the IUDX Catalogue Server in which the provider intends to create/update/delete an entry and is represented in the following format:<br/>
`<provider-domain>/<SHA1-of-provider-email>/<catalogue-url>/catalogue/crud`



## Onboard Items in Catalogue
Assume that rS and Provider items are already created by IUDX Admin. 

Add the Cat API to use to upload items (rG and res)
Add scripts / screenshots (whichever applicable)
