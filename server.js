var path = require("path"),
    express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require("socket.io")(server),
    // game stuff
    games = {},
    controllers = {};

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
        controllers: [],
        players: 0
    }

    return games[gameId];
}

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
});

app.use('/', express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/controller', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/controller.html'));
});

server.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});

io.on('connection', function (socket, options) {

    socket.on('game_connect', function () {
        game = getGame(socket);
        socket.emit('game_connected', { id: game.id });
    });

    socket.on('game_over', function (data) {
        game.controllers.forEach(function (controller) {
            controller.emit('game_over', { winner: data.winner });
        })
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

        socket.on('request_list', function(){
            
        });

        socket.emit('controller_connected', { id: game.id });
        socket.emit('games_list', { list: getGameList() });
    });
});
