function solution(genres, plays) {
    let answer = [];
    
    const map = new Map();
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if (!map.has(genre)) {
            map.set(genre, { totalPlays: 0, songs: []});
        }
        
        const data = map.get(genre);
        data.totalPlays += play;
        data.songs.push({ id: i, plays: play});
    }
    
    const sortedGenres = [...map.entries()].sort((a, b) => b[1].totalPlays - a[1].totalPlays);

    console.log(sortedGenres);
    for (const [genre, info] of sortedGenres) {
        const sortedSongs = info.songs.sort((a, b) => {
            if (a.plays === b.plays) return a.id - b.id;
            return b.plays - a.plays;
        })
        
        answer.push(...sortedSongs.map(song => song.id).slice(0, 2));
    }
    
    return answer;
}