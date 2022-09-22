const getUsers = async () => {
  const api = 'https://jsonplaceholder.typicode.com/users'
  const res = await fetch(api)
  const data = await res.json()
  // console.log(data)
  const users = await data
    .filter(user => user.name.toLowerCase().includes('k'))
    .map(({name, email}) => ({name, email}))

    // const result = json
    //   .filter(v=>v.name.toLowerCase().includes('k'))
    //   .map(v=>({name:v.name,email:v.email}))
  return users
}

(async function() {
  try{
   console.log(await getUsers())   
      
  }catch(err){
      console.log(err)
  }
})();