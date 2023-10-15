import React,{useState} from 'react';
import ContactCard from '../../Component/ContactCard/ContactCard'
import './Home.css'
import showToast from 'crunchy-toast'

function Home() {

    const[contacts,Setcontacts] = useState([
        {
            name:'Snehal',
            email:'snehal@gmail.com',
            mobile:878812986
        }
    ]);

    const[name , setName] = useState('');
    const[email , setEmail] = useState('');
    const[mobile , setMobile] = useState('');

    const addContact = ()=>{

        if(!name){
            showToast('Name is required', 'alert');
            return;
        }

        if(!email){
            showToast('Email is required','alert');
            return;
        }

        if(!mobile){
            showToast('Mobile is required','alert');
            return;
        }
         const obj = {
            name:name,
            email:email,
            mobile:mobile
         }

         Setcontacts([...contacts,obj]);

         showToast('contact Added Successfully', 'success');

         setName('');
         setEmail(' ');
         setMobile('');
    };

    return (
        <div>
            <h1 className="app-title">📞Contact App</h1>

            <div className='app-body'>
                <div className='contacts-container'>
                   <h2 className='sub-heading'>Show Contacts</h2>
                   {
                    contacts.map((contact , index) =>{
                        const{name , mobile , email} = contact;
                        return(
                              <ContactCard 
                              key={index} 
                              name={contact.name} 
                              email={contact.email}
                              mobile={contact.mobile} />
                           )
                    })
                   }
                </div>
                <div className='add-contacts-container'>
                  <h2 className='sub-heading'>Add Contacts</h2>
                  <form>
                    
                    <input
                     type="text" 
                    placeholder='Name' 
                    className='user-input'
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    value={name}
                    />
                    <input 
                    type="email" 
                    placeholder='Email' 
                    className='user-input'
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    value={email}
                    />
                    <input 
                    type="text" 
                    placeholder='Mobile'
                     className='user-input'
                     onChange={(e)=>{
                        setMobile(e.target.value)
                    }}
                    value={mobile}
                    />

                    <button 
                    type="button" 
                    className='btn'
                    onClick={addContact}>
                        Add Contact</button>
                  </form>
                </div>
            </div>
        </div>
    )
}
export default Home