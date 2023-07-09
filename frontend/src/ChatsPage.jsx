import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced' 

const ChatsPage = (props )=>{
    const chatProps = useMultiChatLogic('40248dc4-4649-4f9e-8f42-eb5ae7eb1d0b', props.user.username, props.user.secret);
    return (
    <div style={{height: '100vh'}}> 
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}  style={{height: '100%'}}/>
    </div>
    )
    
}

export default ChatsPage