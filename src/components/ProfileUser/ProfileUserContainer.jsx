import { connect } from 'react-redux'
import { ProfileUser } from './ProfileUser'


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const ProfileUserContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileUser)

export { ProfileUserContainer }