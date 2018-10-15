import React, {Component} from "react";
import CardReactFormContainer from 'card-react';

class Events extends Component {
  render() {
    return (
  <div>
    
    <CardReactFormContainer
      container="card-wrapper" // required

      formInputsNames={
        {
          number: 'CCnumber', // optional — default "number"
          expiry: 'CCexpiry',// optional — default "expiry"
          cvc: 'CCcvc', // optional — default "cvc"
          name: 'CCname' // optional - default "name"
        }
      }

      initialValues= {
        {
          number: '4242424242424242', // optional — default •••• •••• •••• ••••
          cvc: '123', // optional — default •••
          expiry: '16/12', // optional — default ••/••
          name: 'Random Name' // optional — default FULL NAME
        }
      }

      classes={
        {
          valid: 'valid-input', // optional — default 'jp-card-valid'
          invalid: 'invalid-input' // optional — default 'jp-card-invalid'
        }
      }

      formatting={true} // optional - default true
    >

      <form>
        <input placeholder="Full name" type="text" name="CCname" />
        <input placeholder="Card number" type="text" name="CCnumber" />
        <input placeholder="MM/YYYYY" type="text" name="CCexpiry" />
        <input placeholder="CVC" type="text" name="CCcvc" />
      </form>

    </CardReactFormContainer>
    <div id="card-wrapper"></div>
  </div>
    )
    }
  };

export default Events;