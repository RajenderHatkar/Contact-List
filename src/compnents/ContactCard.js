function ContactCard({contact,deleteCon,editCon}){
    return(
        <table className='table m-4 '>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    contact.map((data,id) => (
                        <tr key={id} >
                            <td>{id+1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>
                                <button className='btn btn-secondary m-1' onClick={() => editCon(data)}>Edit</button>
                                <button className="btn btn-danger m-1" onClick={() => deleteCon(data.id)} >Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default ContactCard;