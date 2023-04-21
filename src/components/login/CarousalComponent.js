import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

import { carousalItems } from '../../assets/data'

import { useState, useEffect } from 'react'

const CarousalComponent = () => {
  const [items, setItems] = useState(carousalItems)
  const [currentItem, setCurrentItem] = useState(0)

  const handlePrev = () => {
    setCurrentItem((oldItem) => {
      const newItem = (oldItem - 1 + items.length) % items.length
      return newItem
    })
  }

  const handleNext = () => {
    setCurrentItem((oldItem) => {
      const nextitem = (oldItem + 1) % items.length
      return nextitem
    })
  }

  useEffect(() => {
    const id = setInterval(() => {
      handleNext()
    }, 2500)

    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div className="footer">
      <div className="carousal-container">
        {items.map(({ header, text }, index) => {
          return (
            <div
              className="carousal-item"
              style={{
                transform: `translateX(${(index - currentItem) * 100}%)`,
                opacity: index === currentItem ? 1 : 0,
                visibility: index === currentItem ? 'visible' : 'hidden',
              }}
            >
              <h4>{header}</h4>
              <p>{text}</p>
              <p>{text}</p>
            </div>
          )
        })}
      </div>

      <div className="footer-nav">
        <button className="prev-btn" onClick={handlePrev}>
          <FiChevronLeft />
        </button>

        <div className="dots-container">
          {items.map((item, index) => {
            if (index === currentItem) {
              return <div className="dot active-dot"></div>
            }

            return <div className="dot"></div>
          })}
        </div>

        <button className="next-btn" onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  )
}
export default CarousalComponent
