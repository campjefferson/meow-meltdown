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
    PORT = 4000;

function get3DigitString() {
    var str = '';
    while (str.length < 3) {
        str += Math.floor(Math.random() * 10);
    }
    return str;
}

function getGame(socket) {
    var gameId = get3DigitString();
    while (games[gameId] !== undefined) {
        gameId = get3DigitString();
    }

    

    games[gameId] = {
        id: gameId,
        socket: socket,
        sockedId: socket.id,
        controllers: [],
        players: 0
    }

    return games[gameId];
}

function getGameList() {
    var game,
        availableGames = [];
    for (var gameId in games) {
        game = games[gameId];
        if (game.players < 4) {
            availableGames.push(game.id);
        }
    }

    return availableGames;
}

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
});

io.on('connection', function (socket, options) {
    socket.on('game_connect', function () {
        game = getGame(socket);
        console.log('game connected', game.id);
        socket.emit('game_connected', { id: game.id });

        socket.emit('games_list', { list: getGameList() });
    });

    socket.on('game_over', function (data) {
        //_.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
        game = _.findWhere(games, { sockedId: socket.id });
        console.log('game over', game.id);

        game.controllers.forEach(function (controller) {
            controller.emit('game_over', { winner: data.winner });
        });
    });

    // controller
    socket.on('controller_connect', function (data) {
        var gameId = data.gameId,
            game = games[gameId];

        if (game.players === 4) {
            return;
        }

        game.controllers.push(socket);
        game.players = game.controllers.length;

        console.log('controller_connected');
        game.socket.emit('player_connected', { player: game.players });

        socket.on('start', function (socket, percent) {
            game.socket.emit('start');
            game.controllers.forEach(function (controller) {
                controller.emit('game_start');
            });
        });

        socket.on('swipe', function (socket, percent) {
            var playerNum = game.controllers.indexOf(socket);
            game.socket.emit('lick', { player: playerNum, percent: percent });
        });
    });

    socket.on('request_games_list', function () {
        console.log('requesting games list');
        var list = getGameList();
        console.log(list);
        socket.emit('games_list', { list: getGameList() });
    });

    socket.on('disconnect', function () {
        var game = _.findWhere(games, { sockedId: socket.id });

        if (game === undefined) {
            return;
        }
        console.log('disconnect', socket.id, game)
        delete games[game.id];
        socket.emit('games_list', { list: getGameList() });
    })
});
