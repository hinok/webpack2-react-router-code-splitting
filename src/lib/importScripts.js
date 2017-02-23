import loadjs from 'loadjs';

const amdCache = {};
let amdified = false;

function checkAmd() {
    return typeof window.define === "function" && window.define.amd;
}

function amdify() {
    if (checkAmd()) {
        console.warn('AMD environment has been already defined.');
    } else {
        window.define = (name, deps, factory) => {
            if (amdCache[name]) {
                return;
            }

            amdCache[name] = factory();
        };
        window.define.amd = true;
        amdified = true;
    }
}

function importScripts(scripts) {
    return new Promise((resolve, reject) => {
        loadjs(scripts, {
            success: () => {
                if (!amdified) {
                    resolve();
                    return;
                }

                const amdCached = Object.keys(amdCache)
                    .map(name => ({[name]: amdCache[name]}))
                    .reduce((acc, curr) => ({...acc, ...curr }), {});

                const amdCachedKeys = Object.keys(amdCached);

                if (amdCachedKeys.length === 1) {
                    resolve(amdCached[amdCachedKeys[0]]);
                    return;
                }

                resolve(amdCached);
            },
            error: reject,
        });
    });
}

export { amdify };
export default importScripts;
