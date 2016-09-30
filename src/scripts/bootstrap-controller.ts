/// <reference path="../../typings/index.d.ts" />

import {KDController} from './controller/KDController';
import {Colours} from './common/utils';
const app = new KDController({ resize: true, width: "100%", height: "100%", backgroundColor: Colours.getBackground('blue') });