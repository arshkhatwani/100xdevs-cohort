import { GameManager } from "./GameManager";

const gm = GameManager.getInstance();

export function logGames() {
    setInterval(() => {
        gm.logState();
    }, 1000);
}
