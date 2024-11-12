const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient

export async function getReservation() {
    const reservation = await prisma.reservations.findMany();
    return reservation;
}

export async function getByDate(date) {
    date = new Date(date);
    console.log(date);
    const data = await prisma.reservations.findMany({
        where: {
            AND: [
                {
                    masuk: {
                        lte: date
                    },
                }, 
                {
                    keluar: {
                        gte: date
                    }
                }
            ]
        }
    })
    return data;
}

export async function newReservation(data) {
    data.id_ruangan = parseInt(data.id_ruangan);
    data.dp = parseInt(data.dp);
    data.masuk = new Date(data.masuk);
    data.keluar = new Date(data.keluar);
    data.id = Date.now() + '' + data.id_ruangan;
    const isexist = await prisma.reservations.findFirst({
        where: {
            OR: [{
                AND: [
                    { masuk: { lte: data.masuk } },
                    { keluar: { gte: data.masuk } },
                    { id_ruangan: data.id_ruangan }
                ]
            },
            {
                AND: [
                    { masuk: { lte: data.keluar } },
                    { keluar: { gte: data.keluar } },
                    { id_ruangan: data.id_ruangan }
                ]
            },
            {
                AND: [
                    { masuk: { gte: data.masuk } },
                    { keluar: { lte: data.keluar } },
                    { id_ruangan: data.id_ruangan }
                ]
            }
            ],
        }

    })
        .then(Boolean)
    if (isexist) {
        //jika ada yang sudah mengambil tanggal
        return { error: 'Tanggal Sudah Diambil' }
    } else {
        //jika belum ada yang mengambil tanggal
        const result = await prisma.reservations.create({
            data: data
        })
        return result
    }
}


