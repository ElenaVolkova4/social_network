import React from "react";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reducer.js";
import Dialogs from "./Dialogs.jsx";

//создаем контейнерную компоненту с помощью библиотеки react-redux

//сама функция connect подставит нужный state
const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

//коллбеки, которые передаем компоненте Dialogs как атрибуты (вместо пропсов)
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessage: (text) => {
      dispatch(updateNewMessageActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
