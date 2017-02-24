import loadjs from 'loadjs';

/**
 * @see https://github.com/webpack/webpack/issues/150
 * @see https://github.com/webpack/webpack/issues/462
 */
function importScript(script, globalName) {
    return new Promise((resolve, reject) => {
        if (loadjs.isDefined(globalName)) {
            resolve(window[globalName]);
            return;
        }

        loadjs(script, globalName, {
            success: () => {
                resolve(window[globalName]);
            },
            error: reject,
        });
    });
}

export default importScript;
