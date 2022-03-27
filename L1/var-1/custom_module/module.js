// Підключаємо необхідні файли
const train     = require("./train");
const passenger = require("./passenger");
const ticket    = require("./ticket");

// Доступні операції з потягами
exports.find_Train             = train.find_Train;
exports.add_Train              = train.add_Train;
exports.remove_Train           = train.remove_Train;
exports.edit_Train             = train.edit_Train;
exports.get_Trains_List        = train.get_Trains_List;
exports.get_Least_Loaded_Train = train.get_Least_Loaded_Train;
exports.get_Most_Loaded_Train  = train.get_Most_Loaded_Train;

// Доступні операції з пасажирами
exports.find_Passenger      = passenger.find_Passenger;
exports.add_Passenger       = passenger.add_Passenger;
exports.remove_Passenger    = passenger.remove_Passenger;
exports.edit_Passenger      = passenger.edit_Passenger;
exports.get_Passengers_List = passenger.get_Passengers_List;

// Доступні операції з квитками
exports.book_Ticket         = ticket.book_Ticket;
exports.change_Ticket       = ticket.change_Ticket;
exports.find_Ticket         = ticket.find_Ticket;
exports.cancel_Ticket       = ticket.cancel_Ticket;
exports.get_Tickets_List    = ticket.get_Tickets_List;