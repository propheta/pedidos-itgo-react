import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Documento registado com sucesso"/>
                    <h1>Obrigado</h1>
                    <p>Será redirecionado para a página de consulta dos clientes</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success