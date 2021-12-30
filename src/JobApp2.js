import { Field, Formik, Form, ErrorMessage } from "formik";

function JobApp2(){
    return(
        <Formik  
        initialValues={{
            candName:"",
            candAge:"",
            roleApplied:"MERN Developer",
            termsCond:true,}}

             validate={(values)=>{
                const{candName,candAge,roleApplied,termsCond} = values;
                const errors ={};
                if(!candName){
                    errors.candName="candidate name is required"
                }else if(!candAge){
                    errors.candAge="cnadidate age is required"
                }else if(candAge<18){
                    errors.candAge="candidate age should be 18+"
                }else if(!roleApplied){
                    errors.roleApplied="role applied is required"
                }else if(!termsCond){
                    errors.termsCond="please accept T&C"
                }
                 return errors;
             }} 

             onSubmit={(values)=>{
                 console.log(values);
             }}>


            {({values,errors,handleChange,handleBlur,touched})=>{
                return(
                    <Form >
        <h2>Job Application</h2>
        <div>
            <label>Candidate Name: </label>
            <Field name="candName" type="text"/>
           {touched.candName?(<ErrorMessage className="error" name="candName"/>):(<></>)}
        </div>
        <br />
        <div>
            <label>Candidate Age: </label>
            <Field type="number" name="candAge"/>
           {touched.candAge?(<ErrorMessage className="error" name="candAge"/>):(<></>)}
        </div>
        <br />
        <div>
            <label>Role Applied: </label>
           <select name="roleApplied" value={values.roleApplied} onChange={handleChange} onBlur={handleBlur}>
               <option value="Node Developer">Node Developer</option>
               <option value="React Developer">React Developer</option>
               <option value="MERN Developer">MERN Developer</option>
           </select>
           {touched.roleApplied?(<ErrorMessage name="roleApplied" className="error"/>):(<></>)}
        </div>
        <br />
        <div>
            
           <input type="checkbox" name="termsCond" checked={values.termsCond} onChange={handleChange}  onBlur={handleBlur}/>
           <label>I agree to terms and condition</label>
           {touched.termsCond?(<ErrorMessage className="error" name="termsCond"/>):(<></>)}
        </div>
        <br />
        <div>
            <button type="submit">Submit</button>
        </div>

        </Form>
                )
            }}

        </Formik>
    )
}

export default JobApp2;