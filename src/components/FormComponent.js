import './FormComponent.css'
import {useState} from 'react'

function FormComponent(){
    // input value
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    // error message
    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorConfirmPassword,setErrorConfirmPassword] = useState('')
    //input status
    const [statusUserName,setStatusUserName] = useState('')
    const [statusEmail,setStatusEmail] = useState('')
    const [statusPassword,setStatusPassword] = useState('')
    const [statusConfirmPassword,setStatusConfirmPassword] = useState('')
   
    function validateForm(event){

        event.preventDefault()
               
        if(userName.length>=8){
            setErrorUserName('')
            setStatusUserName('green')
        }else{
            setErrorUserName('ป้อนชื่อผู้ใช้อย่างน้อย 8 ตัวอักษร')
            setStatusUserName('red')
        }

        if(email.includes('@')){
            setErrorEmail('')
            setStatusEmail('green')
        }else{
            setErrorEmail('รูแปบบอีเมลไม่ถูกต้อง')
            setStatusEmail('red')
        }

        if(password.length>=8){
            setErrorPassword('')
            setStatusPassword('green')
        }else{
            setErrorPassword('ป้อนรหัสผ่านอย่างน้อย 8 ตัวอักษร')
            setStatusPassword('red')
        }

        if(confirmPassword === password && password !== ''){
            setErrorConfirmPassword('')
            setStatusConfirmPassword('green')
        }else{
            setErrorConfirmPassword('รหัสผ่านไม่ตรงกัน')
            setStatusConfirmPassword('red')
        }

    }

        return(
        <div className='container'>
            <form className='form' onSubmit={validateForm}>
                <h2>แบบฟอร์มลงทะเบียน</h2>
                <div className='form-control'>
                    <label>ชื่อผู้ใช้</label>
                    <input type='text' value={userName} onChange={
                        event=>setUserName(event.target.value)}  style={{borderColor:statusUserName}}></input>
                    <small style={{color:statusUserName}}>{errorUserName}</small>
                </div>
                <div className='form-control'>
                    <label>อีเมลล์</label>
                    <input type='text' value={email} onChange={
                        event=>setEmail(event.target.value)} style={{borderColor:statusEmail}}></input>
                    <small style={{color:statusEmail}}>{errorEmail}</small>
                </div>
                <div className='form-control'>
                    <label>รหัสผ่าน</label>
                    <input type='password' value={password} onChange={
                        event=>setPassword(event.target.value)} style={{borderColor:statusPassword}}></input>
                    <small style={{color:statusPassword}}>{errorPassword}</small>
                </div>
                <div className='form-control'>
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type='password' value={confirmPassword} onChange={
                        event=>setConfirmPassword(event.target.value)} style={{borderColor:statusConfirmPassword}}></input>
                    <small style={{color:statusConfirmPassword}}>{errorConfirmPassword}</small>
                </div>
                <button type='submit'>ลงทะเบียน</button>
            </form>
        </div>
    ) 
}

export default FormComponent