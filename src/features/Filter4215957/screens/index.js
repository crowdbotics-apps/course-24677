import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_381_168}>
        <Text style={styles.Text_381_168}>Filter Leaderboard</Text>
      </View>
      <View style={styles.View_381_169}>
        <Text style={styles.Text_381_169}>Leagues</Text>
      </View>
      <View style={styles.View_381_205}>
        <View style={styles.View_I381_205_1_281}>
          <Text style={styles.Text_I381_205_1_281}>Apply Filter</Text>
        </View>
      </View>
      <View style={styles.View_381_207}>
        <View style={styles.View_I381_207_1_281}>
          <Text style={styles.Text_I381_207_1_281}>Reset</Text>
        </View>
      </View>
      <View style={styles.View_381_209}>
        <View style={styles.View_I381_209_1_281}>
          <Text style={styles.Text_I381_209_1_281}>Cancel</Text>
        </View>
      </View>
      <View style={styles.View_388_2456}>
        <View style={styles.View_I388_2456_381_453}>
          <Text style={styles.Text_I388_2456_381_453}>Select Legue</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/844b/6232/887fdbd21cda78c04422b0e8cafb99b4"
          }}
          style={styles.ImageBackground_I388_2456_388_2452}
        />
      </View>
      <View style={styles.View_381_172}>
        <Text style={styles.Text_381_172}>Gender</Text>
      </View>
      <View style={styles.View_381_186}>
        <View style={styles.View_I381_186_381_175} />
        <View style={styles.View_I381_186_381_176}>
          <Text style={styles.Text_I381_186_381_176}>Men</Text>
        </View>
        <View style={styles.View_I381_186_381_184}>
          <Text style={styles.Text_I381_186_381_184}>Women</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_381_168: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: 25
  },
  Text_381_168: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16.15999984741211,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_381_169: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: 96
  },
  Text_381_169: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.799999237060547,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_381_205: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: 306,
    backgroundColor: "rgba(0, 88, 55, 1)",
    overflow: "hidden"
  },
  View_I381_205_1_281: {
    flexGrow: 1,
    width: wp("21.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: 8
  },
  Text_I381_205_1_281: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_381_207: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: 352,
    backgroundColor: "rgba(196, 150, 12, 1)",
    overflow: "hidden"
  },
  View_I381_207_1_281: {
    flexGrow: 1,
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.4%"),
    top: 8
  },
  Text_I381_207_1_281: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_381_209: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: 400,
    backgroundColor: "rgba(235, 87, 87, 1)",
    overflow: "hidden"
  },
  View_I381_209_1_281: {
    flexGrow: 1,
    width: wp("13.066666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.333333333333336%"),
    top: 8
  },
  Text_I381_209_1_281: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_388_2456: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: 128,
    backgroundColor: "rgba(242, 242, 242, 1)",
    overflow: "hidden"
  },
  View_I388_2456_381_453: {
    flexGrow: 1,
    width: wp("25.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: 10
  },
  Text_I388_2456_381_453: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13.799999237060547,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I388_2456_388_2452: {
    flexGrow: 1,
    width: wp("6.400000508626302%"),
    height: 24.000001907348633,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: 8
  },
  View_381_172: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: 188
  },
  Text_381_172: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13.799999237060547,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_381_186: {
    width: wp("91.73333333333333%"),
    minWidth: wp("91.73333333333333%"),
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: 216,
    backgroundColor: "rgba(224, 224, 224, 1)",
    overflow: "hidden"
  },
  View_I381_186_381_175: {
    flexGrow: 1,
    width: wp("44.800000000000004%"),
    height: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: 3,
    backgroundColor: "rgba(40, 144, 59, 1)",
    borderTopLeftRadius: 17.5,
    borderTopRightRadius: 17.5,
    borderBottomLeftRadius: 17.5,
    borderBottomRightRadius: 17.5
  },
  View_I381_186_381_176: {
    flexGrow: 1,
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    top: 10
  },
  Text_I381_186_381_176: {
    color: "rgba(242, 242, 242, 1)",
    fontSize: 13.799999237060547,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I381_186_381_184: {
    flexGrow: 1,
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.53333333333333%"),
    top: 10
  },
  Text_I381_186_381_184: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 13.799999237060547,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 724 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
