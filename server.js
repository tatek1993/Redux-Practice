const express = require('express');
const cors = require('cors');
const port = 8888;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
    res.status(422);
    res.json({ Error: msg });
    return;
};

let players = [
    {
        name: 'Lionel Messi',
        rank: 5,
        nickname: 'La pulga',
        id: 0
    }
];

server.get('/players', (req, res) => {
    res.json(players);
});
let playerId = players.length;

server.post('/players', (req, res) => {
    const { name, rank, nickname } = req.body;
    const newPlayer = { name, rank, nickname, id: playerId };
    if(!name || !rank || !nickname) {
        return sendUserError(
            'Ya gone did messed up! Name/Rank/Nickname are all required to create a player in the player DB, ya fool.',
            res
        );
    };
    const findPlayerByName = player => {
        return player.name === name;
    };
    if (players.find(findPlayerByName)) {
        return sendUserError(
            `Ya gone did messed up! ${name} already exists in the player DB.`,
            res
        );
    }

    players.push(newPlayer);
    playerId++;
    res.json(players);
});

server.put('/players/:id', (req, res) => {
    const { id } = req.params;
    const { name, rank, nickname } = req.body;
    const findPlayerById = player => {
        return player.id === id;
    };
    const foundPlayer = players.find(findPlayerById);
    if (!foundPlayer) {
        return sendUserError('No player found by that ID', res);
    } else {
        if (name) foundPlayer.name = name;
        if (rank) foundPlayer.rank = rank;
        if (nickname) foundPlayer.nickname = nickname;
        res.json(players);
    }
});

server.delete('/players/:id', (req, res) => {
    const { id } = req.params;
    const foundPlayer = players.find(player => player.id === id);

    if (foundPlayer) {
        const PlayerRemoved = { ...foundPlayer };
        players = players.filter(player => player.id != id);
        res.status(200).json(players);
    } else {
        sendUserError('No player by that ID exists in the player DB', res);
    }
});

server.listen(port, err => {
    if (err) console.log(err);
    console.log(`server is listening on port ${port}`);
});
