import React from 'react'
import Visit from './visit'
import Fail from './fail'
import Accepted from './accepted'
import Interview from './interview'
import References from './references'


//<ComponentName />
class ActivityComponent extends React.Component {
  STATE_COMPONENT = {
    fail: Fail,
    visit: Visit,
    references: References,
    interview: Interview,
    accepted: Accepted,
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
