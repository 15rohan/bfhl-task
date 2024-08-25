import React, {useState} from 'react'


const homepage = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [json, setJson]= useState('') 
    const [isValidJson, setIsValidJson] = useState(null);
    const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.includes(category)
            ? prevSelectedOptions.filter((c) => c !== category)  
            : [...prevSelectedOptions, category]  
        );
      };
      const filteredOptions = options.filter((option) =>
        selectedOptions.length === 0 || selectedOptions.includes(option.category)
      );
      
  const handleOutput= async(e)=>{
    e.preventDefault()
    if (isValidJson==true){
        try {
            const response = await fetch('http://localhost:8080/api/v1/bfhl', {
              method: 'GET',
            });
            
            if (response.status==200){
                for (let i=0; i<selectedOptions.length; i++){
                    document.getElementById(text).innerText(`response.${selectedOptions[i]}`)
                }
            }
        }
        catch(err){
            console.log(err)
        }
    }
}
  return (
    <div className='flex flex-col width-100 justify-center'>
    <form onSubmit={handleOutput}>
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="json">
              Enter API Input
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="json"
              type="text"
              required
              placeholder="Enter your json"
              value={json}
              onChange={(e) =>{setJson(e.target.value)
              }}
            />
   
   <div>
      <div>
        {options.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              checked={selectedOptions.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

    </div>
      <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
    </form>
    <h1 id='text'></h1>
    </div>
  )
}

export default homepage