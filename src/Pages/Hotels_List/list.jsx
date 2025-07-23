import './list.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem'

const Hotels = () => {

  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type='List' />

      <div className="listContainer">
        <div className="listWrapper">

          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>

            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="lsItem">
              <label>Check-In Date</label>

              <span onClick={() => { setOpenDate(!openDate) }}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

              {openDate && <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}

            </div>

            <div className="lsItem">
              <label>Options</label>

              <div className="lsOptions">

                <div className="lsoItem">
                  <span className="lsoText">
                    Min Price <small>per night</small>
                  </span>
                  <input type="number" className="lsoInput" />
                </div>

                <div className="lsoItem">
                  <span className="lsoText">
                    Max Price <small>per night</small>
                  </span>
                  <input type="number" className="lsoInput" />
                </div>

                <div className="lsoItem">
                  <span className="lsoText">
                    Adults
                  </span>
                  <input min={1} type="number" className="lsoInput" placeholder={options.adult} />
                </div>

                <div className="lsoItem">
                  <span className="lsoText">
                    Children
                  </span>
                  <input min={0} type="number" className="lsoInput"
                    placeholder={options.children} />
                </div>

                <div className="lsoItem">
                  <span className="lsoText">
                    Rooms
                  </span>
                  <input min={1} type="number" className="lsoInput"
                    placeholder={options.room} />
                </div>

              </div>

            </div>

            <button>Search</button>

          </div>

          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hotels