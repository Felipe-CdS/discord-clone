import React, {useRef, useEffect} from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon  } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return(
        <Container>
            <Messages ref={messagesRef}>
              
                    <ChannelMessage 
                    author="Coutinho"
                    date="07/10/2020"
                    content="Teste 1"/>
                 
                <ChannelMessage 
                    author="Isak"
                    date="07/10/2020"
                    content={
                        <>
                        <Mention>@Coutinho</Mention>, afirmativo.
                        </>
                    }
                    hasMention
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;