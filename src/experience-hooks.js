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
export function useMotion(page){useEffect(()=>{const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');const items=document.querySelectorAll('main section,main article');const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.08});items.forEach(el=>{el.classList.add('motion-reveal');observer.observe(el)});const tilt=e=>{if(reduced.matches||e.pointerType==='touch')return;const el=e.target.closest('.hero-art,.editorial-image,.watch-visual');if(!el)return;const r=el.getBoundingClientRect();el.style.setProperty('--tilt-x',((e.clientY-r.top)/r.height-.5)*-5+'deg');el.style.setProperty('--tilt-y',((e.clientX-r.left)/r.width-.5)*7+'deg')};const reset=e=>{const el=e.target.closest('.hero-art,.editorial-image,.watch-visual');if(el){el.style.setProperty('--tilt-x','0deg');el.style.setProperty('--tilt-y','0deg')}};document.addEventListener('pointermove',tilt);document.addEventListener('pointerout',reset);return()=>{observer.disconnect();document.removeEventListener('pointermove',tilt);document.removeEventListener('pointerout',reset)}},[])}
