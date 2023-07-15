/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((employee) => {
        if (employee.profession == "developer") {

            console.log(employee.name);

        }
    });
}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee) => {
        if (employee.profession == "developer") {

            console.log(employee.name);

        }
    })
}

function addData() {
    //Write your code here, just console.log
    const obj = { id: 4, name: "susan", age: "20", profession: "intern" }
    arr.push(obj);
    console.log(`${obj.id} ${obj.name} ${obj.age} ${obj.profession}`);
}

function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter((employee) => {
        if (employee.profession != "admin") {
            return employee;
        }

    })
    console.log(arr);
}

function concatenateArray() {
    //Write your code here, just console.log
    let new_arr = [
        { id: 5, name: "ram", age: "17", profession: "manager" },
        { id: 6, name: "shyam", age: "16", profession: "software engineer" },
        { id: 7, name: "sam", age: "15", profession: "qa engineer" },
    ];
    console.log(arr.concat(new_arr));

}
