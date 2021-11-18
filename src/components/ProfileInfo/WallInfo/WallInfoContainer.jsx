import { WallInfo } from './WallInfo';
import { addPostCreator, updateNewPostTextCreator } from '../../../redax/profileReducer';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text))
        }
    }
}

const WallInfoContainer = connect(mapStateToProps, mapDispatchToProps)(WallInfo)

export { WallInfoContainer }