import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import valid from '../utils/valid'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import {useRouter} from 'next/router'

const Register = () => {
    //set the value input for user
    const initialState = {name: '', email: '', password: '', cfpassword: ''}
    //create a userData from initialState
    const [userData, setUserData] = useState(initialState)
    //set values for userData
    const { name, email, password, cfpassword} = userData
    //set Context for notify
    const {state, dispatch} = useContext(DataContext)
    const {auth} = state

    const router = useRouter()
    //heard any change from the input
    const handleChangeInput = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
        dispatch({ type: 'NOTIFY', payload:{}})
    }
    //handle activity when user hit submit button
    const handleSubmit = async e => {
        e.preventDefault()
        //check valid input
        const errMsg = valid(name, email, password, cfpassword)
        if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg}})

        dispatch({ type: 'NOTIFY', payload:{loading: true}})
        //check the api 
        const res = await postData('auth/register', userData)
        if (res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err}})
        
        return dispatch({ type: 'NOTIFY', payload: {success: res.msg}})
    }
    useEffect(() => {
        if(Object.keys(auth).length !== 0) router.push("/")
    },[auth])

    return(
      <div>
          <Head>
              <title>Register</title>
          </Head>

          <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"
                    name="name" value={name} onChange={handleChangeInput}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="email" value={email} onChange={handleChangeInput}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                    name="password" value={password} onChange={handleChangeInput}/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2"
                    name="cfpassword" value={cfpassword} onChange={handleChangeInput}/>
                </div>

                <button type="submit" className="btn btn-dark w-100">Register</button>
                <p className="my-2">
                    Already have an account?
                <Link href="/signin"><a style={{color: 'crimson'}}> Login</a></Link></p>
            </form>
      </div>
    )
    }
  
    export default Register
  
  