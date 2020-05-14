const { NotFoundError } = require('../errors');

module.exports = {
    handleError (err, req, res, next) {
        res.render(`errors/${err.status}`, { err });
    },
    getNonExistentPath (req) {
        throw new NotFoundError(`Path '${req.originalUrl}' does not exist!`);
    }
};