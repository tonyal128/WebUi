import React from "react";
const API = 'http://localhost:8080/api/theme';

class Theme extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        props: [],
        isHidden: true,
    }
  }

export const themes = {
    
    common: {
        white: "",
        black: "",
      },
      primary: {
        main: "",
        contrastText: "",
      },
      secondary: {
        main: "",
        contrastText: "",
      },
      default: {
        main: "",
        contrastText: "",
      },
      error: {
        main: "",
        contrastText: "",
      },
      fontFamily: "",
      h1: {
        fontSize: "",
      },
      h2: {
        fontSize: "",
      },
    };
  
  export const ThemeContext = React.createContext(
    themes.dark // default value
  );