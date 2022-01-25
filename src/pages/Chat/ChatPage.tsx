import React, {useEffect, useState} from 'react';
import {Button, TextareaAutosize} from '@mui/material';
import {ChatMessageType} from '../../api/chatApi';


const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')



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

	const [message, setMessage] = useState('')

	const sendMessage = () => {

		if(!message) {
			return
		}

		ws.send(message)
		setMessage('')
	}

	return <div>
		<div>
			<TextareaAutosize
				onChange={(e) => setMessage(e.currentTarget.value)}
				value={message}
				placeholder="Empty"
				style={{width: 200, height: 30}}
			/>
		</div>
		<div>
			<Button color={'primary'}
							variant={'contained'}
							onClick={sendMessage}
							>
				Send
			</Button>
		</div>
	</div>
}

export default ChatPage