# Records

<Zoe-Version/>

These records (JavaScript objects with data properties and no
functions) are used throughout Zoe.

## OfferResultRecord

**tyg todo: Appears to be replaced by OfferResult, but can't find an actual definition for it?
**From test-automatic-refund:**
```
The offerResult is simply
    // the string 'The offer was accepted'
    const aliceSeat = await zoe.offer(
```

This is returned in a promise by a call to `offer` on Zoe. It contains 
promises for handle for querying Zoe about the offer, the payouts 
when the offer is complete, the result of invoking the contract-specific 
hook associated with the invitation, and if appropriate for the specified
 `exit` policy, a remote object with a `complete` operation to complete the 
 offer.

 The `offerHandle` promise fulfills once the payments in the offer have 
 been escrowed. The `contractOfferPromise` is from the contract, and so
 depends on the contract code. The `paymentKeywordRecordPromise` gets
 resolved by Zoe when the corresponding offer is completed (i.e., 
 when the offer exits).

```js
{
  offerHandle: offerHandlePromise,
  outcome: contractOfferPromise,
  payout: paymentKeywordRecordPromise,
  completeObj: remoteCompleteObj
}
```
 
## Proposal

```js
 * @typedef {Partial<ProposalRecord>} Proposal
 * @typedef {{give: AmountKeywordRecord,
 *            want: AmountKeywordRecord,
 *            exit: ExitRule
 *           }} ProposalRecord
 
  * @typedef {Record<Keyword,Amount>} AmountKeywordRecord
 *
 * The keys are keywords, and the values are amounts. For example:
 * { Asset: amountMath.make(5), Price: amountMath.make(9) }
 */
 ```

A Proposal has three parts: `want` and `give` are used
by Zoe to enforce offer safety; `exit` is used to specify
the particular payout-liveness policy that Zoe can guarantee.
`want` and `give` are objects with keywords as keys and amounts
as values. 

```js
{
  want: someAmountKeywordRecord,
  give: anotherAmountKeywordRecord,
  exit: someExitRule
}
```

## IssuerKeywordRecord

```js
 * @property {IssuerKeywordRecord} issuers - record with
 * keywords keys, issuer values
 * @property {BrandKeywordRecord} brands - record with keywords
 * keys, brand values
 * @property {AmountMathKeywordRecord} maths - record with keywords
 * keys, amountMath values
 ```

The keys are keywords, and the values are issuers. These keywords will
be used by users to make their proposal. In the below example, "Asset"
and "Price" are keywords.

```js
{
  Asset: moolaIssuer,
  Price: simoleanIssuer
}
```

## PaymentKeywordRecord

**tyg todo: Appears not to be there**

The keys are keywords, and the values are payments
```js
{
  Asset: moolaPayment,
  Price: simoleanPayment,
}
```

## AmountKeywordRecord

The keys are keywords, and the values are amounts.
Keywords are unique identifiers per contract, that tie together
the proposal, payments to be escrowed, and payouts to the user.
In the below example, "Asset" and "Price" are keywords.
And in an auction instance, the keywords might be "Asset" and "Bid".

Users should submit their payments using keywords: `const payments = { Asset: moolaPayment };`

And, users will receive their payouts with keywords as the keys of a
payout object: `moolaPurse.deposit(payout.Asset);`

```js
{
  Asset: amountMath.make(5),
  Price: amountMath.make(9)
}
```

## AmountMathKeywordRecord

The keys are keywords, and the values are the [amountMath](/ertp/guide/amount-math.html) for
particular issuers.

```js
const record = {
  Asset: ticketAmountMath,
  Price: simoleanAmountMath
};
record.Asset.coerce(tickets3);
```

## BrandKeywordRecord

The keys are keywords and the values are the brands for particular issuers.

## ExitRule

```js
@typedef {Partial<Waived>&Partial<OnDemand>&Partial<AfterDeadline>} ExitRule
 * The possible keys are 'waived', 'onDemand', and 'afterDeadline'.
 * `timer` and `deadline` only are used for the `afterDeadline` key.
 * The possible records are:
 * `{ waived: null }`
 * `{ onDemand: null }`
 * `{ afterDeadline: { timer :Timer<Deadline>, deadline :Deadline } }
 */
 ```

The possible kinds are 'waived', 'onDemand', and 'afterDeadline'. `timer` and `deadline` only are used for the `afterDeadline` kind.

The possible records are:

`{ waived: null }`

`{ onDemand: null }`

`{ afterDeadline: { timer :Timer, deadline :Deadline} }`

```js
{
  afterDeadline: {
    timer: someTimer,
    deadline: 1893459600
  }
}

{
  waived: null,
}
```

## OfferStatuses Record

**tyg todo: Missing**
`active` and `inactive` lists of offerHandles.

```js
{
  active: someListOfOfferHandles,
  inactive: anotherListOfOfferHandles
}
```

## Installation Record
```js
/**
 * @typedef {Object} Installation
 * @property {() => SourceBundle} getBundle
 */
```
```js
{
  installationHandle, // opaque identifier, used as the table key
  bundle, // contains source code (accesible via bundle.source) and other info. 
}
```

## Instance Record
```js
@typedef {Object} InvitationDetails
 * @property {Installation} installation
 * @property {Instance} instance
 * @property {InvitationHandle} handle
 * @property {string} description
```
```js
{ 
  instanceHandle, // opaque identifier for the instance, used as the table key
  installationHandle, // opaque identifier for the installation
  publicAPI, // the invite-free publicly accessible API for the contract
  terms, // contract parameters
  issuerKeywordRecord, // record with keyword keys, issuer values
  brandKeywordRecord, // record with keyword keys, brand values
}
```

## Offer Record
```js
{ 
  offerHandle, // opaque identifier for the offer, used as the table key
  instanceHandle, // opaque identifier for the instance
  proposal, // the offer proposal (including want, give, exit)
  currentAllocation, // the amountKeywordRecord that will be turned into payouts
}
```
