const contacts = require('./contact')

const main = async () => {
    const nama = await contacts.pertanyaan('Masukkan nama anda : ')
    const noHP = await contacts.pertanyaan('Masukkan no HP anda : ')
    const email = await contacts.pertanyaan('Masukkan email anda : ')

    contacts.simpanContact(nama, noHP, email)
}

main();