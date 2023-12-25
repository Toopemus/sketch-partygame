# Drawing game app

mobile app made with react native to manage a simple pen-and-paper party game.

## Rules

- all players except one get assigned the same word
- one of the players, instead of getting assigned a word, learns that they are an 'impostor'
- the players start to draw the word on paper in small increments, each on their own turn
- the impostor's task is to pretend to know the word, avoiding getting caught by the other players
- once the image is recognisable, players point to the player they believe to be the impostor
- distribution of points:
    - if a player correctly identifies the impostor, they get a point
    - the impostor gets a point for each player player they managed to fool

## How can the app help?

the app randomizes a word for each round. the players can then pass around the phone to each player,
where the app then either gives the word, or notifies the player of their status as the impostor. after
each round the app can be used to manage player scores.

