import { addMessageCreator, updateNewMessageTextCreator } from '../../redax/messengerReducer'
import { Messenger } from './Messenger'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        messengerPage: state.messengerPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
}

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(Messenger)

export { MessengerContainer }