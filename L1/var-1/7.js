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

// // Видалення пасажирів
// console.log("Видалення пасажира: Надія Володимірна");
// mod.remove_Passenger("Надія Володимірна", 24, t1);

// // Список пасажирів у потязі 001
// mod.get_Passengers_List(t1);

// // Редагування даних пасажиру
// console.log("Редагування пасажиру: Анна Ігорівна");
// mod.edit_Passenger("Анна Ігорівна", 17, t1, "Анна Михайлівна", 17, t1);

// // Список пасажирів у потязі 001
// mod.get_Passengers_List(t1);

// // Пошук пасажирів
// let pass1 = mod.find_Passenger("Дмитро Іванович", 54, t1);
// console.log(`Пошук пасажиру - Дмитро Іванович: ${pass1 !== -1 ? "знайдено" : "не знайдено"}`);
// let pass2 = mod.find_Passenger("Ольга Михайлівна", 24, t1);
// console.log(`Пошук пасажиру - Ольга Михайлівна: ${pass2 !== -1 ? "знайдено" : "не знайдено"}`);

// //////////////////////////////////////////////////////////////////////////////////

// let pass1 = mod.find_Train("001", "From_1", "To_1", 800);
// console.log(`Пошук потягу 001: ${train1 !== -1 ? "знайдено" : "не знайдено"}`);
// let pass2 = mod.find_Train("005", "From_5", "To_5", 600);
// console.log(`Пошук потягу 005: ${train2 !== -1 ? "знайдено" : "не знайдено"}`);


// mod.get_Tickets_List();

// mod.add_Patient("Ю. Остапчук", 29, hosp1);
// mod.add_Patient("Г. Сковорода", 103, hosp1);

// // Список пацієнтів у лікарні Hospital_1
// mod.get_Patients_List(hosp1);

// // Виписування пацієнтів
// console.log("Виписування пацієнтів: А. Фролов");
// mod.remove_Patient("А. Фролов", 13, hosp1);

// // Список пацієнтів у лікарні Hospital_1
// mod.get_Patients_List(hosp1);

// // Редагування пацієнтів
// console.log("Редагування пацієнтів: Г. Сковорода");
// mod.edit_Patient("Г. Сковорода", 103, hosp1, "О. Хітинська", 54);

// // Список пацієнтів у лікарні Hospital_1
// mod.get_Patients_List(hosp1);

// // Пошук пацієнтів
// let pat1 = mod.find_Patient("Ю. Остапчук", 29, hosp1);
// console.log(`Пошук пацієнта - Ю. Остапчук: ${hosp1 !== -1 ? "знайдено" : "не знайдено"}`);
// let pat2 = mod.find_Patient("О. Біда", 32, hosp1);
// console.log(`Пошук пацієнта - О. Біда: ${hosp2 !== -1 ? "знайдено" : "не знайдено"}`);

// Інструкція написання власних модулів для node.js
// https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module-ru

// Використвуємо Node.js, Require та Exports
// https://habr.com/ru/post/217901/