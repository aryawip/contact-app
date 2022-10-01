const { type } = require('os')
const { describe, demandOption, string } = require('yargs')
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
}).demandCommand()

// menampilkan daftar semua kontak
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan no HP kontak',
    handler() {
        contacts.listContact();
    }
})

// menampilkan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama)
    }
})

yargs.parse()