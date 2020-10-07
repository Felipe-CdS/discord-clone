import React from 'react';

import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return(
        <Container>
           <Category>
               <span>CANAIS DE TEXTO</span>
               <AddCategoryIcon />
           </Category>

           <ChannelButton channelName="acdc"/>
           <ChannelButton channelName="teorias-da-ursal"/>
           <ChannelButton channelName="quadro-de-missões"/>
           <ChannelButton channelName="devasso"/>
        </Container>
    );
}

export default ChannelList;