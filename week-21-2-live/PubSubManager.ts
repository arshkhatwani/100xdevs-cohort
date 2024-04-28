import { createClient, RedisClientType } from "redis";

export class PubSubManager {
    private static instance: PubSubManager;
    private redisClient: RedisClientType;
    private subscriptions: Map<string, string[]>;

    private constructor() {
        this.redisClient = createClient();
        this.redisClient.connect();
        this.subscriptions = new Map();
    }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new PubSubManager();
        }
        return this.instance;
    }

    public userSubscribe(userId: string, stock: string) {
        if (!this.subscriptions.has(stock)) {
            this.subscriptions.set(stock, []);
        }
        this.subscriptions.get(stock)?.push(userId);

        if (this.subscriptions.get(stock)?.length === 1) {
            this.redisClient.subscribe(stock, (message) => {
                this.handleMessage(stock, message);
            });
            console.log("Subscribed to message channel", stock);
        }
    }

    private handleMessage(stock: string, message: string) {
        console.log(`Message (${message}) received on channel (${stock})`);
        this.subscriptions.get(stock)?.forEach((userId) => {
            console.log("Sending message to user:", userId);
        });
    }

    public userUnsubscribe(userId: string, stock: string) {
        this.subscriptions.set(
            stock,
            this.subscriptions.get(stock)?.filter((sub) => sub !== userId) || []
        );

        if (this.subscriptions.get(stock)?.length == 0) {
            this.redisClient.unsubscribe(stock);
            console.log("Unsubscribed to message channel", stock);
        }
    }

    public async disconnect() {
        await this.redisClient.quit();
    }
}
