import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, Image, Icon, TouchableOpacity } from 'react-native'
import { changeState } from '../actions/change-state'

class Application extends Component {

  returnData(appState) {
    this.props.changeState(this.props.app.applications_id, this.props.app, appState);
  }

 render() {
   let icon = ''
   //console.log("this.props.contact", this.props.contact)
   switch (this.props.img) {
   case "fail":
     icon = require("../../images/states/fail.png")
     break
   case "visit":
     icon = require("../../images/states/visit.png")
     break
   case "references":
     icon = require("../../images/states/references.png")
     break
   case "interview":
     icon = require("../../images/states/interview.png")
     break
   case "accepted":
     icon = require("../../images/states/accepted.png")
     break
   default:
     icon = require("../../images/BHC_Logo.jpg")
   }



 return (

    <TouchableOpacity onPress={() => this.props.navigation.navigate('Activity',
      { application: this.props.app,
        img: this.props.app.state,
      contact: this.props.contact[String(this.props.app.applications_id)],
      returnData: this.returnData.bind(this)})}>
   <View style = {styles.listItemContainer}>
    <View style= {styles.iconContainer}>
     <Image source={icon} style={styles.initStyle} resizeMode='contain' />
    </View>
    <View style = {styles.callerDetailsContainer}>
     <View style={styles.callerDetailsContainerWrap}>
      <View style={styles.nameContainer}>
        <Text style={{fontSize:24}}
          >{this.props.app.first_name} {this.props.app.last_name}</Text>
        <View style={styles.dateContainer}>

          <Text style={{ fontWeight:'400', color:'#666', fontSize:14 }}>{this.props.app.current_city}, {this.props.app.current_state}</Text>
        </View>
       </View>
     <View style={styles.callIconContainer}>
       <TouchableOpacity
         onPress={() => this.props.navigation.navigate('ApplicationDetail', {
           application: this.props.app,
           contact: this.props.contact[String(this.props.app.applications_id)],
           img: 'application details',
           returnData: this.returnData.bind(this)})} >
       <Image
         source={require("../../images/application.png")}
         style={styles.appDetailStyle} resizeMode='contain'
        />
      </TouchableOpacity>
     </View>
    </View>
   </View>
  </View>
</TouchableOpacity>
  )
 }
}



const styles = StyleSheet.create({
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 1
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  callIconContainer: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 20,
  },
  initStyle: {
    borderRadius: 30,
    width: 60,
    height: 60
  },
  appDetailStyle: {
    borderRadius: 30,
    width: 30,
    height: 30,
  }
})





// auth: state.auth,
const mapStateToProps = (state) => ({ applications: state.applications, contact: state.contacts })


const mapDispatchToProps = (dispatch) => bindActionCreators({
changeState
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Application)

// export default Application
