import React, { createContext } from 'react'

export const LanguageContext = createContext('en')

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
            {(language) => <h1>Language</h1>}
            </LanguageContext.Consumer>
        ) 
    }
}

export class App extends React.Component {
    state = {
        lingua: 'en',
    }
    handle = event => {
        this.setState({
            language: event.target.language.value,
        })
    }
    render () {
        return (
            <>
                <select name="lingua" value={this.state.lingua} onChange={this.handle}>
                    <option value='en'>English</option>
                    <option value='it'>Italiano</option>
                </select>
                <LanguageContext.Provider value={this.state.lingua}>
                    <DisplayLanguage />
                </LanguageContext.Provider>
            </>
        )
    }
}