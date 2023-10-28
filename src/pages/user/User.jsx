import './user.scss'
import Single from '../../components/single/Single'

import {singleUser} from '../../data'


export default function User() {
  return (
    <div className='User'>
      <Single {...singleUser}/>
    </div>
  )
}