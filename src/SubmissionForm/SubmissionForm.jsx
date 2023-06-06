import { useState } from "react";
import "./SubmissionForm.css"

const SubmissionForm = () => {
        const [user, setUser] = useState({
            name: "",
            email: "",
            phoneNumber: 0,
            phoneType: "unselected",
            staff: undefined,
            bio: "",
            notification: false,
        });

        const [errors, setErrors] = useState([]);

        const validate = () => {
            let errors = [];
            if (user.name.length === 0) {
                errors.push("name cannot be blank")
            }
            if (user.email.length === 0 || !user.email.indexOf('@') > 0) {
                errors.push("email must be valid")
            }
            if (user.phoneNumber !== 0) {
                if (user.phoneNumber.toString().length !== 10 ) {
                    errors.push("phone number not valid")
                }
                if (user.phoneType === "unselected") {
                    errors.push("please select phone type")
                }
            }
            if (user.bio.length > 280) {
                errors.push("bio must be less than 280 characters")
            }
            return errors;
        };

        const handleChange = (field) => {
            return (e) => {setUser({...user, [field]: e.target.value})}
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            let errors = validate();
            if (errors.length > 0) {
                setErrors(errors);
            }
        }

        const showErrors = () => {
            if (!errors.length) {
                return null;
            }
            console.log(errors)
            return (
                <ul>
                    {errors.map (
                        error =><li>{error}</li>
                    )}
                </ul>
            )
        }

        const toggleNotifications = () => {
            setUser({ ...user, notification: !user.notification})
        }

    return (
        <>
            {showErrors()}
            <form onSubmit={handleSubmit} className="form-container">
                <label>Name:
                    <input type="text" value={user.name} onChange={handleChange('name')} required/>
                </label>

                <br/><br/>

                <label>Email:
                    <input type="text" value={user.email} onChange={handleChange('email')} required/>
                </label>

                <br/><br/>

                <label>Phone Number:
                    <input type="number" value={user.phoneNumber} onChange={handleChange('phoneNumber')} required/>
                </label>

                <br/><br/>

                <label>Phone Type:
                    <select onChange={handleChange('phoneType')}>
                        <option value="unselected">---</option>
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="mobile">Mobile</option>
                    </select>
                </label>

                <br/><br/>

                <label>Staff:
                <br/>
                    <label className="staff">Instructor
                        <input type="radio" name="staff" value="instructor" onChange={handleChange('staff')}/>
                    </label>
                    <label className="staff">Student
                        <input type="radio" name="staff" value="student" onChange={handleChange('staff')}/>
                    </label>
                </label>

                <br/>
                <br/>

                <label>Bio:
                <br/>
                    <textarea value={user.bio} onChange={handleChange('bio')}>Tell us about yourself...</textarea>
                </label>

                <br/><br/>

                <label>Receive Notifications?
                <br/>
                <label className="yes">Yes</label>
                    <input type="checkbox" name="notification" checked={user.notification} onChange={toggleNotifications}></input>
                </label>

                <br/><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default SubmissionForm;
