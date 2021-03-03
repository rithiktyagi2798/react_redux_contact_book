import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const[name, setName]   = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");

    const createContact = (event) => {
        event.preventDefault();
        const new_contact ={
              id: shortid.generate(),
            name: name,
           phone:phone,
           email:email
        }
        dispatch(addContact(new_contact));
        history.push("/");
};
    return (

        <div className = "card boarder-0 shadow">
        
        <div className = "card-header">
        Add A Contact
        </div>
        <div className = "card-body">
            
            <form onSubmit= {(event) => createContact(event)}>

                <div className = "form-group">
                    <input 
                    type="text" 
                    className = "form-control"
                    placeholder ="Enter Your Name"
                    value={name} 
                    onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <input type="text" 
                    className = "form-control"
                    placeholder ="Enter Your Phone Number"
                    value = {phone}
                    onChange={(event)=> setPhone(event.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <input type="text" 
                    className = "form-control"
                    placeholder ="Enter Your Email" 
                    value = {email}
                    onChange={(event)=> setEmail(event.target.value)}/>
                </div>
                <button className = "btn btn-primary" type="Submit">Create Contact</button>
            </form>
        </div>
           
        </div>
    );
};

export default AddContact;