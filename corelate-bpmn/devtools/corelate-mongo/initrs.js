var cfg = {
    _id: 'corelate-mongo',
    members: [
        { _id: 0, host: 'localhost:27017' }
    ]
};

var error = rs.initiate(cfg);
printjson(error);
