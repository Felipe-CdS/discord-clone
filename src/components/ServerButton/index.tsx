import React from 'react';
import Logo from '../../assets/Discord-Logo-White.svg'
import { Button } from './styles';

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions?: number;
}

const ServerButton: React.FC<Props> = ({selected, isHome, hasNotifications, mentions}) => {
    return(
        <Button 
            className={selected ? 'active' : ''} 
            isHome={isHome} 
            hasNotifications={hasNotifications} 
            mentions={mentions}>
            {isHome && <img src={Logo} alt='Discord' />}
        </Button>
    );
}

export default ServerButton