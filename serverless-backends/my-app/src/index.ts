import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
    console.log(c.req.header("Authorization"));
    console.log(c.req.query("param1")); // get single param
    console.log(c.req.query()); // get entire query params

    return c.json({
        message: "You sent a GET request",
        authHeader: c.req.header("Authorization"),
        query: c.req.query(),
    });
});

app.post("/", async (c) => {
    const reqBody = await c.req.json();
    console.log(reqBody);

    return c.json({
        message: "You sent a POST request",
        reqBody: reqBody,
    });
});

app.get("/:name", async (c) => {
    const params = c.req.param();
    console.log(params);

    return c.json({
        message: `Your name is ${params.name}`,
    });
});

export default app;
