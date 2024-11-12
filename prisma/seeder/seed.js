const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const kamar = await prisma.rooms.createMany({
        data: [
            { id: 1, nomor: 'VT1-0301', tipe: 2, villa: 1, status: 'kosong', harga: 600000},
            { id: 2, nomor: 'VT1-0302', tipe: 1, villa: 1, status: 'kosong', harga: 400000},
            { id: 3, nomor: 'VT1-0203', tipe: 3, villa: 1, status: 'kosong', harga: 850000},
            { id: 4, nomor: 'VT1-0204', tipe: 2, villa: 1, status: 'kosong', harga: 600000},
            { id: 5, nomor: 'VT1-0205', tipe: 1, villa: 1, status: 'kosong', harga: 400000},
            { id: 6, nomor: 'VT1-0206', tipe: 3, villa: 1, status: 'kosong', harga: 850000},
            { id: 7, nomor: 'VT1-0307', tipe: 1, villa: 1, status: 'kosong', harga: 400000},
            { id: 8, nomor: 'VT1-0308', tipe: 3, villa: 1, status: 'kosong', harga: 850000},
            { id: 9, nomor: 'VT1-0309', tipe: 2, villa: 1, status: 'kosong', harga: 600000},
            { id: 10, nomor: 'VT1-0310', tipe: 1, villa: 1, status: 'kosong', harga: 400000},
            { id: 11, nomor: 'VT1-B11', tipe: 2, villa: 1, status: 'kosong', harga: 600000},
            { id: 12, nomor: 'VT1-B12', tipe: 3, villa: 1, status: 'kosong', harga: 850000},
            { id: 13, nomor: 'VT1-0113', tipe: 2, villa: 1, status: 'kosong', harga: 600000},
            { id: 14, nomor: 'VT1-0314', tipe: 1, villa: 1, status: 'kosong', harga: 400000},
            { id: 15, nomor: 'VT1-0215', tipe: 3, villa: 1, status: 'kosong', harga: 850000},
            { id: 16, nomor: 'VT2-0301', tipe: 2, villa: 2, status: 'kosong', harga: 600000},
            { id: 17, nomor: 'VT2-0302', tipe: 1, villa: 2, status: 'kosong', harga: 400000},
            { id: 18, nomor: 'VT2-0303', tipe: 3, villa: 2, status: 'kosong', harga: 850000},
            { id: 19, nomor: 'VT2-0304', tipe: 2, villa: 2, status: 'kosong', harga: 600000},
            { id: 20, nomor: 'VT2-0205', tipe: 1, villa: 2, status: 'kosong', harga: 400000},
            { id: 21, nomor: 'VT2-0206', tipe: 3, villa: 2, status: 'kosong', harga: 850000},
            { id: 22, nomor: 'VT2-0207', tipe: 1, villa: 2, status: 'kosong', harga: 400000},
            { id: 23, nomor: 'VT2-0208', tipe: 3, villa: 2, status: 'kosong', harga: 850000},
            { id: 24, nomor: 'VT2-0109', tipe: 2, villa: 2, status: 'kosong', harga: 600000},
            { id: 25, nomor: 'VT2-0110', tipe: 2, villa: 2, status: 'kosong', harga: 600000},
            { id: 26, nomor: 'VT2-0111', tipe: 2, villa: 2, status: 'kosong', harga: 600000},
            { id: 27, nomor: 'VT2-LOBBY', tipe: 2, villa: 2, status: 'kosong', harga: 600000},
            { id: 28, nomor: 'VT1-BALCONY', tipe: 2, villa: 1, status: 'kosong', harga: 600000},
            { id: 29, nomor: 'VT1-BALCONY2', tipe: 2, villa: 1, status: 'kosong', harga: 600000},
        ]
    })
    console.log(kamar)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })