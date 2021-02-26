import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChanges} = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Preencher detalhes do documento"/>
                    <TextField
                        hintText="Introduza o Cliente"
                        floatingLabelText="Nome do Cliente"
                        onChange={handleChanges('cliente')}
                        defaultValue={values.cliente}
                    />
                    <br/>
                    <TextField
                        hintText="Introduza a Data do Documento"
                        floatingLabelText="Data do Documento"
                        onChange={handleChanges('data')}
                        defaultValue={values.data}
                    />
                    <br/>
                    <TextField
                        hintText="PATXXXX"
                        floatingLabelText="Número do Documento"
                        onChange={handleChanges('numDocumento')}
                        defaultValue={values.numDocumento}
                    />
                    <br/>
                    <TextField
                        hintText="Introduza a Descrição do Documento"
                        floatingLabelText="Descrição do Documento"
                        multiline
                        rows={3}
                        onChange={handleChanges('descricao')}
                        defaultValue={values.descricao}
                    />
                    <br/>
                    <TextField
                        hintText="Remoto"
                        floatingLabelText="Remoto"
                        onChange={handleChanges('telemanutencao')}
                        defaultValue={values.telemanutencao}
                    />
                    <br/>
                    <TextField
                        hintText="Deslocação"
                        floatingLabelText="Deslocação"
                        onChange={handleChanges('deslocacao')}
                        defaultValue={values.deslocacao}
                    />
                    <br/>
                    <TextField
                        hintText="Insite"
                        floatingLabelText="Insite"
                        onChange={handleChanges('insite')}
                        defaultValue={values.insite}
                    />
                    <br/>
                    <TextField
                        hintText="Total de Horas no Documento"
                        floatingLabelText="Total de Horas"
                        onChange={handleChanges('totalHorasDoc')}
                        defaultValue={values.totalHorasDoc}
                    />
                    <br/>
                    <RaisedButton 
                        label="Continuar"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
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

export default FormDetails