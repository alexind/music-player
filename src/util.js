import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Shine",
      artist: "Ruck P, The Kount",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-300x300.jpg",
      id: uuidv4(),
      active: true,
      color: ["#BA4A46", "#FDF0DD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20565",
    },

    {
      name: "Places",
      artist: "Ruck P",
      id: uuidv4(),
      active: false,
      color: ["#BA4A46", "#FDF0DD"],
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-300x300.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20563",
    },
  ];
}

export default chillHop;
