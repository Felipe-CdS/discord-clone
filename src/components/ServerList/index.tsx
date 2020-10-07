import React from 'react';

import ServerButton from '../ServerButton'
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
            <ServerButton mentions={7}/>
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={1}/>

        </Container>
    );
}

export default ServerList;