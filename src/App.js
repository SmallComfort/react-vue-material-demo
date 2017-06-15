import React, { Component } from 'react';

import Avatar from './Avatar';
import BottomBar from './BottomBar';
import Button from './Button';
import ButtonToggle from './ButtonToggle';
import Card from './Card'; // unsupported
import CheckBox from './CheckBox';
import Chips from './Chips';
import Dialog from './Dialog';
import File from './File';
import Icon from './Icon';
import ImageLoader from './ImageLoader';
import InkRipple from './InkRipple';
import Input from './Input';
import List from './List'; // unsupported
import Menu from './Menu'; // unsupported
import Progress from './Progress';
import Radio from './Radio';
import Select from './Select'; // unsupported
import Sidenav from './Sidenav';
import Snackbar from './Snackbar';
import SpeedDial from './SpeedDial'; // unsupported
import Spinner from './Spinner';
import Subheader from './Subheader'; // unsupported
import Switch from './Switch';
import Tabs from './Tabs'; // unsupported
import Table from './Table'; // unsupported
import ToolBar from './ToolBar';
import ToolTip from './ToolTip';
import WhiteFrame from './WhiteFrame'; // unsupported

export default class App extends Component {
  render () {
    return (
      <div>
        <Avatar />
        <BottomBar />
        <Button />
        <ButtonToggle />
        <CheckBox />
        <Chips />
        <Dialog />
        <File />
        <Icon />
        <ImageLoader />
        <InkRipple />
        <Input />
        <Progress />
        <Radio />
        <Sidenav />
        <Snackbar />
        <Spinner />
        <Switch />
        <ToolBar />
        <ToolTip />
      </div>
    );
  }
}
