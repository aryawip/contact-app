const yargs = require('yargs')
// const {simpanContact} = require('./contact')
const contacts = require('./contact')

yargs.command ({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        }, 
        noHP: {
            describe: 'Nomor HP',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP)
    }
})

yargs.parse();



// const contacts = require('./contact')

// const main = async () => {
//     const nama = await contacts.pertanyaan('Masukkan nama anda : ')
//     const noHP = await contacts.pertanyaan('Masukkan no HP anda : ')
//     const email = await contacts.pertanyaan('Masukkan email anda : ')

//     contacts.simpanContact(nama, noHP, email)
// }

// main();