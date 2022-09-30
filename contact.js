const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// membuat folder data
const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}


const pertanyaan = (tanya) => {
    return new Promise((resolve, reject) => {
        rl.question(tanya, (nama) => {
            resolve(nama)
        })
    })
}

const simpanContact = (nama, noHP, email) => {
    const contact = {nama, noHP, email}
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer)

    contacts.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    
    console.log('Terimakasih sudah memasukkan data.')
    rl.close()
}

module.exports = {pertanyaan, simpanContact}