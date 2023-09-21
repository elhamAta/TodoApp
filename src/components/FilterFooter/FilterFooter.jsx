import React from "react";
import './FilterFooter.css'
const FilterFooter = ({tasks}) =>(
    <div className="FilterFooter">
        <div className="FilterFooter--countItems">
          {tasks.length} items
        </div>
        <div className="FilterFooter--filters">
          <ul>
            <li>
              <button className="active"> All </button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
          </ul>
        </div>
    </div>
)

export default FilterFooter