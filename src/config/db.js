import mysql from "serverless-mysql";

export const pool = mysql({
    config: {
        host: "localhost",
        user: "root",
        password: "root",
        port: 3307,
        database: "productDB",
    },
});