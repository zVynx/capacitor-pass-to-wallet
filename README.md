# capacitor-pass-to-wallet

This is a fork of the project https://github.com/NitnelavAH/capacitor-pass-to-wallet

Allows to add .pkpass file to Apple Wallet and JWT Passes to Google Wallet

## Example
https://youtu.be/FUt2J385yCQ
https://github.com/NitnelavAH/IonicAdd2Wallet

## Compatibility

| Capacitor Version  | Plugin Version |
| ------------- | ------------- |
| 7.x  | 4.x |

## Install

```bash
npm install capacitor-pass-to-wallet
npx cap sync
```


## Android Configuration

On Android add this inside the application tag of your AndroidManifest.xml

```xml
<application ...> 
        <meta-data
                android:name="com.google.android.gms.wallet.api.enabled"
                android:value="true" /> 
</application>
```
- To be able to add the Pass from your App you also need to add the App Permission inside the Google Pay & Wallet Console

## iOS Configuration
on iOS, no further steps needed.


## API

<docgen-index>

* [`addToAppleWallet(...)`](#addtoapplewallet)
* [`addMultipleToAppleWallet(...)`](#addmultipletoapplewallet)
* [`canAddToGoogleWallet()`](#canaddtogooglewallet)
* [`addJwtToGoogleWallet(...)`](#addjwttogooglewallet)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addToAppleWallet(...)

```typescript
addToAppleWallet(options: { base64: string; }) => Promise<{ message: string; }>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ base64: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### addMultipleToAppleWallet(...)

```typescript
addMultipleToAppleWallet(options: { base64: string[]; }) => Promise<{ message: string; }>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ base64: string[]; }</code> |

**Returns:** <code>Promise&lt;{ message: string; }&gt;</code>

--------------------


### canAddToGoogleWallet()

```typescript
canAddToGoogleWallet() => Promise<{ isAvailable: boolean; reason?: string; }>
```

**Returns:** <code>Promise&lt;{ isAvailable: boolean; reason?: string; }&gt;</code>

--------------------


### addJwtToGoogleWallet(...)

```typescript
addJwtToGoogleWallet(options: { jwt: string; }) => Promise<{ message: string; passAdded: boolean; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ jwt: string; }</code> |

**Returns:** <code>Promise&lt;{ message: string; passAdded: boolean; }&gt;</code>

--------------------

</docgen-api>
