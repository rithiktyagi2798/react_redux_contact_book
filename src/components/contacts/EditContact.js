import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams} from 'react-router-dom';

const EditContact = () => {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state)  => state.contact.contact);
    const[name, setName]   = useState("");
    const[phone, setPhone] = useState("");
    const[email, setEmail] = useState("");

      useEffect(() => {
          if ( contact != null) {
              setName(contact.name)
              setPhone(contact.phone)
              setEmail(contact.email)
          }
        dispatch(getContact(id));
    }, [contact] );

    const onUpdateContact =(e) =>{
        e.preventDefault();

        const Update_contact = Object.assign(contact, {
            name: name, 
            phone: phone, 
            email: email
        });

        dispatch(updateContact(Update_contact));
        history.push("/");
    };
   
    return (

        <div className = "card boarder-0 shadow">
        
        <div className = "card-header">
        Add A Contact
        </div>
        <div className = "card-body">
            
            <form onSubmit={(e) => onUpdateContact(e)}>

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
                <button className = "btn btn-primary" type="Submit">Update Contact</button>
            </form>
        </div>
           
        </div>
    );
};

export default EditContact;