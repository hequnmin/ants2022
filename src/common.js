import path from 'path';
import fs from 'fs';

export const CurrentTimeString = () => {
    //return (new Date()).toLocaleTimeString();
    const d = new Date();
    return (`${d.toLocaleTimeString()}.${d.getMilliseconds().toString().padStart(3,0)}`);
};

export const Config = (filename) => {
    return new Promise(function(resolve, reject) {
        fs.access(filename, fs.constants.F_OK | fs.constants.W_OK, (error) => {
            if (error) {
                reject(error);
            } else {
                fs.readFile(filename, (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(JSON.parse(data.toString()));
                    }
                });
            }
        });
    });
};
