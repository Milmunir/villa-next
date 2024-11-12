const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

export async function getRoom() {
    const reservation = await prisma.reservations.findMany();
    return reservation;
}

export async function getByDate(date) {
    const data = await prisma.reservation.findMany({
        where: {
            masuk: {
                gte: date
            },
            keluar: {
                lte: date
            }
        }
    })
    return data;
}


