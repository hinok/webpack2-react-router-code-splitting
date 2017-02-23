import loadjs from 'loadjs';

function importScripts(scripts, globalName) {
    return new Promise((resolve, reject) => {
        if (loadjs.isDefined(globalName)) {
            resolve(window[globalName]);
            return;
        }

        loadjs(scripts, globalName, {
            success: () => {
                resolve(window[globalName]);
            },
            error: reject,
        });
    });
}

export default importScripts;
