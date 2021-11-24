

function Create() {

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
    }

    return (
        <div className="scooter_form">
            <h2>Add another scooter</h2>
            <div className="scooter_form_input">
                <span>Registration Code</span><input type="text" value={inputs.registrationCode} onChange={(e) => formControl(e, 'name')} />
            </div>
            <div>
                <span></span><input type="text" />
            </div>
            <div>
                <span></span><input type="text" />
            </div>
            <div>
                <span></span><input type="text" />
            </div>

        </div>
      
            
    

    )
}