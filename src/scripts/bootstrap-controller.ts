/// <reference path="../../typings/index.d.ts" />

import {KDController} from './controller/KDController';
import {Colours} from './game/utils';
const app = new KDController({ resize: true, backgroundColor: Colours.PINK_PRIMARY });