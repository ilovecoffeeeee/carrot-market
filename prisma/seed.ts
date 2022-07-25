import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main(){
    [...Array.from(Array(50).keys())].forEach(async (item) =>{
        const stream = await client.stream.create({
            data: {
                name: String(item),
                description: String(item),
                price: item,
                user: {
                    connect: {
                        id: 10,
                    },
                },
            },
        });
        console.log(`${item}/50`)
    });
}

main().catch(e => console.log(e)).finally(() => client.$disconnect());