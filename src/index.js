//Basic dependencies for react app
import React from 'react'
import ReactDOM from 'react-dom'

//Styles dependencies
import './styles/styles.sass'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './styles/theme'

//Importing components
import Router from './Router'

//Service worker for pwa
import * as serviceWorker from './serviceWorker'

//Importing redux store
import { Provider } from 'react-redux'
import store from './controllers/store'

ReactDOM.render(

    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router id='app'/>
        </ThemeProvider>
    </Provider>

    , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
