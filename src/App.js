import { ChatEngine } from "react-chat-engine"
import ChatFeed from "./components/ChatFeed"

import "./App.css"

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="20b9e30d-737b-4343-b80d-dacd28a53742"
            userName="Leon"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App