const cl = console.log
const URL = 'http://localhost:3000/employees'
const button = document.getElementById("add")

// fetch(URL)
// .then(res => {
//   cl(res)
// })

function getEmployeeData() {
// request all data: promise
fetch(URL)
.then(res => res.json())
.then(res => {
  cl(res)
})
}

function addEmployee() {
  const data = {
    id: 7,
    fullName: "Va Laki",
    city: "Budapest",
    salary: 3000,
  }
  
  fetch(URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
  .then(res => cl(res))
}

getEmployeeData()

button.addEventListener('click', addEmployee)