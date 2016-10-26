var moviesJSON = require('../movies.json');

// home
exports.home =  function(req, res) {

    var movies = moviesJSON.movies;

    res.render('home', {
        title: "Star Wars Movies",
        movies: movies
    });
};

// movie_single
exports.movie_single = function(req, res) {

    var episode_number = req.params.episode_number;
    var movies = moviesJSON.movies;

    if(episode_number >= 1 && episode_number <= 6){
        var movie = movies[episode_number - 1];
        res.render('movie_single', {
            movies: movies,
            title: movie.title,
            movie: movie,
            main_characters: movie.main_characters
        });
    } else {
        res.render('notFound', {
            movies: movies,
            title: "This is not the page you are looking for"
        });
    }
};

// notFound
exports.notFound = function(req, res){

    var movies = moviesJSON.movies;

    res.render('notFound', {
        movies: movies,
        title: "This is not the page you are looking for"
    });
};