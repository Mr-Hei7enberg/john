import "./styles/index.scss"

const data = {
    offices: 12,
    workers: 20,
    mainOffice: "Kiev",
    speciality: "BTI"
}

const anotherData = {
    ...data,
    cheafOfficer: "VU"
}

console.log(data);
console.log(anotherData);