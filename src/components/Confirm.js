import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton';
import ListItem from "material-ui/List/ListItem";

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
                    <AppBar title="Dados do Documento"/>
                    <List>
                        <ListItem 
                            primaryText="Cliente"
                            secondaryText={cliente}
                        />
                        <ListItem 
                            primaryText="Saldo de Horas"
                            secondaryText={saldoHoras}
                        />
                        <ListItem 
                            primaryText="Data do Documento"
                            secondaryText={data}
                        />
                        <ListItem 
                            primaryText="Número do Documento"
                            secondaryText={numDocumento}
                        />
                        <ListItem 
                            primaryText="Descrição do Documento"
                            secondaryText={descricao}
                        />
                        <ListItem 
                            primaryText="Telemanutenção"
                            secondaryText={telemanutencao}
                        />
                        <ListItem 
                            primaryText="Insite"
                            secondaryText={insite}
                        /> 
                        <ListItem 
                            primaryText="Deslocação"
                            secondaryText={deslocacao}
                        /> 
                        <ListItem 
                            primaryText="Total de Horas do Documento"
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