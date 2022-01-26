/**
 * Created by AyushK on 26/07/21.
 */
import * as Controller from "../app/controllers";
import * as Validation from "../utility/validator";

module.exports = (app) => {
    app.get('/', (req, res) => res.send(`API running fine`));

    app.post('/user', Validation.validateCreateUser,  Controller.createUser);

    app.get('/search-user', Validation.validateSearchUser, Controller.searchUser);

    app.post('/channel', Validation.validateCreateChannel, Controller.createChannel);

    app.get('/channel-list', Validation.validateGetChannelList, Controller.getChannelList);

    app.post('/message', Validation.validateAddMessage, Controller.sendMessage);
};
