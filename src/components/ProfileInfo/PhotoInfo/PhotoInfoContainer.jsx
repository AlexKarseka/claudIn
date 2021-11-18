import { connect } from 'react-redux'
import { PhotoInfo } from './PhotoInfo'

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const PhotoInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoInfo)

export { PhotoInfoContainer }