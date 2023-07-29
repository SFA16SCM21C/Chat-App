import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('46951dbc-fb52-44bf-a76c-a34ab2545e77', props.user.username, props.user.secret);
  return (
    <div style={{ height: '100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
  );
};

export default ChatsPage;