const mod = require('custom_module');

// Додавання потягів
let t1 = mod.add_Train("001", "From_1", "To_1", 800);
let t2 = mod.add_Train("002", "From_2", "To_2", 1200);
let t3 = mod.add_Train("003", "From_3", "To_3", 1200);

// Список потягів
mod.get_Trains_List();

// Видалення потягу
console.log("Видалення потягу: 002");
mod.remove_Train("002", "From_2", "To_2", 1200);

// Список потягів
mod.get_Trains_List();

// Зміна потягу
console.log("Зміна потягу: 003");
mod.edit_Train("003", "From_3", "To_3", 1200, "003 (new)", "From_3 (new)", "To_3 (new)", 12);

// Список потягів
mod.get_Trains_List();

// Пошук потягів
let train1 = mod.find_Train("001", "From_1", "To_1", 800);
console.log(`Пошук потягу 001: ${train1 !== -1 ? "знайдено" : "не знайдено"}`);
let train2 = mod.find_Train("005", "From_5", "To_5", 600);
console.log(`Пошук потягу 005: ${train2 !== -1 ? "знайдено" : "не знайдено"}`);

////////////////////////////////////////////////////////////////////////////////////

// Покупка пасажиром квитка на потяг
mod.book_Ticket("Олег Тадейович", new Date(1992, 1, 24), t1);
mod.book_Ticket("Олена Романівна", new Date(1975, 6, 17), t1);
mod.book_Ticket("Анна Ігорівна", new Date(2005, 12, 5), t3);

// Список придбаних квитків
mod.get_Tickets_List(t1);
mod.get_Tickets_List(t3);

// Зміна квитка із одного потяга на інший
console.log("\nЗміна квитка із одного потяга на інший");
mod.change_Ticket("Анна Ігорівна", new Date(2005, 12, 5), t3, t1);

// Список придбаних квитків
mod.get_Tickets_List(t1);
mod.get_Tickets_List(t3);

// Скасування покупки квитка на ім'я - Олена Романівна 
console.log("\nСкасування покупки квитка на ім'я - Олена Романівна");
mod.cancel_Ticket("Олена Романівна", new Date(1975, 6, 17), t1);

// Список придбаних квитків потягу 001
mod.get_Tickets_List(t1);

// Пошук потяга на який продали найменше квитків
mod.get_Least_Loaded_Train();

// Пошук потяга на який продали найбільше квитків
mod.get_Most_Loaded_Train();

////////////////////////////////////////////////////////////////////////////////////

// Додавання пасажирів
let passsenger1 = mod.add_Passenger("Олег Тадейович", new Date(1992, 1, 24), t1);
console.log("\n" + `Додавання пасажиру - Олег Тадейович: ${passsenger1 !== -1 ? "додано" : "відстуній квиток"}`);
let passsenger2 = mod.add_Passenger("Анна Ігорівна", new Date(2005, 12, 5), t1);
console.log(`Додавання пасажиру - Анна Ігорівна: ${passsenger2 !== -1 ? "додано" : "відстуній квиток"}`);
let passsenger3 = mod.add_Passenger("Дмитро Михайлович", new Date(2002, 12, 5), t3);
console.log(`Додавання пасажиру - Дмитро Михайлович: ${passsenger3 !== -1 ? "додано" : "відстуній квиток"}`);

// Список пасажирів у потязі 001
mod.get_Passengers_List(t1);

// Список пасажирів у потязі 003
mod.get_Passengers_List(t3);

// Редагування даних пасажиру Анна Ігорівна з потягу 001
console.log("Редагування пасажиру: Анна Ігорівна");
mod.edit_Passenger("Анна Ігорівна", new Date(2005, 12, 5), t1, "Ганна Михайлівна", new Date(1954, 12, 5));

// Список пасажирів у потязі 001
mod.get_Passengers_List(t1);

// Список придбаних квитків потягу 001
mod.get_Tickets_List(t1);

// Видалення пасажиру - Олег Тадейович потягу 001
console.log("Видалення пасажиру - Олег Тадейович");
mod.remove_Passenger("Олег Тадейович", new Date(1992, 1, 24), t1);

// Список пасажирів у потязі 001
mod.get_Passengers_List(t1);

// Список придбаних квитків потягу 001
mod.get_Tickets_List(t1);