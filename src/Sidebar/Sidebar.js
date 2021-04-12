import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOptions/SidebarOption";
import db from "../firebase";

import {
  FiberManualRecordRounded,
  CreateRounded,
  InsertCommentRounded,
  InboxRounded,
  DraftsRounded,
  BookmarkBorderRounded,
  PeopleAltRounded,
  AppsRounded,
  FileCopyRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
  AddRounded,
} from "@material-ui/icons";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((
      snapshot // going to rooms
    ) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          // getting each document and storing the collections in each document
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
    return () => {};
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Web Dev React</h2>
          <h3>
            <FiberManualRecordRounded />
            {user?.displayName}
          </h3>
        </div>
        <CreateRounded />
      </div>
      <SidebarOption Icon={InsertCommentRounded} title="Threads" />
      <SidebarOption Icon={InboxRounded} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsRounded} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderRounded} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltRounded} title="People & user groups" />
      <SidebarOption Icon={AppsRounded} title="Apps" />
      <SidebarOption Icon={FileCopyRounded} title="File browser" />
      <SidebarOption Icon={ExpandLessRounded} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreRounded} title="Channels" />
      <hr />
      <SidebarOption Icon={AddRounded} addChannelOption title="Add Channel" />

      {/* Connect to DB and list all the channels */}
      {/* <SidebarOption ... /> */}
      {channels.map((
        channel // getting each channel stored in the object above
      ) => (
        <SidebarOption title={channel.name} id={channel.id} /> // showing it in the sidebar
      ))}
    </div>
  );
}

export default Sidebar;
