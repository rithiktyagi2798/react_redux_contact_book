import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Contact from './Contact';
import {selectAllContact,clearAllContact,deleteAllContact} from "../../actions/contactAction";

const Contacts = () => {
      const dispatch = useDispatch();
      const [selectAll, setSelectAll] = useState(false);
      const contacts = useSelector( (state) => state.contact.contacts);
      const selectedContacts =useSelector( (state) => state.contact.selectedContacts);

      useEffect(()=> {
        if(selectAll){
            dispatch(selectAllContact(contacts.map((contacts) => contacts.id )));
        }
        else{
          dispatch(clearAllContact());
        }
      }, [selectAll]);
    return (
        <div>
        {
          selectedContacts.length > 0 ? (
            <button className= "btn btn-danger mb-3" onClick={()=> dispatch(deleteAllContact())}> Delete All </button>
          ) :null
        }
           <table className="table shadow">
        
   
    <tr className = "bg-danger">
      <th>
        <div className = "custom-control custom-checkbox">
          <input 
          id="selectAll" 
          type = "checkbox"
          className = "custom-control-input" 
          value={selectAll}
          onClick={() => setSelectAll(!selectAll)}
          />
          <label 
          htmlFor="selectAll"
          className = "custom-control-label">
          </label>
        </div>
      </th>
      <th>Name</th> 
      <th>Phone</th>
      <th>E-mail</th>
      <th>Actions</th>
    </tr>
    
    <tbody>
{
  contacts.map((contact) => (
  <Contact contact={contact} key = {contact.id} 
    selectAll={selectAll}
  />
  ) ) }
</tbody>

</table>
  
        </div>
  
  );

};

export default Contacts
