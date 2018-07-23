import React from 'react'
import Visit from './visit'
import References from './references'
import { View, Text } from 'react-native';


//<ComponentName />
class ActivityComponent extends React.Component {
  STATE_COMPONENT = {
    fail: 'Fail',
    visit: Visit,
    references: References,
    interview: {},
    accepted: {},
  }

    render() {
      console.log("ActivityComponent")
       const ComponentName = this.STATE_COMPONENT[this.props.tag]
       return <ComponentName
         application={this.props.application}
         contact={this.props.contact}
       />
    }
}

export default ActivityComponent
