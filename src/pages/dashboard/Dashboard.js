import styled from 'styled-components'
import { DashboardItems } from '../../components/DashboardPage'
import { FaChevronDown } from 'react-icons/fa'
import { DatePicker } from '@mui/x-date-pickers'

import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const Dashboard = () => {
  const [showOptions, setShowOptions] = useState(false)

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('auth')
  )

  if (!authenticated) {
    return <Navigate to="/login" />
  }

  return (
    <Wrapper className="dashboard-container">
      <div className="header">
        <h4>Material Indent</h4>
        <p>
          <span>Welcome Back! </span> Sai Mahendra
        </p>
      </div>

      <div className="filters-container">
        <div className="filter">
          <div
            className="filter-selector"
            onClick={() => setShowOptions(!showOptions)}
          >
            <p>Project</p>
            <span>
              <FaChevronDown />
            </span>
          </div>

          {showOptions && (
            <div className="options">
              <p>Kmv Project</p>
              <p>Dummy Project</p>
              <p>second Project</p>
              <p>thired Projects</p>
            </div>
          )}
        </div>

        <div className="filter">
          <div className="filter-selector">
            <p>Activity</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>

        <div className="filter">
          <div className="filter-selector">
            <p>City</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>

        <div className="filter">
          <div className="filter-selector">
            <p>Item</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>

        <div className="filter">
          {/* <div className="filter-selector date-selector">
            <p>Planned Date</p>
            <span>
              <FaChevronDown />
            </span>
          </div> */}
          <DatePicker
            label="Planned Date"
            slotProps={{ textField: { size: 'small' } }}
            showDaysOutsideCurrentMonth
            sx={{
              margin: 0,
              padding: '0',
              backgroundColor: 'white',
              border: 'transparent',
              borderBlock: 'transparent',
              borderRadius: '5px',

              '& .MuiOutlinedInput-notchedOutline': {
                border: 'transparent',
                color: 'black',
              },

              '& .MuiOutlinedInput-notchedOutline:hover': {
                border: '2px solid #60a5fa',
                color: 'black',
              },

              '& .MuiInputBase-root': {
                padding: '0.25rem 0.5rem',
                borderRadius: '10px',
                border: '2px solid transparent',
              },

              '& .MuiInputBase-root:hover': {
                padding: '0.25rem 0.5rem',
                borderRadius: '10px',
                border: '2px solid #60a5fa',
              },
            }}
          />
        </div>

        <div className="filter">
          {/* <div className="filter-selector date-selector"></div> */}
          <DatePicker
            label="Created Date"
            slotProps={{ textField: { size: 'small' } }}
            showDaysOutsideCurrentMonth
            sx={{
              margin: 0,
              padding: '0',
              backgroundColor: 'white',
              border: 'transparent',
              borderBlock: 'transparent',
              borderRadius: '5px',

              '& .MuiOutlinedInput-notchedOutline': {
                border: 'transparent',
                color: 'black',
              },

              '& .MuiOutlinedInput-notchedOutline:hover': {
                border: '2px solid #60a5fa',
                color: 'black',
              },

              '& .MuiInputBase-root': {
                padding: '0.25rem 0.5rem',
                borderRadius: '10px',
                border: '2px solid transparent',
              },

              '& .MuiInputBase-root:hover': {
                padding: '0.25rem 0.5rem',
                borderRadius: '10px',
                border: '2px solid #60a5fa',
              },
            }}
          />
        </div>

        {/* <div className="filter">
          <div className="filter-selector">
            <p>Status</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>

        <div className="filter">
          <div className="filter-selector">
            <p>Availability</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div>

        <div className="filter">
          <div className="filter-selector">
            <p>Search</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
        </div> */}
      </div>

      <DashboardItems />
    </Wrapper>
  )
}
export default Dashboard

const Wrapper = styled.div`
  overflow: scroll;
  background-color: var(--grey-50);
  border-top-left-radius: 2rem;
  /* border-bottom-left-radius: 2rem; */
`
