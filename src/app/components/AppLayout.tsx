import { Stack } from '@chakra-ui/react';
import React from 'react';
import styled from 'styled-components';
import { ConnectedStatus } from './ConnectedStatus';
import { GeneralInfos } from './GeneralInfos';
import { GuiTabs } from './GuiTabs';
import { PowerButton } from './PowerButton/PowerButton';
import { TitleBar } from './TitleBar';
import {UploadInfo} from './UploadInfo';
import {DownloadInfo} from './DownloadInfo';
import AnimationDots from "../../../images/Animation_dots.svg";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.backgroundOpacity};
`;

const ConnectionInfo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: stretch;
`;

export const AppLayout = (): JSX.Element => {
  return (
    <Container>
    <img src={AnimationDots} style={{position: 'absolute', top: '6%'}} width="auto" height="auto"/>
      <TitleBar />
      <Stack
        padding="0px 25px 0 25px"
        width="100%"
        height="0px"
        flexGrow={1}
        zIndex="1"
      >
        <ConnectedStatus />
        <GeneralInfos />
       <ConnectionInfo>
       <DownloadInfo />
        <PowerButton />
        <UploadInfo />
       </ConnectionInfo>

        <GuiTabs />
      </Stack>
    </Container>
  );
};
