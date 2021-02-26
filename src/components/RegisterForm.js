import React, { Component } from "react";
import FormDetails from './FormDetails';
import Confirm from './Confirm'
import Success from './Success'

export class RegisterForm extends Component {
  state = {
    step: 1,
    cliente: "",
    saldoHoras: "",
    data: "",
    numDocumento: "",
    descricao: "",
    telemanutencao: "",
    insite: "",
    deslocacao: "",
    totalHorasDoc: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChanges = input => e => {
      this.setState({[input]: e.target.value});
  }
  render() {
    const{step} = this.state;
    const {cliente, saldoHoras, data, numDocumento, descricao, telemanutencao, insite, deslocacao, totalHorasDoc} = this.state;
    const values = {cliente, saldoHoras, data, numDocumento, descricao, telemanutencao, insite, deslocacao, totalHorasDoc}
    switch(step){
      case 1:
        return(
          <FormDetails
            nextStep={this.nextStep}
            handleChanges={this.handleChanges}
            values={values}
          />
        );
      case 2:
        return( 
          <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
          />
        );
      case 3:
        return <Success/>

    }
    return <div></div>;
  }
}

export default RegisterForm;