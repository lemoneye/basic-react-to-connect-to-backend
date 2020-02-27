import React from 'react'; // step 1

// step 2 make a function
const MyComponent = ({text="default value"}) => { // props is read only
    
    // axios.post(`/update?key=${text}`,text)
    // .then((res) =>{

    // })
    //.catch()
    // Step4 return some jsx
    return (
        <div>
           {text}
        </div>
    );
};

// step3 export


export default MyComponent; // Makes MyComponent available to all other files in this directory