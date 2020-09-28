// voice assistant
function getReply(commandRequested) {
    const index = getCommandIndex(commandRequested);

    switch (index) {
        case 0: { greeting(commandRequested); break; }
        case 1: { sayMyName(); break; }
        case 2: { getToday(); break; }
        case 3: { addTodo(commandRequested); break; }
        case 4: { removeTodo(commandRequested); break; }
        case 5: { setTimer(commandRequested); break; }
        default: {
            console.error('Unkown command .. please check again !');
            return;
        }
    }
}

let client = { name: null, todo: [] };

function greeting(commandRequested) {
    commandRequested = commandRequested || "";
    const splittedCommand = commandRequested.split(' ');
    if (splittedCommand.length >= 4) {
        //['my,name,is,maha,{karzoun}]
        //[maha,{karzoun}]
        const clientName = splittedCommand.splice(3, splittedCommand.length).join(' ');

        if (client.name) {
            console.log(`welcone back ${client.name} :D
 `);
        } else {
            console.log(`welcone ${clientName} , Thank you for using my program :)`);
            client.name = clientName;
        }
    }
}

function sayMyName() {
    if (!client.name) {
        console.log('You are not registerd yet ! ');
        return;
    }
    console.log(`You are ${client.name}`);
}

function getToday() {
    const date = new Date();
    console.log(`Today is ${date.getDate()} of ${months[date.getMonth()]}`);
}
function addTodo(commandRequested) {
    const todo = extractTodo(commandRequested);
    client.todo.push(todo);
}

function removeTodo(commandRequested) {
    const todo = extractTodo(commandRequested);
    const todoIndex = client.todo.findIndex(task => task === todo); // strict equality
    if (todoIndex == -1) {
        console.error(`this todo '${todo}' was not found in your list `);
        return;
    }
    client.todo.splice(todoIndex, 1);

}

function extractTodo(commandRequested) {
    commandRequested = commandRequested || "";
    const splittedCommand = commandRequested.split(' ');
    if (splittedCommand.length >= 5) {
        /// ['add','commmand'.... , 'to','my', 'todo']
        /// [commmand'.... , 'to','my', 'todo']
        splittedCommand.splice(0, 1);
        const todo = splittedCommand.slice(0, splittedCommand.length - 3).join(' ');
        return todo;
    }
}

function setTimer(commandRequested) {
    commandRequested = commandRequested || "";
    const splittedCommand = commandRequested.split(' ');
    /// [set a timer for n unit ]
    if (splittedCommand.length === 6) {
        let time = Number.parseInt(splittedCommand[4]);
        const unit = splittedCommand[5];

        if ("minut".includes(unit)) {
            time = time * 60;
        }
        if ("hour".includes(unit)) {
            time = time* 60 * 60;
        }

        setTimeout(() => {
            console.log('Time is up')
        }, time * 1000);
    }

}



function getCommandIndex(commandRequested) {
    for (let command of commands) {
        if (commandRequested.includes(command.pattern))
            return command.id;
    }
    return -1;
}

const commands = [
    { id: 0, pattern: "my name is" },
    { id: 1, pattern: "what is my name" },
    { id: 2, pattern: "today" },
    { id: 3, pattern: "add" },
    { id: 4, pattern: "remove" },
    { id: 5, pattern: "timer " },
]

const months = ["JAN", "FEB", "MAR", "APRLI", "MAY", "JUNE", "JULY", "AUG", "SEP", "OCT", "NOV", "DEC"]


getReply("my name is maha karzuon");
getReply("my name is maha karzuon");
getReply("what is my name");
getReply("what is today");
getReply("add shoppig in the weekend to my todo");
console.log("todo",client.todo)
getReply("remove shoppig in the weekend from my todo");
console.log("todo",client.todo)
getReply("remove playing football from my todo");