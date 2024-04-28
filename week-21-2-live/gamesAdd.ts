import { GameManager } from "./GameManager";

const gm = GameManager.getInstance();

export default function gamesAdd() {
    let count = 0;
    setInterval(() => {
        gm.addGame({
            id: count.toString(),
            blackPlayer: "alice",
            whitePlayer: "bob",
            moves: [],
        });
        count++;
    }, 3000);
}
