import React from 'react'

export default function Modes(props) {

        const divStyle = {
          float: 'right',
          margin:'10px',
        };

        const modes = (x) => {
           props.changeIt(x)
        }

  return (
         <div className="btn-group" role="group" aria-label="Basic mixed styles example"style={divStyle}>
            <button type="button" onClick={() => modes('danger')} className="btn btn-danger"style={divStyle}>Red</button>
            <button type="button" onClick={() => modes('secondary')} className="btn btn-secondary" style={divStyle}>Black</button>
            <button type="button" onClick={() => modes('success')} className="btn btn-success"style={divStyle}>Green</button>
          </div>
  )
}
