// import gamesAdd from "./gamesAdd";
// import { logGames } from "./logger";

// gamesAdd();

// logGames();

import { PubSubManager } from "./PubSubManager";

setInterval(() => {
    PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);
