const func = (song: Song) => {
    return song.name.toUpperCase();
}

interface Song {
    name: string;
}

const user = func({ name: "John" });
