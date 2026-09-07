// Clockwise rotations in radians; hands are authored pointing toward 12.
export function clockAngles(date=new Date()) {
 const seconds=date.getSeconds()+date.getMilliseconds()/1000;
 const minutes=date.getMinutes()+seconds/60;
 const hours=date.getHours()%12+minutes/60;
 return {second:-seconds*Math.PI/30,minute:-minutes*Math.PI/30,hour:-hours*Math.PI/6};
}
export const watchVariants={
 'Dune Rider':{dial:'#17140f',ink:'#d9b378',strap:'#382519',band:'leather',finish:'bronze',scale:.95},
 'Eclipse Core':{dial:'#0d0e10',ink:'#d9b378',strap:'#171210',band:'leather',finish:'bronze',scale:1},
 'Nomad GMT':{dial:'#1d211f',ink:'#dccca2',strap:'#877251',band:'mesh',finish:'bronze',gmt:true,scale:1},
 'Solstice':{dial:'#e9ddbd',ink:'#473d2a',strap:'#533526',band:'leather',finish:'steel',scale:.90},
 'Nocturne Chrono':{dial:'#161a20',ink:'#bfc9cd',strap:'#606a74',band:'bracelet',finish:'onyx',chrono:true,scale:1},
 'Emerald Tide':{dial:'#074633',ink:'#edce86',strap:'#966137',band:'leather',finish:'bronze',diver:true,scale:1}
};
