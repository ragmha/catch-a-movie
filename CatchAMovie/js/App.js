/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />

var AppHandler = (function () {
    function AppHandler(moviesJson) {
        this._movies = moviesJson;
    }
    AppHandler.prototype.GetMovie = function (elementAt) {
        var movie = this._movies[elementAt];
        return movie;
    };

    AppHandler.prototype.GetAllMovies = function () {
        var movies = this._movies;
        return movies;
    };
    return AppHandler;
})();
//# sourceMappingURL=App.js.map
