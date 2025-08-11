import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFolder,
  faGears,
  faPlay,
  faRightFromBracket,
  faRocket,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { setRecordingFolder } from "./workspaceSlice";
import Screen from "../../components/screen/Screen";
import LeftPanel from "../../components/screen/LeftPanel";
import Button from "../../components/button/Button";
import Content from "../../components/screen/Content";
import AppBar from "../../components/screen/AppBar";
import Input from "../../components/input/Input";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { toastLog } from "../../lib/log";

const WorkspaceScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const recordingFolder = useSelector(
    (state: RootState) => state.workspace.recordingFolder
  );

  const handleRecordingFolderChange = async () => {
    const result = await window.electronAPI.selectFolder();

    dispatch(setRecordingFolder(result ? result[0] : ""));
  };

  const record = async () => {
    if (!(await window.electronAPI.isNodeJSInstalled())) return;
    if (!(await window.electronAPI.isPlaywrightBrowserInstalled("chromium")))
      return;
    return;
    const result = await window.electronAPI.record({
      preferredBrowser: "chromium",
      headless: false,
      args: [],
    });
    console.log(result);
  };

  useEffect(toastLog, []);

  return (
    <Screen
      leftPanel={
        <LeftPanel
          navigations={[
            <Button
              variant="purple"
              icon={<FontAwesomeIcon icon={faDesktop} />}
              text="Workspace"
              key="workspace"
            />,
            <Button
              variant="dark"
              icon={<FontAwesomeIcon icon={faRocket} />}
              text="Execution"
              key="execution"
            />,
            <Button
              variant="dark"
              icon={<FontAwesomeIcon icon={faGears} />}
              text="Settings"
              key="settings"
            />,
            <Button
              variant="red"
              cls="push-bottom"
              icon={<FontAwesomeIcon icon={faRightFromBracket} />}
              text="Exit Application"
              key="exitApplication"
            />,
          ]}
        />
      }
      content={
        <Content
          appBar={
            <AppBar
              content={[
                <Button
                  variant="dark"
                  icon={<FontAwesomeIcon icon={faFolder} />}
                  text="Select Folder"
                  onClick={handleRecordingFolderChange}
                  key="recordingFolderButton"
                />,
                <span className="flex-1" key="recordingFolder">
                  <Input
                    variant="light"
                    id="recordingFolder"
                    value={recordingFolder}
                    readOnly
                    disabled
                  />
                </span>,
                <div
                  className="flex flex-row gap-2 ml-8"
                  key="recordingActions"
                >
                  <Button
                    variant="red"
                    icon={<FontAwesomeIcon icon={faVideo} />}
                    text="Record"
                    onClick={record}
                  />
                  <Button
                    variant="green"
                    icon={<FontAwesomeIcon icon={faPlay} />}
                    text="Play"
                  />
                </div>,
              ]}
            />
          }
        />
      }
    />
  );
};

export default WorkspaceScreen;
