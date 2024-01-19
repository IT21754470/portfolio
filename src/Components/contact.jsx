import React, {useState} from 'react'
import single from '../assests/index.jpg'


const Contact = () => {

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");

      const formData = {
        username,
        phoneNumber,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      };

     
      fetch(
        "https://raw.githubusercontent.com/your-username/your-repo/main/form_data.json"
      )
        .then((response) => response.json())
        .then((data) => {
         
          const newData = [...data, formData];

        
          fetch(
            "https://api.github.com/repos/your-username/your-repo/contents/form_data.json",
            {
              method: "PUT",
              headers: {
                Authorization: "Bearer your-personal-access-token",
              },
              body: JSON.stringify({
                message: "Add new form data",
                content: Buffer.from(JSON.stringify(newData)).toString(
                  "base64"
                ),
                sha: "SHA of the previous form_data.json",
              }),
            }
          );
        })
        .catch((error) => console.error("Error saving form data:", error));

  
    }};

    return (

      <div className="bg-black text-white py-16">
        <div className="container mx-auto flex items-center justify-center">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-x-8'>

<div className='bg-gray-900 w-full shadow-xl flex flex-col p-8 my-10 rounded-lg hover:scale-105 duration-300 shadow-xl shadow-gray-500'>
            <div className="text-center">
              <img src={single} alt="Profile" className="mx-auto mb-4 rounded-full" />
              <h1 className="text-3xl font-bold">Sathmini Subasinghe</h1>
              <h2 className="text-xl">MERN Stack Developer</h2>
              <p className="mt-4">
                I am a passionate MERN stack developer with expertise in building dynamic websites. I thoroughly enjoy the
                process of creating captivating web experiences that combine seamless functionality with stunning design.
              </p>
              <p className="mt-4">Phone: +94 742122382 🤫</p>
              <p>Email: sathminisubasinghe05.gmail.com</p>
              <p>Github: <a href="https://github.com/IT21754470" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://github.com/IT21754470</a></p>
            </div>
           </div>
           <div className='bg-gray-900 w-full shadow-xl flex flex-col p-8 my-10 rounded-lg hover:scale-105 duration-300 shadow-xl shadow-gray-500'>
            <div>
              <form className="text-left">
                <p className="text-red-500">{errMsg}</p>
                <p className="text-green-500">{successMsg}</p>
  
                <div className="mb-4">
                  <h1 className="">NAME</h1>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    type='text'
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded"
                  />
                </div>
  
                <div className="mb-4">
                  <h1 className="">PHONE NUMBER</h1>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    type='text'
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded"
                  />
                </div>
  
                <div className="mb-4">
                  <h1 className="">EMAIL</h1>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type='email'
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded"
                  />
                </div>
  
                <div className="mb-4">
                  <h1 className="">SUBJECT</h1>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    type='text'
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded"
                  />
                </div>
  
                <div className="mb-4">
                  <h1 className="">MESSAGE</h1>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    cols='30'
                    rows='8'
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded"
                  ></textarea>
                </div>
  
                <button onClick={handleSend} className="bg-blue-500 text-white py-2 px-4 rounded">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
  }
  
  export default Contact;