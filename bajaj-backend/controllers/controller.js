const { StatusCodes } = require('http-status-codes')

const getOpCode = async (req, res) => {
    res.status(StatusCodes.OK).json({ "operation_code": 1 })
}

const sendDetails = async (req, res) => {
    let { data } = req.body 

    const numbers = []
    const alphabets = []
    let highestLowercase = ''

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        }
        else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (item === item.toLowerCase()) {
                // Update highest lowercase alphabet
                if (highestLowercase === '' || item > highestLowercase) {
                    highestLowercase = item;
                }
            }
        }
    })

    const details = {
        is_success: true,
        user_id: "rohan_singhal_15102002",
        email: "rohan.singhal2021@vitstudent.ac.in",
        roll_number: "21BCE5923",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    }

    res.status(StatusCodes.OK).json(details)
}

module.exports = {
    getOpCode,
    sendDetails
}