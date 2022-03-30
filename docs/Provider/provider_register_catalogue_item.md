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
  "itemId": "datakaveri.org/49276e9045a8a4c5c5bcc5b3b6923786896ff02d/catalogue.iudx.org.in/catalogue/crud",
  "itemType": "resource",
  "role": "provider"
}
```




## Onboard Items in Catalogue
Assume that rS and Provider items are already created by IUDX Admin. 

Add the Cat API to use to upload items (rG and res)
Add scripts / screenshots (whichever applicable)
