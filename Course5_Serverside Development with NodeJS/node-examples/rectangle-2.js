/**
 * Created by iiian on 7/3/2017.
 */

module.exports = function (x, y, callback) {
    try {
        if (x < 0 || y < 0) {
            // error handling
            throw new Error("Rectangle dimensions should be greater than zero: l = "
                + x + ", and b = " + y);
        }
        else
            callback(null, {
                perimeter: function () {
                    return (2 * (x + y));
                },
                area: function () {
                    return (x * y);
                }
            });
    }
    catch (error) {
        callback(error, null);
    }
}