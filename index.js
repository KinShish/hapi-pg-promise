'use strict';
const Hoek = require('hoek');
const PgPromise = require('pg-promise');
const pkg = require('./package.json');

const DEFAULTS = {
    init: {},
    cn: undefined,
    name: undefined
};

module.exports = {
    pkg,
    register(server, options) {
        options.forEach(opt=>{
            const opts = Hoek.applyToDefaults(DEFAULTS, opt);
            const pgp = PgPromise(opts.init);
            const db = pgp(opts.cn);
            server.ext('onPreHandler', (request, h) => {
                request[opts.name]=db;
                return h.continue;
            });
            server.expose(opts.name, db);
            server.events.on('stop', pgp.end);
        });
    }
};
