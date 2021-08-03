import React from 'react'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Buttons = (props) => {
  return (
    <div>
      <Button 
        className="me-2" 
        variant="primary" 
        onClick={props.handleStart}
      >
        Start
      </Button> 
      <Button  
        className="me-2" 
        variant="danger" 
        onClick={props.handleStop} 
        disabled={props.time === 0}
      >
        Stop
      </Button>
      <Button 
        className="me-2 wait" 
        variant="secondary" 
        onDoubleClick={props.handleWait} 
        disabled={props.time === 0}
        title="Wait"
      >
        <i className="far fa-pause"></i>
      </Button>
      <Button 
        className="reset"
        variant="secondary" 
        onClick={props.reset} 
        disabled={props.time === 0}
        title="Reset"
      >
        <i className="fas fa-sync-alt"></i>
      </Button>
    </div>
  )
}

Buttons.propTypes = {
  time: PropTypes.number.isRequired,
  reset: PropTypes.func,
  handleWait: PropTypes.func,
  handleStop:  PropTypes.func,
  handleStart: PropTypes.func
}

export default Buttons;