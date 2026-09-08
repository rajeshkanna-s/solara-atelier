import {useEffect,useState} from 'react';
export const slug=page=>page.toLowerCase().replaceAll(' ','-');
export function usePage(){
 const[page,setPage]=useState('Home');
 const jump=name=>{const el=document.getElementById('section-'+slug(name));if(el){history.pushState(null,'','#/'+slug(name));el.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});setPage(name)}};
 useEffect(()=>{
  const sections=[...document.querySelectorAll('[data-scroll-section]')];let frame=0;
  const sync=()=>{frame=0;const line=(document.querySelector('header')?.getBoundingClientRect().height||100)+70;let current=sections[0];for(const s of sections){if(s.getBoundingClientRect().top<=line)current=s}if(current){const name=current.dataset.scrollSection;setPage(name);document.title=(document.title.split(' — ')[0])+' — '+name;}};
  const scroll=()=>{if(!frame)frame=requestAnimationFrame(sync)};
  const restore=()=>{let key=location.hash.replace(/^#\/?/,'');try{key=decodeURIComponent(key)}catch{key='home'}const el=document.getElementById('section-'+key);el?.scrollIntoView({behavior:'instant'});sync()};
  const initial=requestAnimationFrame(restore);window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('hashchange',restore);window.addEventListener('popstate',restore);window.addEventListener('resize',scroll);
  return()=>{cancelAnimationFrame(initial);cancelAnimationFrame(frame);window.removeEventListener('scroll',scroll);window.removeEventListener('hashchange',restore);window.removeEventListener('popstate',restore);window.removeEventListener('resize',scroll)};
 },[]);return[page,jump];
}
