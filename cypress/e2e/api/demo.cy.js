import {Api} from "./base-api";
import {getAdminHeaders, getRandomGameId, getRandomSinkId, getSinkList} from "./utils";

describe('demo', function () {

    it('should be true', function () {
        getSinkList().then(r => {
            console.log(r);
        });
        getRandomSinkId().then(r => {
            console.log(r);
        });
    });
});
