function phoneBook(data) {

    let book = {};

    for (let line of data) {
        let [name, number] = line.split(' ')
        book[name] = number;
    }
    for (let person in book) {
        console.log(`${person} -> ${book[person]}`);
    }
}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)