// Клас - квиток 
class Ticket {

    pnr;
    passenger_name;
    passenger_dateOfBirth;
    train;

    constructor(passenger_name, passenger_dateOfBirth, train) {
        
        this.pnr = Math.floor(Math.random() * (9999 - 1000)) + 1000;
        this.passenger_name = passenger_name;
        this.passenger_dateOfBirth = passenger_dateOfBirth;
        this.train = train;

        if (typeof train === 'undefined') { this.train = 'Unknown' }
        if (typeof passenger_name === 'undefined') { this.passenger_name = 'Unknown' }
        if (typeof passenger_dateOfBirth === 'undefined') { this.passenger_dateOfBirth = 'Unknown' }

    }
}


// Знайти квиток в колекції
function find_Ticket (passenger_name, passenger_dateOfBirth, train) {

    for (let ticket of train.soldTickets_list) {

        if (passenger_name === ticket.passenger_name &&
            passenger_dateOfBirth.toISOString() === ticket.passenger_dateOfBirth.toISOString()) { return ticket; }

    }

    return -1;

}

// Придбати квиток
function book_Ticket (passenger_name, passenger_dateOfBirth, train) {

    if (train.passengers_list.length < train.capacity) {
        
        let ticket = new Ticket(passenger_name, passenger_dateOfBirth, train);
        train.soldTickets_list.push(ticket);

        return ticket;

    }

    return -1;

}

// Скасування покупки квитка
function cancel_Ticket (passenger_name, passenger_dateOfBirth, train) {

    for (let passenger of train.passengers_list) {

        if (passenger_name === passenger.name &&
            passenger_dateOfBirth.toISOString() === passenger.dateOfBirth.toISOString()) { 
                
            return -1;

        }

    }

    let ticket = find_Ticket(passenger_name, passenger_dateOfBirth, train);

    if (ticket === -1) {

        return -1; 

    }

    let ticket_id = train.soldTickets_list.indexOf(ticket);
    train.soldTickets_list.splice(ticket_id, 1);
    
    return 1;

}

// Зміна квитка із одного потяга на інший
function change_Ticket (passenger_name, passenger_dateOfBirth, train, new_train) {

    for (let passenger of train.passengers_list) {

        if (passenger_name === passenger.name &&
            passenger_dateOfBirth.toISOString() === passenger.dateOfBirth.toISOString()) { 
                
            return -1;

        }

    }

    let new_ticket = book_Ticket(passenger_name, passenger_dateOfBirth, new_train);
    
    if (new_ticket !== -1) {

        cancel_Ticket(passenger_name, passenger_dateOfBirth, train);
        return new_ticket;

    }

    return -1;

}

// Отримати список придбаних квитків
function get_Tickets_List (train) {

    console.log("\n" + `Список усіх придбаних квитків потягу ${train.no}:`);

    for (let id = 0; id < train.soldTickets_list.length; id++) {

        let ticket = train.soldTickets_list[id];
        console.log(`\tPRN: ${ticket.prn}, ім'я пасажира: ${ticket.passenger_name}, д.н. пасажира: ${ticket.passenger_dateOfBirth.toISOString()}`);

    }

    console.log();
    
    return train.soldTickets_list;

}

// Експортуємо функції
exports.book_Ticket      = book_Ticket;
exports.change_Ticket    = change_Ticket;
exports.find_Ticket      = find_Ticket;
exports.cancel_Ticket    = cancel_Ticket;
exports.get_Tickets_List = get_Tickets_List;