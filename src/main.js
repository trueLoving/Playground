const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 3000)
})

p.then(_ => {
  console.log('resolved')
}).catch(_ => {
  console.log('rejected')
}).finally(() => {
  console.log('finally')
})

// output
// resolved
// finally
