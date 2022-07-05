import {Api} from "./base-api";

export const getHeaderWithToken = () => {
    return cy.readFile(Cypress.env('login_data_path')).then(data => {
        let api = new Api("/api/auth/login", {"email": data.email, "password": data.password});
        return api.post().then(r => {
                return {"Authorization": "Bearer " + r.body.accessToken};
            }
        );
    })

}

export const getGameList = () => {
    let gameApi = new Api("/game/list");
    return gameApi.get().then(r => {
            return r.body.data;
        }
    );
}

export const getAdminHeaders = () => {
    let body = {"publicAddress": Cypress.env('adminAddress')};
    let userApi = new Api("/auth/sign", body, {});
    return userApi.post().then(r => {
            return {"Authorization": "Bearer "+ r.body.data.accessToken};
        }
    );
}

export const getSinkList = () => {
    return getAdminHeaders().then(header => {
            let api = new Api("/sink/list", {}, header);
            return api.get().then(r => {
                return r.body.data;
            });
        });
}

export const getRandomSinkId = () => {
    return getSinkList().then(sinks => {
        let randomSink = sinks[Math.floor(Math.random() * sinks.length)];
        return randomSink._id;
    }
    );
}

export const getMemberList = () => {
    return getAdminHeaders().then(header => {
            let api = new Api("/member/list", {}, header);
            return api.get().then(r => {
                return r.body.data;
            });
        });
}

export const getRandomMemberId = () => {
    return getMemberList().then(members => {
        let randomMember = members[Math.floor(Math.random() * members.length)];
        return randomMember._id;
    }
    );
}

export const getGuildList = () => {
    return getAdminHeaders().then(header => {
            let api = new Api("/guild/list", {}, header);
            return api.get().then(r => {
                return r.body.data;
            });
        });
}

export const getRandomGuildId = () => {
    return getGuildList().then(guilds => {
        let randomGuild = guilds[Math.floor(Math.random() * guilds.length)];
        return randomGuild._id;
        }
    );
}
