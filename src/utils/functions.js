const search = (input, jsonData=[] , setValue , combination=[]) => {
    
    if(input.length === 0)  return setValue('')

    input = input.toLowerCase().trim()

    const result = jsonData.filter((object) => {

        let combinationQueries = ''

        combination.forEach((key) => {
            combinationQueries += object.hasOwnProperty(key) && object[key].toLowerCase().trim() + " ";
        })

        // console.log("join : ",combinationQueries)
        return Object.keys(object).some((key) => {
            return ( 
                object[key] !== undefined && 
                object[key] !== null &&
                (JSON.stringify(object[key]).toLowerCase().trim().includes(input) ||
                combinationQueries.trim().includes(input))
        )})
    })

    setValue(result)

}

export default search;

// evaluating the gender variations
export const getGenderRatio = (jsonData) => {
    let male = 0
    let female = 0
    let others = 0
    let genderRatio = jsonData?.forEach(obj => {
      const gender = obj?.gender

      if(gender?.toLowerCase() === 'male')
        male += 1
      else if(gender?.toLowerCase()  === 'female')
        female += 1
      else
        others += 1
    })

    console.log('genderRation : ', genderRatio)
    
    return [
      {name: 'male', color: 'green', value: male},
      {name: 'female', color: 'yellow', value: female},
      {name: 'other', color: 'red', value: others},
    ]
}

export const StudentLimitedData = (JsonData) => {
    const data = JsonData.file.map(object => {
        return {
          'id': object.id,
          'username': object?.first_name + ' ' + object?.last_name,   // user ka full name show hoga ab
          'email': object?.email,
          'img': object?.image_url ? object?.image_url : 'none',  // image_url hi hona chahiye
          'amount': object?.amount ? object.amount : 0,
        }
      })

      return data;
}


