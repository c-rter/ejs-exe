// List of Road Connections

const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];

// Graph Builder

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);


/* { 'Alice\'s House': [ 'Bob\'s House', 'Cabin', 'Post Office' ],
  'Bob\'s House': [ 'Alice\'s House', 'Town Hall' ],
  Cabin: [ 'Alice\'s House' ],
  'Post Office': [ 'Alice\'s House', 'Marketplace' ],
  'Town Hall': [ 'Bob\'s House', 'Daria\'s House', 'Marketplace', 'Shop' ],
  'Daria\'s House': [ 'Ernie\'s House', 'Town Hall' ],
  'Ernie\'s House': [ 'Daria\'s House', 'Grete\'s House' ],
  'Grete\'s House': [ 'Ernie\'s House', 'Farm', 'Shop' ],
  Farm: [ 'Grete\'s House', 'Marketplace' ],
  Shop: [ 'Grete\'s House', 'Marketplace', 'Town Hall' ],
  Marketplace: [ 'Farm', 'Post Office', 'Shop', 'Town Hall' ] } */

// Village State Class

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, address: p.address };
            });
            console.log(`Packages on hand: ${JSON.stringify(parcels.filter(p => p.place == destination))}`);
            for (let p of parcels) {
                if (p.place == p.address) {
                    console.log(`Packages dropped off: "${JSON.stringify(p)}"`);
                }
            }
            parcels = parcels.filter(p => p.place != p.address);

            return new VillageState(destination, parcels);
        }
    }
}

// Function to Run Various Types of Robots

function runRobot(state, robot, memory) {
    console.log(`Current State: ${JSON.stringify(state)}`);
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            return turn;
        }
        let action = robot(state, memory);
        console.log(`Moved to ${action.direction}`);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`-----------------------------------------------------`);
    }
}

// Randomizer Function

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

// Create a Random State

VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address });
    }
    // console.log(parcels);
    return new VillageState("Post Office", parcels);
};


// Robot Type III - Smart Route Calculator ----------

/* { 'Alice\'s House': [ 'Bob\'s House', 'Cabin', 'Post Office' ],
  'Bob\'s House': [ 'Alice\'s House', 'Town Hall' ],
  Cabin: [ 'Alice\'s House' ],
  'Post Office': [ 'Alice\'s House', 'Marketplace' ],
  'Town Hall': [ 'Bob\'s House', 'Daria\'s House', 'Marketplace', 'Shop' ],
  'Daria\'s House': [ 'Ernie\'s House', 'Town Hall' ],
  'Ernie\'s House': [ 'Daria\'s House', 'Grete\'s House' ],
  'Grete\'s House': [ 'Ernie\'s House', 'Farm', 'Shop' ],
  Farm: [ 'Grete\'s House', 'Marketplace' ],
  Shop: [ 'Grete\'s House', 'Marketplace', 'Town Hall' ],
  Marketplace: [ 'Farm', 'Post Office', 'Shop', 'Town Hall' ] } */

function findRoute(graph, from, to) {
    // console.log(`From: ${from}, To: ${to}`)
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) {
                // console.log(work);
                return route.concat(place);
            }
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}

// function finds picks up first parcel in array of parcels, then delivers 1 by 1. If it already has picked up the first parcel, it goes directly to delivery location. 

function goalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
            // Finds a route to the first parcel if none are currently carried
        } else {
            route = findRoute(roadGraph, place, parcel.address);
            // Finds a route for the first parcel in an array's destination, if carried
        }
    }
    console.log(`Current Route: ${route}`);
    return { direction: route[0], memory: route.slice(1) };
}
// --------------------------------------------------------


// Robot Type IV - More Efficient Robot ----------


function findRoute2(graph, from, to) {
    console.log(`From: ${from}, To: ${to}`)
    let work = [{ at: from, route: [] }];
    let optimalRoute = [];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) {
                let finalRoute = route.concat(place);
                optimalRoute.push(finalRoute);
            }
            if (!work.some(w => w.at == place) && place != to) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
    console.log(`Optimal Routes: ${JSON.stringify(optimalRoute)}`);
    let trulyOptimal = optimalRoute.reduce((a, b) => a.length > b.length ? b : a);
    console.log(`Truly Optimal:${trulyOptimal}`);
    return trulyOptimal;
}

function goalOrientedRobot2({ place, parcels }, route) {
    if (route.length == 0) {
        let parcelPack = parcels;
        for (parcel of parcelPack) {
            if (parcel.place != place) {
                route = findRoute2(roadGraph, place, parcel.place);
                console.log(`Current Route: ${route}`);
                return { direction: route[0], memory: route.slice(1) };
                // Finds a route to the first parcel if none are currently carried
            }
        }

        route = findRoute2(roadGraph, place, parcelPack[0].address);

        // Finds a route for the first parcel in an array's destination, if carried
        //}
    }
    console.log(`Current Route: ${route}`);
    return { direction: route[0], memory: route.slice(1) };

}



// --------------------------------------------------------


function compareRobots(robot1, memory1, robot2, memory2) {

    let robo1count = 0;
    let robo2count = 0;
    let currentState;

    for (i = 0; i < 100; i++) {
        currentState = VillageState.random();
        robo1count += runRobot(currentState, robot1, memory1);
        robo2count += runRobot(currentState, robot2, memory2);
    }
    console.log(robo1count);
    console.log(robo2count);
    console.log(`Robot 1 Average: ${robo1count / 100}`);
    console.log(`Robot 2 Average: ${robo2count / 100}`);
}

compareRobots(goalOrientedRobot, [], goalOrientedRobot2, []);