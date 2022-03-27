// Клас - потяг
class Train {

    no;
    source;
    destination;
    capacity;

    constructor (no, source, destination, capacity) {
    
        this.no = no;
        this.source = source;
        this.destination = destination;
        this.capacity = capacity;

        this.passengers_list = [];
        this.soldTickets_list = [];
    
        if (typeof no === 'undefined') { this.no = "Uknown"; }
        if (typeof source === 'undefined') { this.source = "Uknown"; }
        if (typeof destination === 'undefined') { this.destination = "Uknown"; }
        if (typeof capacity === 'undefined') { this.capacity = "Uknown"; }
    
    }
    
}

// Список усіх потягів
let global_trains_list = new Array();

// Знайти потяг в колекції
function find_Train (no, source, destination, capacity) {

    for (let train of global_trains_list) {

        if (no === train.no &&
            source === train.source &&
            destination === train.destination && 
            capacity === train.capacity) {

            return train;

        }

    }

    return -1;

}

// Додавання нового потягу
function add_Train (no, source, destination, capacity) {

    let train = new Train(no, source, destination, capacity);
    global_trains_list.push(train);

    return train;

}

// Видалити потяг з колекції
function remove_Train (no, source, destination, capacity) {

    for (let id = 0; id < global_trains_list.length; id++) {

        let train = global_trains_list[id];

        if (no === train.no &&
            source === train.source &&
            destination === train.destination && 
            capacity === train.capacity) {

            global_trains_list.splice(id, 1);
            return 1; 
        
        }

    }

    return -1;

}

// Редагувати потяг в колекції
function edit_Train (no, source, destination, capacity, new_no, new_source, new_destination, new_capacity) {

    for (let id = 0; id < global_trains_list.length; id++) {

        let train = global_trains_list[id];

        if (no === train.no &&
            source === train.source &&
            destination === train.destination && 
            capacity === train.capacity) {


            global_trains_list[id].no = new_no;
            global_trains_list[id].source = new_source;
            global_trains_list[id].destination = new_destination;
            global_trains_list[id].capacity = new_capacity;

            return 1;
        
        }

    }

    return -1;

}

// Отримати список потягів
function get_Trains_List() {

    console.log("\n" + "Список усіх потягів:");

    for (let id = 0; id < global_trains_list.length; id++) {

        let train = global_trains_list[id];
        console.log(`Номер потягу: ${train.no}, місце відправлення: ${train.source}, місце прибуття: ${train.destination}, місць: ${train.capacity}`);

    }

    console.log();
    
    return global_trains_list;

}

// Пошук потяга на який продали найменше квитків
function get_Least_Loaded_Train() {

    if (global_trains_list.length >= 1) {
        
        let least_loaded_train = global_trains_list[0];

        for (let id = 1; id < global_trains_list.length; id++) {
            
            if (global_trains_list[id].soldTickets_list.length < least_loaded_train.soldTickets_list.length) { least_loaded_train = global_trains_list[id] }

        }

        console.log("\n" + `Потяг на який продали найменше квитків (${least_loaded_train.soldTickets_list.length}):` +
            "\n" + `Номер потягу: ${least_loaded_train.no}, місце відправлення: ${least_loaded_train.source}, місце прибуття: ${least_loaded_train.destination}, місць: ${least_loaded_train.capacity}`);

        return least_loaded_train;

    }

    return -1;

}

// Пошук потяга на який продали найбільше квитків
function get_Most_Loaded_Train() {

    if (global_trains_list.length >= 1) {
        
        let most_loaded_train = global_trains_list[0];

        for (let id = 1; id < global_trains_list.length; id++) {
            
            if (global_trains_list[id].soldTickets_list.length > most_loaded_train.soldTickets_list.length) { most_loaded_train = global_trains_list[id] }

        }

        console.log("\n" + `Потяг на який продали найбільше квитків (${most_loaded_train.soldTickets_list.length}):`
            + "\n" + `Номер потягу: ${most_loaded_train.no}, місце відправлення: ${most_loaded_train.source}, місце прибуття: ${most_loaded_train.destination}, місць: ${most_loaded_train.capacity}`);

        return most_loaded_train;

    }

    return -1;

}

// Експортуємо функції
exports.find_Train             = find_Train;
exports.add_Train              = add_Train;
exports.remove_Train           = remove_Train;
exports.edit_Train             = edit_Train;
exports.get_Trains_List        = get_Trains_List;
exports.get_Least_Loaded_Train = get_Least_Loaded_Train;
exports.get_Most_Loaded_Train  = get_Most_Loaded_Train;