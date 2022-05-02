const cl = console.log
const URL = 'http://localhost:3000/employees'

// request all data: promise
fetch(URL)
.then(res => res.json())
.then(res => {
  cl(res)
})