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
        <LeftPanel>
          <Button
            variant="purple"
            icon={<FontAwesomeIcon icon={faDesktop} />}
            text="Workspace"
          />
          <Button
            variant="dark"
            icon={<FontAwesomeIcon icon={faRocket} />}
            text="Execution"
          />
          <Button
            variant="dark"
            icon={<FontAwesomeIcon icon={faGears} />}
            text="Settings"
          />
          <Button
            variant="red"
            cls="push-bottom"
            icon={<FontAwesomeIcon icon={faRightFromBracket} />}
            text="Exit Application"
          />
        </LeftPanel>
      }
    >
      <Content
        appBar={
          <AppBar>
            <Button
              variant="dark"
              icon={<FontAwesomeIcon icon={faFolder} />}
              text="Select Folder"
              onClick={handleRecordingFolderChange}
            />
            <span className="flex-1">
              <Input
                variant="light"
                id="recordingFolder"
                value={recordingFolder}
                readOnly
                disabled
              />
            </span>
            <div className="flex flex-row gap-2 ml-8">
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
            </div>
          </AppBar>
        }
      ></Content>
    </Screen>
  );
};

export default WorkspaceScreen;
