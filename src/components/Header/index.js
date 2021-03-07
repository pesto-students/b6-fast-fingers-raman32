import React, { useContext } from 'react'
import './index.css'
import Text from '../../components/Text'

import personIcon from '../../assets/icons/person-icon.svg'
import gamepadIcon from '../../assets/icons/gamepad-icon.svg'

import { getDifficulty } from '../../utils/difficulty'
import { convertToMinutesAndSeconds } from '../../utils/time'
import { UserContext } from '../../App'

function Header({playerName, difficulty, score}) {
    const{user} = useContext(UserContext);
    return (
        <div className="header">
        <div className="headerLeft">
            <Text icon={personIcon} text={`player_${!!user? user.name: "Anonymous"}`} />
            <Text icon={gamepadIcon} text={`difficulty: ${getDifficulty(difficulty)}`} />
        </div>
        <div className="headerRight">
            <Text text="Fast Fingers" />
            <Text text={`Score: ${convertToMinutesAndSeconds(score)}`} />
        </div>
    </div>
    )
}

export default React.memo(Header)
