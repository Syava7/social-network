
type SubscriberType = (messages: ChatMessageType[]) => void

export type ChatMessageType = {
	message: string,
	photo: string,
	userId: number,
	userName: string
}

const subscibers = [] as SubscriberType[]

export const chatApi = {
	subscribe(callback: SubscriberType ) {
		subscibers.push(callback)
	}
}