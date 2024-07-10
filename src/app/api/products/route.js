import {pool} from "src/config/db";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        const results = await pool.query("SELECT * FROM product");
        return NextResponse.json(results);
    } catch (error) {
        return NextResponse.json(
            {message: error.message},
            {
                status: 500,
            }
        );
    }
}