const axios = require('axios');
import "cypress-localstorage-commands";


export const setToken = () => {
   axios.post('https://dev.api.nami.gg/auth/sign',
        {
            "publicAddress": "0xfc9247de9626f4aad438977fcd0be6d524a00bd9"
        }
    ).then(r => {
       cy.setLocalStorage("accessToken", r.data.data.accessToken)
    }).catch(e => {
        console.log(e);
    });
}

export const setCustomLocalStorage = (key, value) => {
    cy.setLocalStorage(key, value);
}

export const clearLocalStorage = () => {
    cy.clearLocalStorage();
}

export const clearLocalStorageItem = (key) => {
    cy.clearLocalStorage(key);
}

