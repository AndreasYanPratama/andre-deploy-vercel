// import "./toggle.css";
import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const Toggle = ({ isDark, closeDark }) => {
    return(
        <div className="t">
            <img src="/sun.png" alt="" className="t-icon" />
            <img src="/moon.png" alt="" className="t-icon" />
            <div className={`t-button ${isDark ? 'left-0' : 'right-0'}`}  onClick={() => closeDark()} ></div>
        </div>
    )
}

Toggle.proTypes = {
    isDark: PropTypes.bool,
    closeDark: PropTypes.func.isRequired,
}

Toggle.defaultProps = {
    isDark: false,
}

export default Toggle;