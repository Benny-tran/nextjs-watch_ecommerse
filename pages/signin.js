import Head from 'next/head'
import Link from 'next/link'
import {useState, useContext, useEffect} from 'react'
import { DataContext } from '../store/GlobalState'
import { postData } from '../utils/fetchData'
import Cookie from 'js-cookie'
import {useRouter} from 'next/router'

const Signin = () => {

    //set the value input for user
    const initialState = {email: '', password: ''}
    //create a userData from initialState
    const [userData, setUserData] = useState(initialState)
    //set values for userData
    const {email, password} = userData
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
        dispatch({ type: 'NOTIFY', payload:{loading: true}})

        //check the api 
        const res = await postData('auth/login', userData)
        if (res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err}})
        
        dispatch({ type: 'NOTIFY', payload: {success: res.msg}})

        dispatch({ type: 'AUTH', payload: {
            token: res.access_token,
            user: res.user
        }})
        
        Cookie.set('refreshToken', res.refresh_token, {
            path: 'api/auth/accessToken',
            expires: 7
        })
        localStorage.setItem('firstLogin', true)
    }

    useEffect(() => {
        if(Object.keys(auth).length !== 0) router.push("/")
    },[auth])

    return(
      <div>
          <Head>
              <title>Sign In</title>
          </Head>

          <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    name="email" value={email} onChange={handleChangeInput}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    name="password" value={password} onChange={handleChangeInput}/>
                </div>
                <button type="submit" className="btn btn-dark w-100">Login</button>
                <p className="my-2">You don't have an account? 
                <Link href="/register"><a style={{color: 'crimson'}}> Register</a></Link></p>
            </form>
      </div>
    )
    }
  
    export default Signin
  