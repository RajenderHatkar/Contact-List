import { useEffect, useState } from 'react';
import './App.css';
import ContactCard from './compnents/ContactCard';
import { getData,deleteData,postData,putData} from './api';
import Form from './compnents/form';
import Nav from './compnents/Nav';

//import axios from 'axios';


function App() {
  const[contact,setContact]=useState([])
  const [edit, setEdit] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [initialForm, setForm] = useState({ name: '', price: '', category: '' })
  useEffect(() => {
        getcontacts()

    },
  [])
/** fetching contact details from api */
  async function getcontacts() {
    const response = await getData();
    setContact(response.data);
    console.log(response.data)

}
async function addContact(contacts) {
  let data = {
    name: contacts.name,
    email: contacts.email,
    phone: contacts.phone
  };

  if (edit) {
    try {
      const updatedContact = await putData(contacts.id, data);
      const updatedContacts = contact.map((c) =>
        c.id === contacts.id ? updatedContact : c
      );
      setContact(updatedContacts);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  } else {
    try {
      await postData(data);
      setContact([...contact, data]);
      
    } catch (error) {
      console.error("Error adding new contact:", error);
    }
  }

  setOpenForm(false)


}
function editcontact(value) {
  setEdit(true);
  setOpenForm(true);
  setForm(value)

}
function closeForm() {
  setOpenForm(false)
}
function showForm() {
  setForm({ name: '', price: '', category: '' })
  setOpenForm(true);
  setEdit(false);

}
/*const deleteContact = (id) => {
  // Simulate deleting a contact (DELETE request)
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(() => {
      const updatedUsers = contact.filter((contact) => contact.id !== id);
      setContact(updatedUsers);
    })
    .catch((error) => console.error("Error deleting contact:", error));
};*/
async function deleteContact(id) {
  await deleteData(id).then(()=>{
    const updatedContacts = contact.filter((contact) => contact.id !== id);
        setContact(updatedContacts);
  })
  .catch((error) => console.error("Error deleting contact:", error));
}




  if(contact==0){
    return<h1>Loading....!</h1>
  }
 
  return (
    <>
      <Nav ></Nav>
      <div className="wrapper m-5 w-70">
      <h2 className="text-secondary text-center m-1">contacts  List</h2>
      <button className="btn btn-success float-end m-2" onClick={() => { showForm() }}>Add new</button>
      <ContactCard contact={contact} deleteCon={deleteContact} editCon={editcontact}></ContactCard>
      {openForm && <Form addContact={addContact}data={initialForm} closeForm={closeForm}></Form>}

      </div>
    </>
  
  );
}

export default App;
