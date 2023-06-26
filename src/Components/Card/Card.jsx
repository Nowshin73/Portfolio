import React from 'react'
import './Card.css'
import { useContext } from 'react'
import { themeContext } from '../../Context'


const Card = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>

      <div className="card">
        <img src={emoji} alt="" />
        <span style={{ color: darkMode ? 'var(--orange)' : '' }}>{heading}</span>
        <span style={{ color: darkMode ? 'white' : '' }}>{detail} </span>
        <button class=" button" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Learn more</button>
      </div>
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card