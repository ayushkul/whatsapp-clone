/**
 * Created by AyushK on 26/07/21.
 */
import * as Controller from "../app/controllers";

module.exports = (app) => {
    app.get('/', (req, res) => res.send(`API running fine`));

    app.post('/user',  Controller.createUser);

    app.post('/login', Controller.loginUser);

    app.post('/channel', Controller.createChannel);

    app.get('/channel-list', Conindextroller.getChannelList);

    app.get('/search-user', Controller.searchUser);

    app.post('/message', Controller.sendMessage);
};
