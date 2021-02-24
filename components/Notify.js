import { useContext} from 'react'
import { DataContext} from '../store/GlobalState'
import Loading from './Loading'
import Toast from './Toast'

const Notify = () => {
    //Create a context to show an aleart for notify or auth
    const {state, dispatch} = useContext(DataContext)
    //create a notify props by state
    const { notify } = state

    return(
        <>  
            {notify.loading && <Loading/>}
            {notify.error && 
                <Toast 
                    msg ={{ msg: notify.error, title: "Error"}}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    bgColor="bg-danger"
                />
            }
            {notify.success &&
                <Toast 
                    msg ={{ msg: notify.success, title: "Success"}}
                    handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
                    bgColor="bg-success"
                />
            }
        </>
    )
}

export default Notify