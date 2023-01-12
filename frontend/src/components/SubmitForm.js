import React, { useState } from 'react';
import Service from "../components/ServiceSubmit/Service"


const SubmitForm = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    email: '',
    date: '',
    time: '',
    terms: ''
  })

  const [isAgree, setTerms] = useState(false)

  const handleClear = () => {
    console.log(Object.keys(formData))
    const clearedFields = Object.keys(formData).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    setFormData(clearedFields);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const personData = {
      firstName,
      lastName,
      number,
      email,
      date,
      time,
      terms
    }

    Service.createInquiry(personData);
    handleClear();
  }

  const { firstName, lastName, number, email, date, time, terms } = formData

  const onChange = (e) => {

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onClick = () => {
    setTerms(!isAgree);
  }



  return (

    <>
      <div className='px-8 py-8 mx-auto mt-5 mb-10 border-2 rounded-xl lg:w-5/12 md:w-6/12 sm:w-11/12'>
        <div className='mx-auto mb-5'>
          <p className='text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-2xl sm:text-xl'>Book a Visit</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">First Name</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Juan" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={onChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400">Mobile Number</label>
            <input type="tel" id="number" name="number" value={number} onChange={onChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-6">
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-400">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={onChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>

          <div className='mb-6'>
            <label className="block mb-2 text-sm font-medium text-gray-400" htmlFor="date">
              Date
            </label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              id="date"
              type="date"
              name="date"
              value={date}
              onChange={onChange}
            />
          </div>

          <div className='mb-6'>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-400">Time</label>
            <select id="time" name="time" value={time} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value=''>-- Select Time --</option>
              <optgroup label="Morning">
                <option value="8:00 AM">8:00 AM</option>
                <option value="8:30 AM">8:30 AM</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="9:30 AM">9:30 AM</option>
                <option value="10:00 AM">10:00 AM</option>
              </optgroup>
              <optgroup label="Afternoon">
                <option value="1:00 PM">1:00 PM</option>
                <option value="1:30 PM">1:30 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="2:30 PM">2:30 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="3:30 PM">3:30 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </optgroup>
            </select>
          </div>


          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" value={terms} onClick={onClick} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
          </div>

          <button type="submit" className="w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book</button>
        </form>
      </div >
    </>
  );
};

export default SubmitForm;