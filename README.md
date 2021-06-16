# Pictionary

`Phase: Development`

This application digitizes the traditional game of Pictionary by making players compete online
The rules of the game are simple

- A Random player is choosen and is given a word
- The player than has to illustrate something based on the word s/he has recieved
- Other players in the room should guess what the player is drawing
- If other any of the other players are able to guess, they are rewarded with a point based on the timing of guess
- The player who is drawing also will be awarded if atleast one player is able to guess the word
- The player with most points in the end, wins.

## Features

- Drawing and Erasing strokes on the canvas
- **Real Time** sharing of the drawing and Erasing
- **Real Time** background and stroke color change
- **Real Time** chat with other players
- **Real Time** user join/leave notification

## Tech Stack

**Client:** PUG, HTML5 Canvas, CSS 3, Vanilla JavaScript

**Server:** Node, Express, Socket.IO

## [Demo](https://pictionary-suparth.herokuapp.com/)

The project is in development phase. Thus, if any bug is encountered, feel free to create an issue in GitHub.

# Screenshots

### Realtime Drawing Sharing

![Realtime System](https://i.ibb.co/bzDZmb0/gif.gif)

### Home Page

![Home Page](https://i.ibb.co/rMcg2hm/Home-Page.png)

### Draw Pad

![Draw Pad](https://i.ibb.co/YR686h8/Draw-Pad.png)

### Chat

![Chat](https://i.ibb.co/mC34vrf/Chat.png)

### Users

![Users](https://i.ibb.co/fG0zxtf/users.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/suparthghimire/pictionary.git
```

Go to the project directory

```bash
  cd pictionary
```

Install dependencies

```bash
  npm install express socket.io pug dotenv
```

Create a .env File

```bash
  touch .env
```

The Env File only has a PORT variable

```env
    PORT = 3000
```

Start the server

```bash
  npm run dev
```

## Contact Developer

[Gmail](mailto:suparthnarayanghimire2014@gmail.com)
[LinkedIn](https://linkedin.com/in/suparth)
[Instagram](https://instagram.com/suparth.ghimire)
[Facebook](https://facebook.com/suparth.ghimire2)
