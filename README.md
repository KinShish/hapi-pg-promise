# hapi-pg-promise-multi

Wrap requests with a Postgres connection using promises.

[![Build Status](https://travis-ci.org/KinShish/hapi-pg-promise.svg?branch=pg-promise)](https://travis-ci.org/KinShish/hapi-pg-promise)
[![dependencies Status](https://david-dm.org/KinShish/hapi-pg-promise/status.svg)](https://david-dm.org/KinShish/hapi-pg-promise)
[![devDependencies Status](https://david-dm.org/KinShish/hapi-pg-promise/dev-status.svg)](https://david-dm.org/KinShish/hapi-pg-promise?type=dev)
[![peerDependencies Status](https://david-dm.org/KinShish/hapi-pg-promise/peer-status.svg)](https://david-dm.org/KinShish/hapi-pg-promise?type=peer)

We use the [`pg-promise`](https://github.com/vitaly-t/pg-promise) (`pg-promise`)


## Install

```bash
$ npm install hapi-pg-promise-multi
```

## Usage

In your request handlers you'll have access to `request.BASE_NAME` which you
can use to make DB requests.

`server.plugins['hapi-pg-promise'].BASE_NAME` is available outside of request
handlers.

### Hapi 18

Current version works with Hapi 18.x.x. For older versions use 1.0.0 of hapi-pg-promise.


#### Register the plugin

```js
const hapiPgPromise = require('hapi-pg-promise-multi');
const plugin = {
    plugin: hapiPgPromise,
    options: [{
        cn: 'postgres://username:password@host:port/database',
        name: 'BASE_NAME',
        settings: {
            // pg-promise options
        }
    },{
        cn: 'postgres://username:password@host:port/database_next',
        name: 'BASE_NAME_NEXT',
        settings: {
            // pg-promise options
        }
    }]
};

server.register(plugin);
```
## Original

[dszczyt/hapi-pg-promise](https://github.com/dszczyt/hapi-pg-promise)


## License

MIT
