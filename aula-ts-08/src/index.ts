/* 
Exercício 8: 

const game: {
    id: number;
    platform: {
        id: number;
        name: string;
    };
    title: string;
    publisher: string;
    launch?: string | Date;
  } = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. também pode ser vazio
  }
  
  const games: {
    id: number;
    platform: {
        id: number;
        name: string;
    };
    title: string;
    publisher: string;
    launch?: string | Date;
  }[]  = [game];
  
  function play(game: {
    id: number;
    platform: {
        id: number;
        name: string;
    };
    title: string;
    publisher: string;
    launch?: string | Date;
  } ){
    // runs the game
    console.log(game);
  }

  */

type TheGame = {
  id: number;
  platform: {
      id: number;
      name: string;
  };
  title: string;
  publisher: string;
  launch?: string | Date;
}

const game: TheGame = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}

const games: TheGame[] = [game];

function play(game: TheGame): void {
    // runs the game
    console.log(game);
}
