import React, {Children, useState} from 'react';
import {motion, useReducedMotion} from 'motion/react';

// Adapted from Motion Primitives TextEffect and AnimatedGroup.
// Source links and upstream notices are in public/licenses/.
const ease = [0.22, 1, 0.36, 1];
export function TextEffect({children, as = 'h1'}) {
  const reduced = useReducedMotion();
  const Tag = motion[as];
  return <Tag initial={reduced ? false : 'hidden'} whileInView="visible"
    viewport={{once: true, amount: 0.15}}
    variants={{visible: {transition: {staggerChildren: 0.11}}}}>
    <span className="sr-only">{children.replaceAll('\n', ' ')}</span>
    {children.split('\n').map((line, i) => <motion.span key={i} aria-hidden="true"
      className="motion-text-line" variants={{hidden: {opacity: 0, y: 24, filter: 'blur(4px)'},
        visible: {opacity: 1, y: 0, filter: 'blur(0px)', transition: {duration: reduced ? 0 : 0.75, ease}}}}>{line}</motion.span>)}
  </Tag>;
}

export function AnimatedGroup({children, className}) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : 'hidden'}
    whileInView="visible" viewport={{once: true, amount: 0.15}}
    variants={{visible: {transition: {staggerChildren: reduced ? 0 : 0.09}}}}>
    {Children.map(children, child => <motion.div variants={{hidden: {opacity: 0, y: 16},
      visible: {opacity: 1, y: 0, transition: {duration: reduced ? 0 : 0.6, ease}}}}>{child}</motion.div>)}
  </motion.div>;
}

export function Reveal({children, ...props}) {
  const reduced = useReducedMotion();
  return <motion.div {...props} initial={reduced ? false : {opacity: 0, y: 18}}
    whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 'some'}}
    transition={{duration: reduced ? 0 : 0.7, ease}}>{children}</motion.div>;
}

// Animate UI's Button primitive, adapted to native buttons and the atelier scale.
export function AnimatedButton({hoverScale = 1.025, tapScale = 0.97, ...props}) {
  const reduced = useReducedMotion();
  return <motion.button whileHover={reduced ? undefined : {scale: hoverScale}}
    whileTap={reduced ? undefined : {scale: tapScale}}
    transition={{type: 'spring', stiffness: 380, damping: 26}} {...props}/>;
}

// Cult UI ShiftCard adaptation: hover/focus shifts the image and card surface.
// All product information and actions stay available on touch and keyboard.
export function ShiftCard({children, ...props}) {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  return <motion.article {...props} className="shift-card" layout={reduced ? false : 'position'}
    initial={reduced ? false : {opacity: 0, y: 18}}
    animate={{opacity: 1, y: !reduced && (hovered || focused) ? -5 : 0}}
    exit={{opacity: 0, transition: {duration: reduced ? 0 : 0.15}}}
    transition={{duration: reduced ? 0 : 0.35, ease}}
    onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
    onFocusCapture={() => setFocused(true)}
    onBlurCapture={e => {if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false)}}>
    {children}
  </motion.article>;
}
