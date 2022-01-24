import React, {useEffect, useState} from 'react';
import {Button, TextareaAutosize} from '@mui/material';


const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
	message: string,
	photo: string,
	userId: number,
	userName: string
}

const ChatPage: React.FC = () => {
	return <div>
		<Chat/>
	</div>
}

const Chat: React.FC = () => {
	return <div>
		<Messages/>
		<AddMessageForm/>
	</div>
}

const Messages: React.FC = () => {

	const [messages, setMessages] = useState<ChatMessageType[]>([]);

	useEffect(() => {
		ws.addEventListener('message', (e) => {
			let newMessages = JSON.parse(e.data);
			setMessages((prevMessages) => [...prevMessages, ...newMessages])
		})
	}, [])



	return <div style={{height: '400px', overflowY: 'auto'}}>
		{messages.map((m, index) => <Message key={index} message={m}/>)}
	</div>
}

const Message: React.FC<{message: ChatMessageType}> = ({message}) => {

	return <div>
		<img style={{width: '30px'}} alt='avatar' src={message.photo}/>
		<b>{message.userName}</b>
		<br/>
		{message.message}
		<hr />
	</div>
}

const AddMessageForm: React.FC = () => {
	return <div>
		<div>
			<TextareaAutosize
				placeholder="Empty"
				style={{width: 200, height: 100}}
			/>
		</div>
		<div>
			<Button color={'primary'}
							variant={'contained'}>Send</Button>
		</div>
	</div>
}

export default ChatPage