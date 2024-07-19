import mysql from "serverless-mysql";

export const pool = mysql({
    config: {
        // host: "localhost",
        // user: "root",
        // password: "S3cret",
        // port: 3307,
        // database: "productDB",

        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
    },
});