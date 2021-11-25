import { useState } from "react";

function Create({create}) {

    const [inputs, setInputs] = useState ({
        registration_code: "",
        is_busy: "",
        last_use_time: "",
        total_ride_kilometers: "",
    })

    const formControl = (e, what) => {
        const inputsCopy = { ...inputs};
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    const handleCreate = () => {
        create(inputs);
        setInputs({
            registration_code: "",
            is_busy: "",
            last_use_time: "",
            total_ride_kilometers: ""

        })

    }

    return (
        <div className="scooter_form">
            <h2>Add another scooter</h2>
            <div className="scooter_form_input">
                <span>Registration Code</span><input type="text" value={inputs.registration_code} onChange={(e) => formControl(e, 'registration_code')} />
            </div>
            <div className="scooter_form_input">
                <span>Is Busy</span><input type="text" value={inputs.is_busy} onChange={(e) => formControl(e, 'is_busy')} />
            </div>
            <div className="scooter_form_input">
                <span>Last Time Used</span><input type="date" value={inputs.last_use_time} onChange={(e) => formControl(e, 'last_use_time')} />
            </div>
            <div className="scooter_form_input">
                <span>Total Ride Kilometers</span><input type="text" value={inputs.total_ride_kilometers} onChange={(e) => formControl(e, 'total_ride_kilometers')} />
            </div>
            <div className="scooter_form_input">
                <button onClick={handleCreate}>Add SCOOTER</button>
            </div>


        </div>
      
            
    

    )
}

export default Create;