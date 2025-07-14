// import React, { useState } from "react";
// import Banner from "../Components/UI/Banner";
 import { ErrorMessage, Formik,Field,Form } from 'formik';
import * as yup from 'yup'


  const schema = yup.object().shape({
    user: yup.string().min(4,"min 4 is required").required("something is required")
  })

function About() {
  //     const [username,setUsername]= useState()
  // const submited = () => {
  //   if(username.trim().length<=0){
  //     alert("No data")
  //   }else if(username.match()){
  //     alert("fired")
  //   }else
  //   alert("clicked");
  // };
  
  return (
    <div className="mt-44 w-10/12 mx-auto">
      {/* <Banner/> */}
      {/* <h2 className='w-full absolute top-[20rem] text-pink-100 text-5xl font-bold text-center'>Hello it is about me</h2> */}
      <div className="flex flex-col gap-4">
   
      <Formik initialValues={{user:''}} validationSchema={schema} onSubmit={(values)=>{console.log(values)}}>
        
        {({handleSubmit})=>{
          return <Form  onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">UserName</label>
              <Field name='user' placeholder='enter username' className="border py-3 px-4"/>
              <ErrorMessage name="user" component={'div'}/>
            </div>
            <button type="submit">Submit</button>
          </Form>
        }}
      </Formik>
      </div>
    </div>
  );
}

export default About;
