
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const SubjectSelectionScreen = ({route}) => {
    return(
    <View style={styles.view}>
        {route.params.paramCourseChosen}
    </View>
    );
}
export default SubjectSelectionScreen;


const styles = StyleSheet.create({
    view: { flex:1,
        alignItems:'center',
        backgroundColor: "#D9E3E5"
    },
    button: {
        backgroundColor: 'white',
        width:375,
        height:100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20,
        flexDirection: 'row',
    },
    text: {
        color: 'black',
        fontWeight: 'bold'
    },
    checkbox: {
        alignSelf: "center",
    },
    space: {
        width: 20,
        height: 10,
    },
})