const SubmissionForm = () => {
    return (
        <>
            <label>Name:
                <input type="text" value=""/>
            </label>

            <br/><br/>

            <label>Email:
                <input type="text" value=""/>
            </label>

            <br/><br/>

            <label>Phone Number:
                <input type="number" value=""/>
            </label>

            <br/><br/>

            <label>Phone Type:
                <select>
                    <option value="home">Home</option>
                    <option value="worl">Work</option>
                    <option value="mobile">Mobile</option>
                </select>
            </label>

            <br/><br/>

            <p>Staff:
            <br/>
                <label>Instructor
                    <input type="radio" name="staff" value="instructor"/>
                </label>
                <label>Student
                    <input type="radio" name="staff" value="student"/>
                </label>
            </p>

            <br/>

            <label>Bio:
            <br/>
                <textarea>Tell us about yourself...</textarea>
            </label>

            <br/><br/>

            <label>Receive Notifications?
            <br/>
                <input type="checkbox" name="notification"></input> Yes
            </label>

            <br/><br/>
            <button>Submit</button>

        </>
    )
}

export default SubmissionForm;
