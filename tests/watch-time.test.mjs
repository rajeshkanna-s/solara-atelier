import test from 'node:test';
import assert from 'node:assert/strict';
import {clockAngles,watchVariants} from '../src/watch-time.js';
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-10);
test('midnight and noon align all hands at twelve',()=>{for(const hour of [0,12]){const a=clockAngles(new Date(2026,8,7,hour,0,0));close(a.hour,0);close(a.minute,0);close(a.second,0)}});
test('all hands include fractional time at 3:15:30.500',()=>{const a=clockAngles(new Date(2026,8,7,15,15,30,500));close(a.second,-30.5*Math.PI/30);close(a.minute,-(15+30.5/60)*Math.PI/30);close(a.hour,-(3+(15+30.5/60)/60)*Math.PI/6)});
test('minute rollover is continuous and follows supplied current date',()=>{const before=clockAngles(new Date(2026,8,7,10,59,59,999));const after=clockAngles(new Date(2026,8,7,11,0,0));assert.ok(Math.abs(after.hour-before.hour)<.000001);close(after.minute,0)});
test('six distinct model configurations cover the collection',()=>{assert.equal(Object.keys(watchVariants).length,6);assert.equal(watchVariants['Nomad GMT'].band,'mesh');assert.equal(watchVariants['Nocturne Chrono'].chrono,true);assert.equal(watchVariants['Emerald Tide'].diver,true)});
