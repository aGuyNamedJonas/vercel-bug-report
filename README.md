# Firestore Vercel `now dev` Issue
## Issue
0. Add your firestore credentials to `api/firestoreWriteTest.ts`
1. Install node packages: `yarn`
2. Run locally `now dev` 
3. Try to call the endpoint in the browser:  
http://localhost:3001/api/firestoreWriteTest.ts
4. Below error occurs even though the deployed version works:  https://firestore-vercel-test.now.sh/api/firestoreWriteTest.ts

## Error
### Browser
An error occurred with this application.
This is an error with the application itself, not the platform.

502: BAD_GATEWAY
Code: NO_STATUS_CODE_FROM_LAMBDA
ID: dev1::dev1::kb54n-1589305883700-582e42a56b59

If you are a visitor; contact the website owner or try again later.
If you are the owner; check the logs for the application error.

### Console output
```
➜  firestore-vercel-test git:(master) ✗ now dev
> UPDATE AVAILABLE Run `npm i -g now@latest` to install Now CLI 19.0.1
> Changelog: https://github.com/zeit/now/releases/tag/now@19.0.1
Now CLI 19.0.0 dev (beta) — https://vercel.com/feedback
> NOTE: Requested port 3000 is already in use
> Ready! Available at http://localhost:3001
> Building @now/node@latest:api/firestoreWriteTest.ts
Using TypeScript 3.5.2 (now internal)
> Built @now/node@latest:api/firestoreWriteTest.ts [12s]
Unhandled rejection: Error: Cannot find module 'es-get-iterator'
Require stack:
- /private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/deep-equal/index.js
- /private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/@google-cloud/firestore/build/src/document.js
- /private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/@google-cloud/firestore/build/src/index.js
- /private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/firebase-admin/lib/firebase-namespace.js
- /private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/firebase-admin/lib/default-namespace.js
- /private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/firebase-admin/lib/index.js
- /private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/api/firestoreWriteTest.ts
- /private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/___now_launcher.js
- /Users/jpeeck/Library/Caches/co.zeit.fun/runtimes/nodejs/bootstrap.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:973:15)
    at Function.Module._load (internal/modules/cjs/loader.js:855:27)
    at Module.require (internal/modules/cjs/loader.js:1033:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (/private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/deep-equal/index.js:14:19)
    at Module._compile (internal/modules/cjs/loader.js:1144:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1164:10)
    at Module.load (internal/modules/cjs/loader.js:993:32)
    at Function.Module._load (internal/modules/cjs/loader.js:892:14)
    at Module.require (internal/modules/cjs/loader.js:1033:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/deep-equal/index.js',
    '/private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/@google-cloud/firestore/build/src/document.js',
    '/private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/@google-cloud/firestore/build/src/index.js',
    '/private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/firebase-admin/lib/firebase-namespace.js',
    '/private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/firebase-admin/lib/default-namespace.js',
    '/private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/node_modules/firebase-admin/lib/index.js',
    '/private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/api/firestoreWriteTest.ts',
    '/private/var/folders/r1/h_4tst0504q730c6r508p7h50618lb/T/zeit-fun-ac4974191c5d7/___now_launcher.js',
    '/Users/jpeeck/Library/Caches/co.zeit.fun/runtimes/nodejs/bootstrap.js'
  ]
}
LambdaError: RequestId: 6e95855d-2422-4b65-a84a-17a615217072 Process exited before completing request
    at Lambda.<anonymous> (/usr/local/lib/node_modules/now/dist/index.js:2:3455066)
    at Generator.next (<anonymous>)
    at fulfilled (/usr/local/lib/node_modules/now/dist/index.js:2:3452953)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
```

### System info
```
➜  firestore-vercel-test git:(master) ✗ node -v
v13.6.0
➜  firestore-vercel-test git:(master) ✗ npm -v
6.13.4
➜  firestore-vercel-test git:(master) ✗ sw_vers
ProductName:    Mac OS X
ProductVersion: 10.15.4
BuildVersion:   19E287
```
