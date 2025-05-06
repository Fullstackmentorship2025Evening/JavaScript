const fetchapi = async (url)=>{
      const response = await fetch(url)
      if(!response.ok){
            throw new Error('xogta server ka lama hayo fadlan iska hubi url ka')
      }
      const data = await response.json()
      console.log(data)
      return data
};

fetchapi('https://jsonplaceholder.typicode.com/users')