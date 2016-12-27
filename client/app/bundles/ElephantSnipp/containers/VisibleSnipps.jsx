import { connect } from 'react-redux'
import SnippsList from '../components/SnippsList'

const mapStateToProps = (state) => {
  return {
    snipps: {title: 'chat'}
  }
}

const VisibleSnipps = connect(mapStateToProps)(SnippsList)
export default VisibleSnipps
