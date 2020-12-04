
const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

const calcAvg = (...nums) => {

    if(nums.length === 0){
        return 0
    }

    const total = nums.reduce((prev, curr) => prev+curr, 0)
    const avg = total/nums.length
    return avg
}

module.exports = {
    fullName,
    calcAvg
}