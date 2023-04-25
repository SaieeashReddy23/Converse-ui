import styled from 'styled-components'
import { DashboardItems } from '../../components/DashboardPage'
import { FaChevronDown } from 'react-icons/fa'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useState } from 'react'

const Dashboard = () => {
  const [showOptions, setShowOptions] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

  const [plannedDate, setPlannedDate] = useState(new Date())

  return (
    <Wrapper className="dashboard-container">
      <div className="header">
        <h4>Dashboard</h4>
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
          <div
            className="filter-selector"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <p>Planned Date</p>
            <span>
              <FaChevronDown />
            </span>
          </div>

          {showCalendar && (
            <div className="calendar">
              <Calendar value={plannedDate} onChange={setPlannedDate} />
            </div>
          )}
        </div>

        <div className="filter">
          <div className="filter-selector">
            <p>Created Date</p>
            <span>
              <FaChevronDown />
            </span>
          </div>
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
