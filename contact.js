const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')

// membuat folder data
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json'
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

// melakukan load kontak pada json
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer)
    return contacts
}

const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP}
    const contacts = loadContact()

    // cek duplikat nama
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if (duplikat) {
        console.log(chalk.red.inverse.bold('Kontak sudah terdaftar, gunakan nama lain!'))
        return false
    }

    // cek email 
    if (email) {
        if (!validator.isEmail(email)) {
            console.log(
                chalk.red.inverse.bold('Email tidak valid!')
            )
            return false
        }
    }

    // cek nomor HP
    if (!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor HP tidak valid!'))
        return false
    }

    contacts.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    
    console.log(chalk.green.inverse.bold('Terimakasih sudah memasukkan data.'))
}
// menampilkan daftar kontak
const listContact = () => {
    const contacts = loadContact()
    console.log(chalk.blueBright.inverse.bold('Daftar Kontak :'))
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.nama} - ${contact.noHP}`)
    })
}
// menampilkan detail kontak
const detailContact = (nama) => {
    const contacts = loadContact()
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())

    if (!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`))
        return false
    }
    console.log(chalk.red.inverse.bold(contact.nama))
    console.log(contact.noHP)
    if (contact.email) {
        console.log(contact.email)
    }
}
// menghapus kontak
const deleteContact = (nama) => {
    const contacts = loadContact()

    const newContacts = contacts.filter(
        (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
    )

    if (contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`Nama ${nama} tidak ditemukan`))
        return false
    }
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))
    
    console.log(chalk.green.inverse.bold(`Data kontak ${nama} berhasil dihapus`))
}

module.exports = {simpanContact, listContact, detailContact, deleteContact}