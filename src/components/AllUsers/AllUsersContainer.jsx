import { AllUsers } from "./AllUsers"
import { connect } from 'react-redux'
import { followCreator, unFollowCreator, setUsersCreator } from '../../redax/allUsersReducer'


let mapStateToProps = (state) => {
    return {
        allUsersPage: state.allUsersPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        }
    }
}

const AllUsersContainer = connect(mapStateToProps, mapDispatchToProps)(AllUsers)

export { AllUsersContainer }