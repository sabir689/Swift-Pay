/* eslint-disable no-unexpected-multiline */
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import useUser from "../hooks/useUser";



const Room = () => {
    const {roomId} = useParams()
    const user = useUser();
    const myMeeting = async (element) =>{
        const appId = 1068152202;
        const serverSecret = "7613ac7c0f1bd50e689de388ebcaf3d6"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForProduction
        (
            appId,
            serverSecret,
            roomId,
            user,
        )
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:true,
            showLeaveRoomConfirmDialog:true
        })
    }
    return (
        <div >
        <div ref={myMeeting} />
       </div>
    );
};

export default Room;