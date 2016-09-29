/// <reference path="../../typings/index.d.ts" />

import {KDGame} from './game/KDGame';
import {Colours} from './common/utils';
const app = new KDGame({ resize: false, width:1920, height:1080, backgroundColor: Colours.BLUE_BACKGROUND });