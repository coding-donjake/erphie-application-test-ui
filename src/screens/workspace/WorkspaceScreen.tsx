import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFolder,
  faGears,
  faRightFromBracket,
  faRocket,
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

const WorkspaceScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const recordingFolder = useSelector(
    (state: RootState) => state.workspace.recordingFolder
  );

  const handleRecordingFolderChange = async () => {
    const result = await window.electronAPI.selectFolder();
    console.log(result);

    dispatch(setRecordingFolder(result ? result[0] : ""));
  };

  return (
    <Screen
      leftPanel={
        <LeftPanel
          logoAlt="Erphie Logo"
          navigations={[
            <Button
              variant="purple"
              icon={<FontAwesomeIcon icon={faDesktop} />}
              text="Workspace"
            />,
            <Button
              variant="dark"
              icon={<FontAwesomeIcon icon={faRocket} />}
              text="Execution"
            />,
            <Button
              variant="dark"
              icon={<FontAwesomeIcon icon={faGears} />}
              text="Settings"
            />,
            <Button
              variant="red"
              cls="push-bottom"
              icon={<FontAwesomeIcon icon={faRightFromBracket} />}
              text="Exit Application"
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
                />,
                <span className="flex-1">
                  <Input
                    variant="light"
                    id="recordingFolder"
                    value={recordingFolder}
                    readOnly
                    disabled
                  />
                </span>,
              ]}
            />
          }
        />
      }
    />
  );
};

export default WorkspaceScreen;
