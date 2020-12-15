function myFunction1() {
    let songs = ['Stay High', 'Wishing Well', 'Righteous', 'Dark Queen', 'Cha Cha'];
    console.log(songs[0]);
    console.log(songs[2]);
    songs[4] = 'Happy';
    let jamFour = songs[4];
    console.log(jamFour);
    songs.push('Oui');
    songs.unshift('Dont');
    console.log(songs.length);
    songs.pop();
    console.log(songs.length)
    for(let i = 0; i < songs.length; i++){
        console.log(`${i}, ${songs[i]}`);
    }
    let lastSong = songs.length - 1;
    console.log(lastSong);
}

function myFunction3() {
    let fav = [
        ['action', 'horror', 'comedy'],
        ['Avengers', 'Hardcore Henry', 'Black Panther'],
        ['Insidious', 'The Conjuring', 'Sinister'],
        ['Click', 'Water Boy', 'Forest Gump']
    ];
    console.log(fav[2][1]);
    fav[1][0] = 'Deadpool';
    for(let i = 0; i < fav.length; i++){
        console.log(`${fav[i][0]}, ${fav[i][1]}, ${fav[i][2]}`);
    }
}