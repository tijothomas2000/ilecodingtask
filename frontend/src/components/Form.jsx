import { useState } from "react";
import "./Form.css";

const Form = ({ sendDataToParent, statusMsg }) => {
    const [details, setDetails] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        contact: ""
    });

    const inputHandle = (e) => {
        const inputField = e.target.name;
        const input = e.target.value;
        setDetails({ ...details, [inputField]: input });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendDataToParent(details);
    }
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="formdetails">
                    <div className="inputfield">
                        <h3>First Name:</h3>
                        <input type="text" value={details.fname} name="fname" id="fname" onChange={(e) => inputHandle(e)} />
                    </div>
                    <div className="inputfield">
                        <h3>Last Name:</h3>
                        <input type="text" value={details.lname} name="lname" id="lname" onChange={(e) => inputHandle(e)} />
                    </div>
                    <div className="inputfield">
                        <h3>Email ID:</h3>
                        <input type="email" value={details.email} name="email" id="email" required onChange={(e) => inputHandle(e)} />
                    </div>
                    <div className="inputfield">
                        <h3>Password: </h3>
                        <input type="password" value={details.password} name="password" id="password" required onChange={(e) => inputHandle(e)} />
                    </div>
                    <div className="inputfield">
                        <h3>Contact Number: </h3>
                        <input type="number" value={details.contact} name="contact" id="contact" required onChange={(e) => inputHandle(e)} />
                    </div>
                </div>
                <button>SUBMIT</button>
                <span className={statusMsg.includes("Submitted") ? `successstatus` : `failedstatus`}>{statusMsg}</span>
            </form>
        </div>
    );
}

export default Form;