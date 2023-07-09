import React from 'react'
import './Card.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'


const Card = ({item}) => {
  const {id,name,image,des}=item;
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <span style={{ color: darkMode ? 'var(--orange)' : '' }}>{name}</span>
        {/* <span style={{ color: darkMode ? 'white' : '' }}>{detail} </span> */}
        <h3 style={{ color: darkMode ? 'white' : '' }}>The things I can do</h3>
             <ol>
            {des.map((item,index)=>
            <li style={{ color: darkMode ? 'white' : '' }} key={index}>{item}</li>
            )}
             </ol>
        <button className=" button" data-bs-target={`#${id}`} data-bs-toggle="modal">Learn more</button>
      </div>
      <div className="modal fade" id={id} aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">{name}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <h3>The things I can do</h3>
             <ol>
            {des.map((item,index)=>
            <li key={index}>{item}</li>
            )}
             </ol>
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card