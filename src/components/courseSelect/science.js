import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class Science extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <View style={{backgroundColor: '#FFBD4D', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 25, textAlign: 'center', marginBottom: 30}}>Select your choice of course for Science?</Text>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#EA9D1A', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 30}}>
                <Image source={require('../../assets/images/finance.png')} style={{width: 30, height: 30}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Natural &amp; Physical Science</Text>
            </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#EA9D1A', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/engg.png')} style={{width: 30, height: 30}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Pharmaceutical &amp; Bio medical</Text>
            </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#EA9D1A', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/mgmt.png')} style={{width: 30, height: 30}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Biological &amp; Life sciences</Text>
            </View>
            </View>
        </View>
    </>
    );
  }
};