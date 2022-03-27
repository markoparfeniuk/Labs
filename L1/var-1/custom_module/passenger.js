// Клас - пасажир 
class Passenger {

    name;
    dateOfBirth;
    ticket;

    constructor(name, dateOfBirth, ticket) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;;
        this.ticket = ticket;

        if (typeof(name) === undefined) {
            this.name = 'Unknown';
        }
    }
}


// Знайти пасажира в колекції
function find_Passenger (name, dateOfBirth, train) {

    for (let id = 0; id < train.passengers_list.length; id++) {

        let passenger = train.passengers_list[id];

        if (name === passenger.name &&
            dateOfBirth.toISOString() === passenger.dateOfBirth.toISOString()) { return passenger; }

    }

    return -1;

}

// Додавання нового пасажира
function add_Passenger (name, dateOfBirth, train) {

    for (let ticket of train.soldTickets_list) {

        if (name === ticket.passenger_name &&
            dateOfBirth.toISOString() === ticket.passenger_dateOfBirth.toISOString()) { 
            
            let passenger = new Passenger(name, dateOfBirth, ticket);
            train.passengers_list.push(passenger);
        
            return passenger;

        }

    }

    return -1;

}

// Видалення пасажира з потяга
function remove_Passenger (name, dateOfBirth, train) {

    let passenger = find_Passenger(name, dateOfBirth, train);

    if (passenger === -1) {

        return -1; 

    }

    let passenger_id = train.passengers_list.indexOf(passenger);
    let ticket_id = train.soldTickets_list.indexOf(passenger.ticket);
    train.passengers_list.splice(passenger_id, 1);
    train.soldTickets_list.splice(ticket_id, 1);

    return 1;

}

// Редагувати пасажира в потязі
function edit_Passenger (name, dateOfBirth, train, new_name, new_dateOfBirth) {

    let passenger = find_Passenger(name, dateOfBirth, train);

    if (passenger === -1) {
        
        return -1;
    
    }

    let passenger_id = train.passengers_list.indexOf(passenger);
    let ticket_id = train.soldTickets_list.indexOf(passenger.ticket);
    
    train.passengers_list[passenger_id].name = new_name;
    train.passengers_list[passenger_id].dateOfBirth = dateOfBirth;
    train.soldTickets_list[ticket_id].passenger_name = new_name;
    train.soldTickets_list[ticket_id].passenger_dateOfBirth = new_dateOfBirth;

    return 1;

}

// Отримати список пасажирів у конкретнтому потязі
function get_Passengers_List (train) {

    console.log("\n" + `Список усіх пасажирів у потязі ${train.no}:`);

    for (let id = 0; id < train.passengers_list.length; id++) {

        let passenger = train.passengers_list[id];
        console.log(`\tІм'я пасажира: ${passenger.name}, д.н.: ${passenger.dateOfBirth.toISOString()}`);

    }

    console.log();
    
    return train.passengers_list;

}

// Експортуємо функції
exports.find_Passenger      = find_Passenger;
exports.add_Passenger       = add_Passenger;
exports.remove_Passenger    = remove_Passenger;
exports.edit_Passenger      = edit_Passenger;
exports.get_Passengers_List = get_Passengers_List;