
import './index.css'

export const Flight = (props) => {
    return (
      <div className="container">
      <div className="flight">
        <div className="flight__icon">
        </div>
        
        <div className="flight__info">
          <div className="flight__stop">
            <p className="flight__stop-type">Odlet:</p>
            <p className="flight__stop-city">{props.cityFrom}</p>
            <p className="flight__stop-time">{props.timeFrom}</p>
          </div>
          <div className="flight__stop">
            <p className="flight__stop-type">Přílet:</p>
            <p className="flight__stop-city">{props.cityTo}</p>
            <p className="flight__stop-time">{props.timeTo}</p>
          </div>
        </div>
      </div>
      </div>
    )
  };