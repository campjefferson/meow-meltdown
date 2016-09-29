/// <reference path="../../typings/index.d.ts" />

import {KDController} from './controller/KDController';
import {Colours} from './common/utils';
const app = new KDController({ resize: true, backgroundColor: Colours.PINK_PRIMARY });