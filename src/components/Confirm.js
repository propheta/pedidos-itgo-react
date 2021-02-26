import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //Process form//
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values:{cliente, saldoHoras, data, numDocumento, descricao, telemanutencao, insite, deslocacao, totalHorasDoc}} = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data"/>
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={cliente}
                        />
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={saldoHoras}
                        />
                        <ListItem 
                            primaryText="Email"
                            secondaryText={data}
                        />
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={numDocumento}
                        />
                        <ListItem 
                            primaryText="City"
                            secondaryText={descricao}
                        />
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={telemanutencao}
                        />
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={insite}
                        /> 
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={deslocacao}
                        /> 
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={totalHorasDoc}
                        /> 
                    </List>
                    <br/>
                    <RaisedButton 
                        label="Confirmar e Continuar"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Voltar"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm