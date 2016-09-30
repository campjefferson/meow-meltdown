var path = require("path"),
    _ = require('underscore'),
    express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require("socket.io")(server),
    // game stuff
    games = {},
    controllers = {},
    sockets = [],
    ids = require('./ids.json').ids,
    PORT = 4000;

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
// });

app.use('/', express.static(__dirname + '/dist'));


app.get('/', function (req, res) {
    console.log(__dirname + '/dist/index.html')
    res.sendFile(__dirname + '/dist/index.html');
});

app.get('/controller', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/controller.html'));
});

server.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
    console.log( server.address().address );
});

io.on('connection', function (socket, options) {
    socket.on('game_connect', function () {
        game = getGame(socket);
        console.log('game connected', game.id);
        socket.emit('game_connected', { id: game.id });

        sendGamesListToAllControllers();
    });

    socket.on('game_over', function (data) {
        //_.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
        game = _.findWhere(games, { socketId: socket.id });
        console.log('game over', game.id);

        game.controllers.forEach(function (controller) {
            controller.emit('game_over', { winner: data.winner });
        });
    });

    // controller
    socket.on('controller_connect', function () {
        controllers[socket.id] = {socket:socket, socketId:socket.id, gameId:null};
        sendGamesListToAllControllers();
    });

    socket.on('controller_connect_to_game', function (data) {
        var gameId = data.id,
            game = games[gameId];

        console.log('connecting controller to game: ' + gameId);
        if (game.players === 4) {
            return;
        }

        game.controllers.push(socket);
        game.players = game.controllers.length;

        socket.on('start_game', function (socket, percent) {
            game.socket.emit('start_game');
        });

        socket.on('swipe', function (socket, percent) {
            var playerNum = game.controllers.indexOf(socket);
            game.socket.emit('lick', { player: playerNum, percent: percent });
        });

        sendGamesListToAllControllers();
        // send connecttion message to game
        game.socket.emit('player_connected', { player: game.players });

        // send connection message to controller that just connected
        socket.emit('controller_connected', { gameId: gameId, playerNum: game.players });
    });

    socket.on('request_games_list', function () {
        console.log('requesting games list');
        var list = getGamesList();
        console.log(list);
        socket.emit('games_list', { list: getGamesList() });
    });

    socket.on('disconnect', function () {
        var game = _.findWhere(games, { socketId: socket.id });
        if (game === undefined) {
            var controller = _.findWhere(controllers, {id:socket.id});
            if (controller === undefined){

                // continue here
                return;
            }
            return;
        }
        console.log('disconnect', socket.id)
        delete games[game.id];
        sendGamesListToAllControllers();
    })
});


//
// function generateGameId() {
//     var str = '';
//     while (str.length < 3) {
//         str += Math.floor(Math.random() * 10);
//     }
//     return str;
// }

function generateGameId() {
   return ids[Math.floor(Math.random() * ids.length)];
}

function getGame(socket) {
    var gameId = generateGameId();
    while (games[gameId] !== undefined) {
        gameId = generateGameId();
    }

    games[gameId] = {
        id: gameId,
        socket: socket,
        socketId: socket.id,
        controllers: [],
        players: 0
    }

    return games[gameId];
}

function getGamesList() {
    var game,
        availableGames = [];
    for (var gameId in games) {
        game = games[gameId];
            availableGames.push(game.id);
    }

    return availableGames;
}

function sendGamesListToAllControllers() {
    availableGames = getGamesList();
    _.each(controllers, function (controller) {
        controller.socket.emit('games_list', { list: availableGames })
    })
}

function sendEventToGameControllers(gameId, eventId, data) {
    var game = games[gameId];
    game.controllers.forEach(function (controller) {
        controller.emit(eventId, data);
    });
}
