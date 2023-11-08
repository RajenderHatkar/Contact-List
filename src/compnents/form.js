import { useState } from "react";

function Form(props) {

    const [Contacts, setContacts] = useState(props.data);
   const [sumitted, setSubmitted] = useState(false)

    let changeFormData = (event) => {
        const { name, value } = event.target;
        setContacts({ ...Contacts, [name]: value })
    }
    return (
        <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control mt-2" value={Contacts.name} type="text" name="name" placeholder="Enter Name"
                        onChange={changeFormData} required />
                        {
                        sumitted && Contacts.name.length < 5 && <span className="text-danger">Product name must be 5 charecters</span>
                    }
                    
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input className="form-control mt-2"

                        value={Contacts.email}
                        onChange={changeFormData}

                        type="text" name="email" placeholder="Enter Price" />
                        {
                        sumitted && Contacts.email.length < 5 && <span className="text-danger">Product name must be 5 charecters</span>
                    }
                    
                </div>
                <div className="form-group">
                    <label>Number:</label>
                    <input className="form-control mt-2"

                        value={Contacts.phone}
                        onChange={changeFormData}

                        type="text" name="phone" placeholder="Enter Price" />
                        {
                        sumitted && Contacts.phone.length < 5 && <span className="text-danger">Product name must be 5 charecters</span>
                    }
                    
                </div>
                <button className="btn btn-primary float-end"

                    onClick={(e) => {
                        setSubmitted(true)
                        e.preventDefault();
                        if (!!Contacts.name && !!Contacts.email && !!Contacts.phone) {
                            props.addContact(Contacts)
                        }



                    }}

                >Send</button>
                <button className="btn btn-danger float-end"
                    onClick={(e) => {
                        e.preventDefault();
                        props.closeForm()


                    }}
                >Cancel</button>

            </form>

        </div>
    )
}


export default Form