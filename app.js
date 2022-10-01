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