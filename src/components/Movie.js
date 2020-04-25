import React from 'react';


const movie = (props) => {

  return (
            <div key={props.obj.id} className="card col-md-3">
                <img className="card-img-top" src={props.obj.Poster} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{props.obj.Title}</h5>
                  <button class="btn btn-primary">View Detail</button>
                </div>
            </div>
          );
}

export default movie;
