import { useState } from "react";

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
                showErrors(errors);
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
            user.notification = !user.notification
        }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" value={user.name} onChange={handleChange('name')}/>

                </label>

                <br/><br/>

                <label>Email:
                    <input type="text" value={user.email} onChange={handleChange('email')}/>
                </label>

                <br/><br/>

                <label>Phone Number:
                    <input type="number" value={user.phoneNumber} onChange={handleChange('phoneNumber')}/>
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

                <p>Staff:
                <br/>
                    <label>Instructor
                        <input type="radio" name="staff" value={user.staff} onChange={handleChange('staff')}/>
                    </label>
                    <label>Student
                        <input type="radio" name="staff" value={user.staff} onChange={handleChange('staff')}/>
                    </label>
                </p>

                <br/>

                <label>Bio:
                <br/>
                    <textarea value={user.bio} onChange={handleChange('bio')}>Tell us about yourself...</textarea>
                </label>

                <br/><br/>

                <label>Receive Notifications?
                <br/>
                    <input type="checkbox" name="notification" value={user.notification} onChange={toggleNotifications('notification')}></input> Yes
                </label>

                <br/><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default SubmissionForm;
