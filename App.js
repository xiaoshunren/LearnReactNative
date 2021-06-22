import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable,TextInput,SafeAreaView,FlatList } from "react-native";
import TaskItem from './components/TaskItem.jsx';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);
    
  
    const createAlert=(itemIndex)=>
    Alert.alert(
       'タスクを削除する',
       '',
       [{text: '確定', 
          onPress:() =>{ 
            setTasks((prevTask) =>
              prevTask.filter((item, index) => index !== itemIndex)
            )}},

         {text: '取消', 
           onPress: () => 
            console.log('Cancel Pressed'), style: 'cancel'},],  
            { cancelable: false},);

  return (

    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(prev=>!prev);
      }}
      >
        
      <SafeAreaView style={styles.centeredView}>
        <SafeAreaView style={styles.modalView}>
          <TextInput
            style={styles.textInput}
            placeholder={'内容を入力してください'}
            onChangeText={(text) => {
              setInputTask(text);
          }}
          value={inputTask}
          />

          <Pressable
            style={[styles.button, styles.buttonClose]} 
            onPress={() => {
            setTasks((prevTask) => {
              return [...prevTask, inputTask];
              },
              );setInputTask(''),
              setModalVisible(prev=>!prev)
              }}                           
              >
            <Text style={styles.textStyle}>タスク追加</Text>
          </Pressable>

         

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(prev=>!prev)}
          >
            <Text style={styles.textStyle}>キャンセル</Text>
          </Pressable>
          </SafeAreaView>
        </SafeAreaView>
      </Modal>



      <Pressable
        style={[styles.button, styles.buttonOpen,styles.buttonClose]}
        onPress={() => setModalVisible(true)} 
      >
        <Text style={styles.textStyle}>タスクリストに追加</Text>
      </Pressable>



      <FlatList
        style={styles.list}
        keyExtractor={(_item, index) => index.toString()}
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskItem
            title={item}
            index={index}
            onDeleteTask={createAlert}
            
          />
        )}
      />
    </SafeAreaView>
  );
};


  //詳細設定
　const styles = StyleSheet.create({

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 30
    },

    modalView: {
      width:'80%',
      height:'50%',
      margin: 30,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "blue",
      shadowOffset: {
        width: 18,
        height: 35
      },
      shadowOpacity: 0.4,
      shadowRadius: 7,
      elevation: 9
    },

    button: {
      width: '90%',
      marginTop: 22,
      borderRadius: 20,
      padding: 13,
    },

    buttonOpen: {
      backgroundColor: "green",
    },

    buttonClose: {
      backgroundColor: "green",
    },

    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    
    modalText: {
      marginBottom: 18,
      textAlign: "center"
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },

    textInput: {
      marginTop: 24,
        width: '80%',
        borderWidth: 1,
        borderColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },

    list: { flex: 1, width: '80%', marginTop: 24 },
  });
export default App;